
Number.prototype.pad = function(size) {
    var s = String(this);
    if(typeof(size) !== "number"){size = 2;}

    while (s.length < size) {s = "0" + s;}
    return s;
}

function countDown(second,endMinute,endHour,endDay,endMonth,endYear) {
    var now = new Date();
    second = second || now.getSeconds();
    second = second + now.getSeconds();
    endYear =  endYear || now.getFullYear();
    endMonth = endMonth ? month - 1 : now.getMonth();   //номер месяца начинается с 0
    endDay = endDay || now.getDate();
    endHour = endHour || now.getHours() ;
    endMinute = endMinute || now.getMinutes();

    var endDate = new Date(endYear,endMonth,endDay,endHour,endMinute,second);
    var interval = setInterval(function() { //запускаем таймер с интервалом 1 секунду
        var time = endDate.getTime() - now.getTime();
        if (time < 0) {                      //если конечная дата меньше текущей
            clearInterval(interval);
        } else {
            var hours = Math.floor(time / 36e5) % 24;
            var minutes = Math.floor(time / 6e4) % 60;
            var seconds = Math.floor(time / 1e3) % 60;
            var digit=' <span class="block"> <span class="rect hours">';
            var end='</span>';
            var hLabel = '</span> <span class="label"><span class="for990">godzin</span><span class="for320">godzin</span><span class="for640">G.</span></span>';
            var mLabel = '</span> <span class="label"><span class="for990">minut</span><span class="for320">minut</span><span class="for640">M.</span></span>';
            var sLabel = '</span> <span class="label"><span class="for990">sekund</span><span class="for320">sekund</span><span class="for640">S.</span></span>';
            var points = ' <span class="points">:</span>';

            var timers = document.getElementsByClassName('timer');

            [].forEach.call(timers, function(timer){
                timer.innerHTML=digit+hours.pad(2)+hLabel+end+points+digit+minutes.pad(2)+mLabel+end+points+digit+seconds.pad(2)+sLabel+end+'<div class="clear"/>';
            });

            if (!seconds && !minutes && !hours) {
                clearInterval(interval);
            }
        }
        now.setSeconds(now.getSeconds() + 1); //увеличиваем текущее время на 1 секунду
    }, 1000);
}
countDown(2700); //устанавливаем таймер на прмерно 1 день