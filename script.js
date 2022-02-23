const menu = document.querySelector('.menu');
const submenu = document.querySelector('#submenu');
const disappearBars = document.querySelectorAll(".disappear-bar");
const images = document.querySelectorAll(`[id^="img"]`);
let lightbox = document.querySelector('.lightbox')
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
const imagePlace = document.querySelector('.img-placeholder');
let lbClose = document.querySelector('.lb-close');
let closeLBScreen =  document.querySelector('.close-LB-screen');

lightbox.style.height = windowHeight + 'px';

function hideorshowmenu(){
      if (window.matchMedia("(min-width: 800px)").matches) {
    submenu.style.display = 'flex';
      }else{
        submenu.style.display = 'none';
      }
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


function resizeImage(){
    
    
    let lightboxImage = document.querySelector('.lightbox-img');
    
    if(lightboxImage != undefined){
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;
        let realHeight = Number(lightboxImage.naturalHeight);
        let realWidth = Number(lightboxImage.naturalWidth);

        console.log(lbImgHeight)
        if(realHeight > windowHeight - 80){
            lightboxImage.style.height = (windowHeight - 80) + 'px';
            lightboxImage.style.width = 'auto'

        }

        let lbImgWidth = Number(getComputedStyle(lightboxImage).width.slice(0, -2));
        if(realWidth > windowWidth - 80 ){
            console.log(lbImgHeight)
            imagePlace.style.width = (windowWidth - 80) + 'px';
            imagePlace.style.height = 'auto'     
        }

    }
    


}

hideorshowmenu();

async function closeImage(){
    lightbox.style.animation = 'disappear 0.2s 1';
    lightbox.style.opacity = '0'
    
    await delay(180);
    lightbox.style.display = 'none';
    lightbox.style.overflow = 'hidden';
    document.body.style.overflow = 'auto';
};

closeLBScreen.onclick = closeImage;
lbClose.onclick = closeImage;



images.forEach(image =>{
   image.onclick = function(){
        if(getComputedStyle(lightbox).display == 'none'){
            let windowHeight = window.innerHeight;
            let windowWidth = window.innerWidth;
            
            document.body.style.overflow = 'hidden';
            lightbox.style.display = 'block';
            lightbox.style.animation = 'appear 0.4s 1';
            lightbox.style.opacity = '1'
            lightbox.style.overflow = 'auto';
            
            
            imgNumber = event.target.id.substr(event.target.id.length - 1);
            imagePlace.style.height = (windowHeight - 80) + 'px';
            imagePlace.innerHTML = `<img src="resources/images/full-res/image-${imgNumber}.png" class="lightbox-img">`;
           
            
            resizeImage();
            
        }

            
        }; 
});

menu.onclick = function(){
    if(submenu.style.display === 'none'){
        submenu.style.display = 'flex'
        for (var i = 0; i < disappearBars.length; i++) {
            disappearBars[i].style.animation = 'disappear 0.2s 1';
            disappearBars[i].style.opacity = '0';
        }
    
    } 
    else{
        submenu.style.display = 'none'
        for (var i = 0; i < disappearBars.length; i++) {
            disappearBars[i].style.animation = 'appear 0.4s 1';
            disappearBars[i].style.opacity = '1';
        }
    }
    

}

window.addEventListener("resize", function() {
    
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    
    lightbox.style.height = windowHeight + 'px';
    imagePlace.style.height = (windowHeight - 80) + 'px';
    
    resizeImage()
    
    if (window.matchMedia("(min-width: 801px)").matches) {
        submenu.style.display = 'flex';
    }else{
        submenu.style.display = 'none';
        
        for (var i = 0; i < disappearBars.length; i++) {
            disappearBars[i].style.opacity = '1';
            disappearBars[i].style.animation = 'appear 0s 1';

        }
    }
})



