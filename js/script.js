let indexHtml = document.querySelector(".index-html");
let catalogHtml = document.querySelector(".catalog-html");

try {
  let mapLink = indexHtml.querySelector(".contacts-button-map");
  let modalWriteUs = indexHtml.querySelector(".modal-write-us");
  let modalWriteUsClose = modalWriteUs.querySelector(".modal-close");
  let modalWriteUsForm = modalWriteUs.querySelector(".write-us-form");
  let modalWriteUsName = modalWriteUs.querySelector(".write-us-name");
  let modalWriteUsEmail = modalWriteUs.querySelector(".write-us-email");
  let modalWriteUsTextMessage = modalWriteUs.querySelector(".write-us-textmessage");
  let isStorageSupport = true;
  let storage = "";

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
catch { }

try {
  let mapImage = indexHtml.querySelector(".map-image");
  let modalMap = indexHtml.querySelector(".modal-map");
  let modalMapClose = modalMap.querySelector(".modal-close");

  mapImage.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
  });

  modalMapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
  });
}
catch { }

try {
  let buyButton = catalogHtml.querySelectorAll(".products-item-button-buy");
  let modalBasket = catalogHtml.querySelector(".modal-basket");
  let modalBasketClose = modalBasket.querySelector(".modal-close");
  let modalBasketContinue = modalBasket.querySelector(".continue-button");
  let basketLink = catalogHtml.querySelector(".basket-link");
  let bookmarkLink = catalogHtml.querySelector(".bookmark-link");
  let bookmarkButton = catalogHtml.querySelectorAll(".products-item-button-bookmark");

  buyButton.forEach(function (buyButtonitem) {
    buyButtonitem.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalBasket.classList.add("modal-show");
      if (!basketLink.classList.contains("header-link-filling")) {
        basketLink.classList.add("header-link-filling");
      }
    });
  });

  bookmarkButton.forEach(function (bookmarkButtonitem) {
    bookmarkButtonitem.addEventListener("click", function (evt) {
      if (!bookmarkLink.classList.contains("header-link-filling")) {
        bookmarkLink.classList.add("header-link-filling");
      }
    });
  });

  modalBasketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBasket.classList.remove("modal-show");
  });

  modalBasketContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBasket.classList.remove("modal-show");
  });
}
catch { }

try {
  let sliderItemsList = indexHtml.querySelectorAll(".features-slider-list .features-slider-item");
  let sliderLeftButton = indexHtml.querySelector(".features-controls-button-left");
  let sliderRightButton = indexHtml.querySelector(".features-controls-button-right");
  let sliderIndicatorList = indexHtml.querySelectorAll(".features-slider-indicator-item");

  function findActiveSlide() {
    for (let i = 0; i < sliderItemsList.length; i++) {
      if (sliderItemsList[i].classList.contains("features-slide-current")) {
        return i;
      }
    }
  }

  let indexActiveSlide = findActiveSlide();

  function changeSlide(indexSlide) {
    sliderItemsList[indexActiveSlide].classList.remove("features-slide-current");
    sliderIndicatorList[indexActiveSlide].classList.remove("indicator-current");
    sliderItemsList[indexActiveSlide].classList.add("features-slide");
    sliderItemsList[indexSlide].classList.add("features-slide-current");
    sliderIndicatorList[indexSlide].classList.add("indicator-current");
    sliderItemsList[indexSlide].classList.remove("features-slide");
    indexActiveSlide = indexSlide;
  }

  sliderRightButton.addEventListener("click", function (evt) {
    if (indexActiveSlide == sliderItemsList.length - 1) {
      changeSlide(0);
    }
    else {
      changeSlide(indexActiveSlide + 1);
    }
  });

  sliderLeftButton.addEventListener("click", function (evt) {
    if (indexActiveSlide == 0) {
      changeSlide(sliderItemsList.length - 1);
    }
    else {
      changeSlide(indexActiveSlide - 1);
    }
  });

  for (let i = 0; i < sliderIndicatorList.length; i++) {
    sliderIndicatorList[i].addEventListener("click", function (evt) {
      changeSlide(i);
    });
  }
}
catch { }

try {
  let servicesItemList = indexHtml.querySelectorAll(".services-slider-item");
  let servicesButtons = indexHtml.querySelectorAll(".services-controls-button");
  let IndexServicesActive;

  for (let i = 0; i < servicesButtons.length; i++) {
    servicesButtons[i].addEventListener("click", function (evt) {
      if (!servicesButtons[i].classList.contains("services-controls-current")) {
        servicesButtons.forEach(function (buttonItem) {
          buttonItem.classList.remove("services-controls-current");
        });
        servicesItemList.forEach(function (itemSlide) {
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
