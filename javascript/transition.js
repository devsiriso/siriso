
function changeContent(displayedContent) {
    let content = document.getElementById('content-container').children;
    let mainContainer = document.getElementById('main-container');
    let portfolioContainer = document.getElementById('portfolio-container');
    let servicesContainer = document.getElementById('services-container');
    let servicesItemContainer = document.getElementById('services-item-container');
    let aboutmeContainer = document.getElementById('aboutme-container');

    // mainContainer.style.opacity = '0';
    // portfolioContainer.style.opacity = '0';
    // servicesContainer.style.opacity = '0';
    // aboutmeContainer.style.opacity = '0';

    for(let i=0; i<content.length; i++){
        content[i].style.opacity = '0';
    }

    servicesContainer.style.left = '50%';
    document.getElementById('webdevelopment-container').style.display = 'none';

   setTimeout(function () {
       document.getElementById(displayedContent).style.opacity = '1';
   }, 500)
};

function transitionServices(displayedService) {
    let servicesContainer = document.getElementById('services-container');

    servicesContainer.style.left = '10%';

    document.getElementById('webdevelopment-container').style.display = 'block';

    setTimeout(function () {
        document.getElementById(displayedService).style.opacity = '1';
    }, 500)
}
