
const animItems = document.querySelectorAll('.anim-items')
function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

if (animItems.length > 0) {
  document.addEventListener("scroll", () => { 
    animItems.forEach((animItem) => {
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 3;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight ){
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('animation-active'); 
      } else {
        animItem.classList.remove('animation-active');
      }}   
    )   
  }
  )}