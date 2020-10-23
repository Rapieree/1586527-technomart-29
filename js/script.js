const indexHtml = document.querySelector(".index-html");
const catalogHtml = document.querySelector(".catalog-html"); 



try
{
const mapLink = indexHtml.querySelector(".contacts-button-map");
const modalWriteUs = indexHtml.querySelector(".modal-write-us");
const modalWriteUsClose = modalWriteUs.querySelector(".modal-close");
const modalWriteUsForm = modalWriteUs.querySelector(".write-us-form");
const modalWriteUsName = modalWriteUs.querySelector(".write-us-name");
const modalWriteUsEmail = modalWriteUs.querySelector(".write-us-email");
const modalWriteUsTextMessage = modalWriteUs.querySelector(".write-us-textmessage");


const isStorageSupport = true;
const storage = "";


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteUs.classList.add("modal-show");
    if (storage) {
        modalWriteUsEmail.value = storage;
      }
});

modalWriteUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-show");
});

modalWriteUsForm.addEventListener("submit", function (evt) {
    if (!modalWriteUsName.value || !modalWriteUsEmail.value || !modalWriteUsTextMessage.value) {
        evt.preventDefault();
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("WriteUsName", modalWriteUsName.value);
            localStorage.setItem("WriteUsEmail", modalWriteUsEmail.value);
            localStorage.setItem("WriteUsTextmessage", modal.modalWriteUsTextMessage.value);
        }
    }
});
}
catch {}


try
{

const mapImage = indexHtml.querySelector(".map-image");
const modalMap = indexHtml.querySelector(".modal-map");
const modalMapClose = modalMap.querySelector(".modal-close");

mapImage.addEventListener("click", function (evt) {
    modalMap.classList.add("modal-show");
});

modalMapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
});

}
catch {}

try 
{

let buyButton = catalogHtml.querySelectorAll(".products-item-button-buy");
let modalBasket = catalogHtml.querySelector(".modal-basket");
let modalBasketClose = modalBasket.querySelector(".modal-close");
let modalBasketContinue = modalBasket.querySelector(".continue-button");

let basketLink = catalogHtml.querySelector(".basket-link");

buyButton.forEach(function(buyButtonitem)
{
    buyButtonitem.addEventListener("click", function(evt)
    {
      modalBasket.classList.add("modal-show");
      if(!basketLink.classList.contains("header-link-filling"))
      {
      basketLink.classList.add("header-link-filling");
      }
    });
});

let bookmarkLink = catalogHtml.querySelector(".bookmark-link");
let bookmarkButton = catalogHtml.querySelectorAll(".products-item-button-bookmark");

bookmarkButton.forEach(function(bookmarkButtonitem)
{
    bookmarkButtonitem.addEventListener("click", function(evt)
    {
      if(!bookmarkLink.classList.contains("header-link-filling"))
      {
        bookmarkLink.classList.add("header-link-filling");
      }
    });
});

modalBasketClose.addEventListener("click", function(evt)
{
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
});

modalBasketContinue.addEventListener("click", function(evt)
{
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
});
}
catch {}
