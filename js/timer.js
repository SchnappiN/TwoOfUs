(function () {
    var thatSpecialTime = new Date();
    thatSpecialTime.setFullYear(2018, 7, 18);
    thatSpecialTime.setHours(21, 32, 0);
    function count() {
        var timePassed = new Date() - thatSpecialTime;
        timePassed = Math.floor(timePassed/1000);
        var seconds = timePassed%60;
        timePassed = Math.floor(timePassed/60);
        var minutes = timePassed%60;
        timePassed = Math.floor(timePassed/60);
        var hours = timePassed%24;
        timePassed = Math.floor(timePassed/24);
        var days = timePassed;
        $("#day").html(days);
        $("#hour").html(hours);
        $("#minute").html(minutes);
        $("#second").html(seconds);

        if(days === 100) {
            window.location.replace("./special/100.html");
        }
    }
    count();
    setInterval(count, 1000);
})();
