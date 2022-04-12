var hex = document.getElementsByClassName('hexagon');
for(let i=0;i<hex.length;i++){
  hex[i].style.opacity="0%";
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function fadeIn(elem){
  elem.classList.add('hexagon-animation');
  elem.style.opacity='100%';
}

document.addEventListener('scroll', function (){
  if(isInViewport(document.getElementById('hexRow'))==true){
    for(let i=0;i<hex.length;i++){
      fadeIn(hex[i]);
    }
  }
});
