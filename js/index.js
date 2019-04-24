


const $cubo = document.getElementById('boxDiv');

const animation = $cubo.animate(
  [
    { transform: 'rotateX(0) rotateY(0)'},

    { transform: 'rotateX(360deg) rotateY(360deg)' }
  ],{

      duration: 17000,
      easing: 'linear',
      iterations: Infinity,
  }
)


$cubo.addEventListener('mouseover', (e) => animation.playbackRate = 4 );
$cubo.addEventListener('mouseleave', (e) => animation.playbackRate = 1 )


const $bar = document.getElementById('bar');
const $isotype = document.getElementById('isotype');
const $button = document.getElementById('button');
const $buttonTwo = document.getElementById('button-two');

window.addEventListener('scroll', () => {
  if ( window.scrollY >= 160) {
    $bar.style.boxShadow = '6px 6px 20px rgba(0, 0, 0, .5)';
    $bar.style.backgroundColor = '#7A375C';
    $bar.style.position = 'fixed';
    $bar.style.top = '0';
    $bar.style.marginTop = '0';
    $isotype.style.opacity = '1';
    $button.style.opacity = '1';
  }
  else {
    $bar.style.boxShadow = 'none';
    $bar.style.backgroundColor = '';
    $bar.style.position = 'inherit';
    $bar.style.marginTop = '20px';
    $isotype.style.opacity = '0';
    $button.style.opacity = '0';
  }
});

const $overlay = document.getElementById('overlay');
const $modal = document.getElementById('modal');

$button.addEventListener('click', () => {
  $overlay.classList.add('active');
  $modal.classList.add('active');
} );

$buttonTwo.addEventListener('click', () => {
  $overlay.classList.add('active');
  $modal.classList.add('active');
} );

$overlay.addEventListener('click', () => {
  $overlay.classList.remove('active');
  $modal.classList.remove('active');
})


// const animationBar = $bar.animate(
//   [
//     {
//       boxShadow: 'none' ,
//       position: 'relative',
//       backgroundColor: 'initial',
//       marginTop: '20px',
//     },
//
//
//     {
//       boxShadow: '6px 6px 20px rgba(0, 0, 0, .5)',
//       position: 'fixed',
//       backgroundColor: '#7A375C',
//       marginTop: '0'
//     },
//
//   ],{
//
//       duration: 100,
//       easing: 'linear',
//       fillMode: 'forwards'
//   }
// )
//
//
// window.addEventListener('scroll', () => {
//   if ( window.scrollY = 160) {
//     animationBar.play();
//   }
// });
