function fadeOut() {
    var x = document.getElementById("title-container");
    var y = document.getElementById("portfolio-container");

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

    setTimeout(function() {
        this.fadeIn();
    }, 1000)

}

function fadeIn() {
    var x = document.getElementById("portfolio-container");
    var op = 0.1;  // initial opacity
    x.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        x.style.opacity = op;
        x.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}

function ff() {
    $('title_container').fadeIn();
}

