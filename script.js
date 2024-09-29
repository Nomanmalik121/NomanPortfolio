const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
gsap.from(".section__pic-container",{
  opacity: "0",
  y:300,
  duration: 1,
  delay: 1,
})
gsap.from(".section__text",{
  opacity: "0",
  x:300,
  duration: 1,
  delay: 1,
})
gsap.from("#desktop-nav",{
  opacity: "0",
  y:-100,
  duration: 1,
  delay: 1,
})

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
