function fade() {
    var x = document.getElementById("t");
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            x.style.display = 'none';
        }
        x.style.opacity = op;
        x.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
