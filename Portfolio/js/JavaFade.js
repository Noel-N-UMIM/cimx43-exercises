// https://webdesign.tutsplus.com/tutorials/simple-fade-effect-on-scroll--cms-35166
// https://www.youtube.com/watch?v=LBQBQlWJR94
// const checkpoint = 300;
 
// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= checkpoint) {
//     opacity = 1 - currentScroll / checkpoint;
//   } else {
//     opacity = 0;
//   }
//   document.querySelector(".overlay").style.opacity = opacity;
// });
$(window).scroll(function(){
    $(".banner-text").css("opacity", 1-$(window).scrollTop()/250);
});