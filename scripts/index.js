const editButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const closeButton = editPopup.querySelector(".popup__close");

const imagePopup = document.querySelector("#image-popup");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close");

const addButton = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardCloseButton = newCardPopup.querySelector(".popup__close");


function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

addButton.addEventListener("click", function () {
  openModal(newCardPopup);
});

newCardCloseButton.addEventListener("click", function () {
  closeModal(newCardPopup);
});

const newCardForm = document.querySelector("#new-card-form");
const placeNameInput = newCardForm.querySelector(
  ".popup__input_type_card-name"
);
const imageUrlInput = newCardForm.querySelector(
  ".popup__input_type_url"
);


editButton.addEventListener("click", handleOpenEditModal);


closeButton.addEventListener("click", function () {
  closeModal(editPopup);
});

imagePopupCloseButton.addEventListener("click", function () {
  closeModal(imagePopup);
});

const profileForm = document.querySelector("#edit-profile-form");


function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(editPopup);
}


function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(editPopup);
}



const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const nameInput = editPopup.querySelector(".popup__input_type_name");
const descriptionInput = editPopup.querySelector(
  ".popup__input_type_description"
);


function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}


function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}



const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",

  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];


const cardTemplate = document.querySelector("#card-template").content;
const cardsList = document.querySelector(".cards__list");

function getCardElement(
  name = "Lugar sem nome",
  link = "./images/placeholder.jpg"
) {
  const cardElement = cardTemplate
    .querySelector(".card")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = link;
  cardImage.alt = name;
  cardImage.addEventListener("click", function () {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  openModal(imagePopup);
});
  cardTitle.textContent = name;


  const likeButton = cardElement.querySelector(".card__like-button");

likeButton.addEventListener("click", function () {
  likeButton.classList.toggle("card__like-button_is-active");
});

  const deleteButton = cardElement.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}



function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const name = placeNameInput.value;
  const link = imageUrlInput.value;

  renderCard(name, link, cardsList);

  closeModal(newCardPopup);
  newCardForm.reset();
}

newCardForm.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach(function (card) {
  renderCard(card.name, card.link, cardsList);
});






