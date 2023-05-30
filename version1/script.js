(function() {
  'use strict';
  console.log ('reading js')

//the path 
  let path = anime.path('#demo-svg path')
//the queryselector for the yes button
  const answerYes = document.querySelector('#yes');
//for when they click it plays 
  answerYes.addEventListener('click', function(){
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 3000
    });
    tl
    .add({
      targets: '.movingright',
      translateX: path('x'),
      translateY: path('y'),
      delay: anime.stagger(800)
    })
    .add({
      targets: '.movingleft',
      translateX: -1200,
      delay: anime.stagger(800)
    }, '-=3500') // relative offset
  })
  
  // Add children
  tl
  .add({
    targets: '.movingright',
    translateX: path('x'),
    translateY: path('y'),
    delay: anime.stagger(400)
  })
  .add({
    targets: '.movingleft',
    translateX: -1200,
    delay: anime.stagger(400)
  }, '-=3500') // relative offset

})()