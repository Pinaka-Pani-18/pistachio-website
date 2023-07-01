var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
});

var tl = gsap.timeline({
  defaults: { opacity: 0, duration: 0.8 },
});

tl.from("nav", {
  y: -100,
});

tl.from(".image-pista", {
  scale: 0.1,
});

tl.from(".main-text h1", {
  y: -100,
});

tl.from(".main-text p", {
  x: 100,
});

tl.from(".main-text button", {
  x: -100,
});

tl.from(".box", {
  scale: 1.3,
});

const boxes = gsap.utils.toArray(".box");

boxes.forEach((box, index) => {
  let title = box.querySelector(".box h3");
  let subTitle = box.querySelector(".box p");
  let boxTl = gsap
    .timeline()

    .from(title, { opacity: 0, x: 100, delay: 4.5 })
    .from(subTitle, { opacity: 0, x: 100 });

  tl.add(boxTl, index * 1);
});

tl.from(".social-links", {
  y: 100,
});
