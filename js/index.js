var hex = document.getElementsByClassName('ethicItem');
var aboutMe = document.getElementById('aboutMe');
var project = document.getElementsByClassName('projectItem');
var row2 = document.getElementsByClassName('row2');
var menu = document.getElementById('menu');
for(let i=0;i<hex.length;i++){
  hex[i].style.opacity="0%";
}
for(let i=0;i<project.length;i++){
  project[i].style.opacity='0%';
}
for(let i=0;i<row2.length;i++){
  row2[i].style.opacity='0%';
}
aboutMe.style.opacity='0%';
menu.style.opacity='0%';

function isInViewport(elem) {
  const rect = elem.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function fadeIn(elem,i){
  if(i!=undefined){
    elem = elem[i];
  }
  return function(){
    elem.classList.add('fadeIn-animation');
    elem.style.opacity='100%';
  }
}

function slideIn(elem,i){
  var elemt = elem[i];
  if(elemt.classList.contains('right')){
    return function(){
      elemt.classList.add('slideRight');
    }
  }
  else if(elemt.classList.contains('left')){
    return function(){
      elemt.classList.add('slideLeft');
    }
  }
}

function spinIn(elem, i){
  var elemt = elem[i];
  return function(){
    elemt.classList.add('spinIn-animation');
    elemt.classList.add('scale-animation');
  }
}

function activeMenu(elem){
  let menuItem = document.getElementsByClassName('menuItem');
  for(let i=0;i<menuItem.length;i++){
    if(menuItem[i].classList.contains('active')){
      menuItem[i].classList.remove('active');
    }
  }
  menuItem[elem].classList.add('active');
}

function controlFadeIn(elem,offset){
  elem.style.opacity=(offset/10)+'%';
}

document.addEventListener('scroll', function (){
  var scrollTop = window.pageYOffset;
  if(scrollTop>=0){
    controlFadeIn(menu,scrollTop);
  }
  if(isInViewport(document.getElementById('overlay'))){
    activeMenu(0);
  }
  if(isInViewport(document.getElementById('hexRow'))){
    function step1(){
      for(let i=0;i<hex.length;i++){
        setTimeout(fadeIn(hex,i),i*150);
      }
    }
    activeMenu(1);
    step1();
  }
  if(isInViewport(document.getElementById('aboutMe'))){
    setTimeout(function(){
      aboutMe.classList.add('fadeIn-animation');
      aboutMe.style.opacity='100%';
    },100);
    activeMenu(2);
  }
  if(isInViewport(document.getElementById('projectType')) || isInViewport(document.getElementById('placeholder'))){
    function step3(){
      for(let i=0;i<project.length;i++){
        setTimeout(fadeIn(project,i),i*350);
        setTimeout(spinIn(project,i),i*300);
      }
    }
    activeMenu(3);
    step3();
  }
  if(isInViewport(document.getElementById('contactView')) || isInViewport(document.getElementsByTagName('form')[0])){
    function step4(){
      for(let i=0;i<row2.length;i++){
        setTimeout(fadeIn(row2,i),i*150);
      }
    }
    activeMenu(4);
    step4();
  }
});
