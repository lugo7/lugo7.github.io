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
    elemt.classList.add('hexagon-animation');
    elemt.style.opacity='100%';
  }
}

function slideIn(elem,i){
  var elemt = elem[i];
  if(elemt.classList.contains('right')){
    return function(){
      elemt.classList.add('hexagon-animation');
      elemt.classList.add('slideRight');
      elemt.style.opacity='100%';
    }
  }
  else if(elemt.classList.contains('left')){
    return function(){
      elemt.classList.add('hexagon-animation');
      elemt.classList.add('slideLeft');
      elemt.style.opacity='100%';
    }
  }
}

document.addEventListener('scroll', function (){
  if(isInViewport(document.getElementById('hexRow'))){
    function step1(){
      for(let i=0;i<hex.length;i++){
        var item = fadeIn(hex,i);
        setTimeout(item,i*250);
      }
    }
    step1();
  }
  else if(isInViewport(document.getElementById('skillHeader'))){
    function step2(){
      for(let i=0;i<row.length;i++){
        var item2 = slideIn(row,i);
        setTimeout(item2,i*250);
      }
    }
    step2();
  }
  else if(isInViewport(document.getElementById('projectType'))){
    function step3(){
      for(let i=0;i<project.length;i++){
        var item = slideIn(project,i);
        setTimeout(item,i*250);
      }
    }
    step3();
  }
  else if(isInViewport(document.getElementById('ContactSection'))){
    function step4(){
      for(let i=0;i<row2.length;i++){
        var item = slideIn(row2,i);
        setTimeout(item,i*250);
      }
    }
    step4();
  }
});

document.addEventListener('scroll', function(){
  if($(window).scrollTop()>window.innerHeight){
    $('#menu').addClass('fixed');
  } else{
    $('#menu').removeClass('fixed');
  }
});

var projectTypeButton = document.getElementsByClassName('projectTypeButton');
projectTypeButton.addEventListener('click',function(){
  for(let i=0;i<projectTypeButton.length;i++){
    projectTypeButton.classList.remove('activeB');
  }
});
