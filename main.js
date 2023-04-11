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
function popupWindow(project) {
  welcomePage.classList.toggle('blend-mode');
  popupWindowDiv.classList.toggle('visible');
  popupWindowDiv.classList.toggle('invisible');
  console.log(project);
  popupWindowDiv.children[0].children[0].children[0].innerHTML = project.name;
  popupWindowDiv.children[0].children[1].children[0].children[0].innerHTML = project.categ[0];
  popupWindowDiv.children[0].children[1].children[2].children[0].innerHTML = project.categ[1];
  popupWindowDiv.children[0].children[1].children[4].children[0].innerHTML = project.categ[2];
  popupWindowDiv.children[0].children[2].children[0].src = project.mobileImage;
  popupWindowDiv.children[0].children[3].innerHTML = project.mobileDescription;
  console.log(project.technologies.length)
  for (let i = 0; i < project.technologies.length; i += 1) {
    popupWindowDiv.children[0].children[4].insertAdjacentHTML('beforeend','<li><p>'+project.technologies[i]+'</p></li>')
  }

  // console.log(popupWindowDiv.classList)
  for (let i = 0; i < restOfPage.length; i += 1) {
    restOfPage[i].classList.toggle('display-none');
  }
}

const projects = document.querySelectorAll('.card_image');
for (let i = 0; i < projects.length; i += 1) {
  projects[i].addEventListener('click', popupWindow.bind(null, projectList.find((p) => p.id === projects[i].alt)));
  // console.log(projects[i].alt);
}