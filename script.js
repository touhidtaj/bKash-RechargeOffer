document.querySelector('.tta_boxbottom').addEventListener('click', firstTap)
document.querySelector('.tta_boxtop').addEventListener('click', firstTap)
document.querySelector('.tta_btn').addEventListener('click', firstTap)
document.querySelector('.tta_btn2').addEventListener('click', firstTap)

gsap.set('.tta_mnemonic', { scaleX: .5, scaleY: .5, y: 60 })
gsap.set('.tta_recharge', { opacity: 0, x: 0, y: -500, display: 'none' })
gsap.set('.tta_offers', { opacity: 0, scaleX: 5, scaleY: 5, display: 'none' })
gsap.to('.tta_btn2', { opacity: 1, duration: .2, repeat: -1, yoyo: true, repeatDelay: 1 })
function firstTap() {
  document.querySelector('.tta_boxbottom').classList.remove('jello-horizontal')
  document.querySelector('.tta_boxtop').classList.remove('jello-horizontal')

  gsap.set('.tta_macro_link', { display: 'block', opacity: 1 })

  gsap.timeline({
    // onComplete:
  })
    .to(['.tta_btn', '.tta_btn2'], { opacity: 0, display: 'none', duration: .5 })
    .to('.tta_boxtop', { x: -33, y: -68, rotate: -26, duration: .7 }, '<')
    .to('.tta_mnemonic', { y: 0, duration: .7 }, '<.1')
    .to('.tta_boxbottom', { opacity: 0, duration: .7 }, '>-.3')
    .to('.tta_boxtop', { opacity: 0, x: -70, y: -100, rotate: -40 }, '>-.3')
    .to('.tta_bg', { opacity: 1, display: 'block' }, '>-.5')
    .to('.tta_mnemonic', { scaleX: 1, scaleY: 1, y: 5, duration: .7 }, '<.1')
    .to('.tta_mnemonic', { scaleX: .55, scaleY: .55, x: 102, y: -54, duration: .7 }, '>.5')
    .to('.tta_offers', { opacity: 1, scaleX: 1, scaleY: 1, display: 'block', duration: .5 })
    .to('.tta_recharge', { opacity: 1, x: 0, y: 0, display: 'block', duration: .5, onComplete: tweenComplete }, '<.1')

}

function tweenComplete() {
  document.querySelector('.tta_offers').classList.add('wobble-hor-top')

}