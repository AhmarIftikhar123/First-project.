const variationImgs = document.querySelectorAll(
    ".variations:nth-of-type(2) .col-sm img"
  ),
  hero_img = document.querySelector(".hero_img img"),
  quantityIcons = document.querySelectorAll(".quantityIcons");

let isIncrement;

const gsapAnimation = (selector) => {
  gsap.timeline().fromTo(
    selector,
    {
      y: "-50%",
      opacity: 0,
      scale: 0.5,
      rotation: "100%",
    },
    {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      scale: 1,
      rotation: "0",
      duration: 1,
      stagger: 0.1,
    }
  );
};

variationImgs.forEach((image, index) => {
  image.addEventListener("click", (img) => {
    variationImgs.forEach((active) => active.classList.remove("active_state"));
    gsapAnimation(hero_img);
    hero_img.src = `assets/imgs/Dog_Cans/can_${index + 1}.jpg`;
    img.target.classList.add("active_state");
  });
});

const updateQuantity = (e) => {
  const productQuantity = document.getElementById("productQuantity");
  let currentQuantity = productQuantity.innerText;
  e.target.tagName === "SPAN"
    ? (isIncrement = e.target.dataset.isincrement)
    : (isIncrement = e.target.parentElement.dataset.isincrement);

  //     stop the code if productQuantity is less than 0
  if (isIncrement) {
    currentQuantity++;
    productQuantity.innerText = currentQuantity;
  } else {
    if (parseInt(currentQuantity) <= 0) return;
    currentQuantity--;
    productQuantity.innerText = currentQuantity;
  }
};

quantityIcons[0].addEventListener("click", updateQuantity);
quantityIcons[1].addEventListener("click", updateQuantity);

const owlConfig = () => ({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
    },
    800: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});
$(".owl-carousel").owlCarousel(owlConfig());
$("#owl_carousel_1").owlCarousel(owlConfig());

const gsap1 = document.querySelectorAll(".gsap");
gsap.timeline().fromTo(
  gsap1,
  {
    x: "50%",
    opacity: 0,
    scale: 0.5,
  },
  {
    x: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1,
    scale: 1,
    stagger: 0.1,
    delay: 1,
  }
);
