var hex = document.getElementsByClassName('ethicItem');
var row = document.getElementsByClassName('row');
for(let i=0;i<hex.length;i++){
  hex[i].style.opacity="0%";
}
for(let i=0;i<row.length;i++){
  row[i].style.opacity='0%';
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
      fadeIn(elem,i);
      elemt.classList.add('hexagon-animation');
      elemt.style.opacity='100%';
      elemt.classList.add('slideRight');
    }
  }
  else if(elemt.classList.contains('left')){
    return function(){
      fadeIn(elem, i);
      elemt.classList.add('hexagon-animation');
      elemt.style.opacity='100%';
      elemt.classList.add('slideLeft');
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
    function step2(){
      for(let i=0;i<row.length;i++){
        var item2 = slideIn(row,i);
        setTimeout(item2,i*250);
      }
    }
    step1();
    step2();
  }
});

document.addEventListener('scroll', function(){
  if($(window).scrollTop()>window.innerHeight){
    $('#menu').addClass('fixed');
  } else{
    $('#menu').removeClass('fixed');
  }
});
