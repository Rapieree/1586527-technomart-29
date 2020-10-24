const indexHtml = document.querySelector(".index-html");
const catalogHtml = document.querySelector(".catalog-html"); 


// Форма обратной связи
// ============================================================

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

// Интерактивная карта
// ============================================================
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


// Модальное окно с добавлением в корзину
// ============================================================
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



// Слайдер блока особенности
// ============================================================
try
{
  let sliderItemsList = indexHtml.querySelectorAll(".features-slider-list .features-slider-item");
  let sliderLeftButton = indexHtml.querySelector(".features-controls-button-left");
  let sliderRightButton = indexHtml.querySelector(".features-controls-button-right");
  let sliderIndicatorList = indexHtml.querySelectorAll(".features-slider-indicator-item");



  function findActiveSlide()
  {
    for(let i = 0; i < sliderItemsList.length; i++)
    {
      if(sliderItemsList[i].classList.contains("features-slide-current"))
      {
        return i;
      }
    } 
  }

  let indexActiveSlide = findActiveSlide();

  function changeSlide(indexSlide) 
  {
    sliderItemsList[indexActiveSlide].classList.remove("features-slide-current");
    sliderIndicatorList[indexActiveSlide].classList.remove("indicator-current");
    sliderItemsList[indexActiveSlide].classList.add("features-slide");

    sliderItemsList[indexSlide].classList.add("features-slide-current");
    sliderIndicatorList[indexSlide].classList.add("indicator-current");
    sliderItemsList[indexSlide].classList.remove("features-slide");

    indexActiveSlide = indexSlide;
  }

  sliderRightButton.addEventListener("click", function(evt)
  {
    if(indexActiveSlide == sliderItemsList.length-1)
    {
      changeSlide(0);
    }
    else
    {
      changeSlide(indexActiveSlide + 1);
    }
  });

  sliderLeftButton.addEventListener("click", function(evt)
  {
    if(indexActiveSlide == 0)
    {
      changeSlide(sliderItemsList.length-1);
    }
    else
    {
      changeSlide(indexActiveSlide - 1);
    }
  });

  for(let i = 0; i < sliderIndicatorList.length; i++)
  {
    sliderIndicatorList[i].addEventListener("click", function(evt)
    {
      changeSlide(i);
    });
  }
}
catch { }


// Кнопки в Сервисе
// ============================================================
try
{
  let servicesItemList = indexHtml.querySelectorAll(".services-slider-item");
  let servicesButtons = indexHtml.querySelectorAll(".services-controls-button");

  let IndexServicesActive;

  for(let i = 0; i < servicesButtons.length; i++)
  {
    servicesButtons[i].addEventListener("click", function(evt)
    {
      if(!servicesButtons[i].classList.contains("services-controls-current"))
      {
        servicesButtons.forEach(function (buttonItem)
        {
          buttonItem.classList.remove("services-controls-current");
        });

        servicesItemList.forEach(function (itemSlide)
        {
          itemSlide.classList.remove("services-slide-current");
          itemSlide.classList.add("services-slide");
        });


        servicesButtons[i].classList.add("services-controls-current");
        servicesItemList[i].classList.add("services-slide-current");
        
      }
    });
  }
}
catch { }



// 
// ============================================================