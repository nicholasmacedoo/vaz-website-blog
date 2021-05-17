let bar = document.createElement('div');
let containerPost = document.querySelector('.container-post');

bar.style.height = "4px";
bar.style.width = "0";
bar.style.backgroundColor = '#C20E1A';
bar.style.position = 'fixed';
bar.style.top = 0;
bar.style.left = 0;
bar.style.zIndex = "999";
bar.style.transitionDuration = '0.2s';

document.body.append(bar);

document.addEventListener('scroll', () => {
    // o tamanho da caixa que contem o texto
    const textHeight = containerPost.offsetHeight;
    const pagePositionY = window.pageYOffset; 
    const updatedBar = pagePositionY * 100 / textHeight; 
    bar.style.width = updatedBar + "%";
    // console.log();
});