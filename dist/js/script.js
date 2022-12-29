const loader = document.querySelector('.container-loader');

function loaderActive(){
    loader.classList.add('loader-active')
}
function loaderActiveTime(){
    setInterval(
        loaderActive, 3000
    )
}
window.onload = loaderActiveTime();
