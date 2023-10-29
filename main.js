import projectList from './create_objects.js';

const welcomePage = document.querySelector('#welcome');
const ham = document.querySelector('#menu-button');
let menuList = document.querySelector('.toggle-menu');
let restOfPage = document.querySelectorAll('.toggle-section');

function clickMenu() {
  welcomePage.classList.toggle('blend-mode');
  menuList.classList.toggle('visible');
  menuList.classList.toggle('invisible');
  for (let i = 0; i < restOfPage.length; i += 1) {
    restOfPage[i].classList.toggle('display-none');
  }
}

ham.addEventListener('click', clickMenu);

restOfPage = document.querySelectorAll('.toggle-section');
menuList = document.querySelector('.toggle-menu');
const menuLink = document.querySelectorAll('.mobile-menu_link');
for (let j = 0; j < menuLink.length; j += 1) {
  menuLink[j].addEventListener('click', clickMenu);
}

const popupWindowDiv = document.querySelector('.popup-window');

function togglePopUp() {
  welcomePage.classList.toggle('blend-mode');
  popupWindowDiv.classList.toggle('visible');
  popupWindowDiv.classList.toggle('invisible');
  for (let i = 0; i < restOfPage.length; i += 1) {
    restOfPage[i].classList.toggle('display-none');
  }
}

function popupWindow(project) {
  togglePopUp();
  popupWindowDiv.children[0].children[0].children[0].innerHTML = project.name;
  const [categ1, categ2, categ3] = project.categ;
  /* if (project.id === 'reserve-lectures' && window.matchMedia('(max-width: 767px)').matches) {
    popupWindowDiv.children[0].children[2].children[0].classList.add('card_image1');
  } */
  popupWindowDiv.children[0].children[1].children[0].children[0].innerHTML = categ1;
  popupWindowDiv.children[0].children[1].children[2].children[0].innerHTML = categ2;
  popupWindowDiv.children[0].children[1].children[4].children[0].innerHTML = categ3;
  popupWindowDiv.children[0].children[2].children[0].src = project.mobileImage;
  popupWindowDiv.children[0].children[3].innerHTML = project.mobileDescription;
  popupWindowDiv.children[0].children[4].innerHTML = `<li><p>${project.technologies[0]}</p></li>`;
  popupWindowDiv.children[0].children[8].children[0].href = project.liveLink;
  popupWindowDiv.children[0].children[8].children[1].href = project.sourceLink;
  let cantCateg = 3;
  if (window.matchMedia('(min-width: 768px)').matches) {
    cantCateg = project.technologies.length;
    popupWindowDiv.children[0].children[3].innerHTML = project.deskDescription;
  } else {
    popupWindowDiv.children[0].children[3].innerHTML = project.mobileDescription;
  }
  for (let i = 1; i < cantCateg; i += 1) {
    popupWindowDiv.children[0].children[4].insertAdjacentHTML('beforeend', `<li><p>${project.technologies[i]}</p></li>`);
  }
}

const projects = document.querySelectorAll('.card_image');
const buttons = document.querySelectorAll('.see_project_button');
for (let i = 0; i < buttons.length; i += 1) {
  const projectId = projectList.find((p) => p.id === projects[i].alt);
  buttons[i].addEventListener('click', popupWindow.bind(null, projectId));
  projects[i].addEventListener('click', popupWindow.bind(null, projectId));
}
const closePopup = document.querySelector('.imgButtonClose');
closePopup.addEventListener('click', togglePopUp);

const form = document.forms[0];
form.addEventListener('submit', (event) => {
  const email = form.elements.mail.value;
  const smallMsg = document.querySelector('small');
  if (email === email.toLocaleLowerCase()) {
    smallMsg.classList.remove('visible');
    smallMsg.classList.add('invisible');
    localStorage.clear();
    form.submit();
  } else {
    smallMsg.innerHTML = 'Please, use lower case for email input';
    smallMsg.classList.add('visible');
    smallMsg.classList.remove('invisible');
    event.preventDefault();
  }
});

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const msgInput = document.querySelector('#msg');

if (localStorage.obj) {
  nameInput.value = JSON.parse(localStorage.getItem('obj')).name;
  emailInput.value = JSON.parse(localStorage.getItem('obj')).email;
  msgInput.value = JSON.parse(localStorage.getItem('obj')).msg;
}
function populateStorage() {
  const obj = { name: nameInput.value, email: emailInput.value, msg: msgInput.value };
  localStorage.setItem('obj', JSON.stringify(obj));
}

const openLenguages = document.querySelector('#open-dropdown-lenguages');
const closeLenguages = document.querySelector('#close-dropdown-lenguages');
const lenguages = document.querySelector('#lenguages');
const lengSeparator = document.querySelector('#lenguages-separator');

const clickLenguages = () => {
  openLenguages.classList.toggle('display-none');
  closeLenguages.classList.toggle('display-none');
  lenguages.classList.toggle('display-none');
  lengSeparator.classList.toggle('display-none');
};

openLenguages.addEventListener('click', clickLenguages);
closeLenguages.addEventListener('click', clickLenguages);

const openFrameworks = document.querySelector('#open-dropdown-frameworks');
const closeFrameworks = document.querySelector('#close-dropdown-frameworks');
const frameworks = document.querySelector('#frameworks');
const frameworksSeparator = document.querySelector('#frameworks-separator');

const clickFrameworks = () => {
  openFrameworks.classList.toggle('display-none');
  closeFrameworks.classList.toggle('display-none');
  frameworks.classList.toggle('display-none');
  frameworksSeparator.classList.toggle('display-none');
};

openFrameworks.addEventListener('click', clickFrameworks);
closeFrameworks.addEventListener('click', clickFrameworks);

const openSkills = document.querySelector('#open-dropdown-skills');
const closeSkills = document.querySelector('#close-dropdown-skills');
const skills = document.querySelector('#skills');
const skillsSeparator = document.querySelector('#skills-separator');

const clickSkills = () => {
  openSkills.classList.toggle('display-none');
  closeSkills.classList.toggle('display-none');
  skills.classList.toggle('display-none');
  skillsSeparator.classList.toggle('display-none');
};

openSkills.addEventListener('click', clickSkills);
closeSkills.addEventListener('click', clickSkills);

nameInput.onchange = populateStorage;
emailInput.onchange = populateStorage;
msgInput.onchange = populateStorage;
