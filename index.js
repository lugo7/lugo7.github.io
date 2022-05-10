var hex = document.getElementsByClassName('ethicItem');
var row = document.getElementsByClassName('row');
var project = document.getElementsByClassName('projectItem');
var row2 = document.getElementsByClassName('row2');
for(let i=0;i<hex.length;i++){
  hex[i].style.opacity="0%";
}
for(let i=0;i<row.length;i++){
  row[i].style.opacity='0%';
}
for(let i=0;i<project.length;i++){
  project[i].style.opacity='0%';
}
for(let i=0;i<row2.length;i++){
  row2[i].style.opacity='0%';
}

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
  var elemt = elem[i];
  return function(){
    elemt.classList.add('fadeIn-animation');
    elemt.style.opacity='100%';
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

document.addEventListener('scroll', function (){
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
    document.getElementById('menu').classList.remove('fixed');
    step1();
  }
  if(isInViewport(document.getElementById('skills'))){
    function step2(){
      for(let i=0;i<row.length;i++){
        setTimeout(fadeIn(row,i),i*150);
        setTimeout(slideIn(row,i),i*100);
      }
    }
    document.getElementById('menu').classList.add('fixed');
    step2();
  }
  if(isInViewport(document.getElementById('projectType'))){
    function step3(){
      for(let i=0;i<project.length;i++){
        setTimeout(fadeIn(project,i),i*150);
        setTimeout(spinIn(project,i),i*100);
      }
    }
    document.getElementById('menu').classList.add('fixed');
    activeMenu(2);
    step3();
  }
  if(isInViewport(document.getElementById('contactView'))){
    function step4(){
      for(let i=0;i<row2.length;i++){
        setTimeout(fadeIn(row2,i),i*150);
        //setTimeout(slideIn(row2,i),i*100);
      }
    }
    document.getElementById('menu').classList.add('fixed');
    activeMenu(3);
    step4();
  }
});

//projectTypeButton is not recognized
/*
var projectTypeButton = document.getElementsByClassName('projectTypeButton');
projectTypeButton.addEventListener('click',function(){
  for(let i=0;i<projectTypeButton.length;i++){
    projectTypeButton.classList.remove('activeB');
  }
  this.classList.add('activeB');
  //check which button is selected and filter shown projects respectively.
});
*/
