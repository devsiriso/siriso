function fadeOut() {
    console.log('fade out');
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

function changeContent(displayedContent) {
    let mainContainer = document.getElementById('main-container');
    let portfolioContainer = document.getElementById('portfolio-container');
    let servicesContainer = document.getElementById('services-container');
    let aboutmeContainer = document.getElementById('aboutme-container');

    mainContainer.style.opacity = '0';
    portfolioContainer.style.opacity = '0';
    servicesContainer.style.opacity = '0';
    aboutmeContainer.style.opacity = '0';


   setTimeout(function () {
       document.getElementById(displayedContent).style.opacity = '1';
   }, 500)
};

