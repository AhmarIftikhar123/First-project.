const variationImgs = document.querySelectorAll(
    ".variations:nth-of-type(2) .col-sm img"
  ),
  hero_img = document.querySelector(".hero_img img"),
  quantityIcons = document.querySelectorAll(".quantityIcons");

let isIncrement;

variationImgs.forEach((image, index) => {
  image.addEventListener("click", (img) => {
    variationImgs.forEach((active) => active.classList.remove("active_state"));
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
