const mapLink = document.querySelector(".contacts-button-map");
const modalWriteUs = document.querySelector(".modal-write-us");
const modalWriteUsClose = modalWriteUs.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) 
{
    evt.preventDefault();
    modalWriteUs.classList.add("modal-show");
});

modalWriteUsClose.addEventListener("click", function(evt)
{
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-show");
});


const mapImage = document.querySelector(".map-image");
const modalMap = document.querySelector(".modal-map");
const modalMapClose = modalMap.querySelector(".modal-close");

mapImage.addEventListener("click", function(evt)
{
    modalMap.classList.add("modal-show");
});

modalMapClose.addEventListener("click", function(evt)
{
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
});


