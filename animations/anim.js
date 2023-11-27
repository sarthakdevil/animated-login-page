
const images = [
  "img/logo1@2x.png",
  "img/verycold.webp"
]
  document.addEventListener('DOMContentLoaded', function() {
    const slider = new rgbKineticSlider({
      slideImages:images,
  
      backgroundDisplacementSprite:"https://i.ibb.co/N246LxD/map-9.jpg",
      cursorDisplacementSprite:"https://i.ibb.co/KrVr51f/displace-circle.png",
  
      cursorImgEffect :true,
      cursorTextEffect:false,
      cursorScaleIntensity:0.65,
      cursorMomentum:0.14,
  
      swipe:true,
      swipeDistance:Window.innerwidth*0.4,
      swipeScaleIntensity: 2,
  
      sliderTransitionDuration:1,
      transitionScaleIntensity: 30,
  
      transitionScaleAmplitude: 160,
      imagesRgbEffect: true,
      imagesRgbIntensity:0.9,

      googleFonts: ["Josefin Sans: 700", "Poppins: 400"],
      buttonMode:false,
      navTextsRgbIntensity: 15,
    }); 
});