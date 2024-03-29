/* global $ */

import projectList from './create_objects.js';
import skillsList from './skills.js';

const welcomePage = document.querySelector('#welcome');
const work = document.querySelector('#work');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact_section');
const menuList = document.querySelector('.toggle-menu');
// const restOfPage = document.querySelectorAll('.toggle-section');

function clickMenu() {
  welcomePage.classList.toggle('blend-mode');
  work.classList.toggle('blend-mode');
  about.classList.toggle('blend-mode');
  contact.classList.toggle('blend-mode');
  menuList.classList.toggle('visible');
  menuList.classList.toggle('invisible');
  /*  for (let i = 0; i < restOfPage.length; i += 1) {
    restOfPage[i].classList.toggle('display-none');
  } */
}

$(document).ready(() => {
  $('#menu-button').click(clickMenu);
});

const menuLink = document.querySelectorAll('.mobile-menu_link');
for (let j = 0; j < menuLink.length; j += 1) {
  menuLink[j].addEventListener('click', clickMenu);
}

// const work = document.querySelector('#work');

projectList.forEach((project, index) => {
  const card = document.createElement('section');
  const right = index % 2 !== 0 ? 'right' : '';
  card.innerHTML = `
  <section id=${project.id}>
    <div class="card">
      <a id="img_link_${right}"><img class="card_image" style="background-color: ${project.bgColor};" src=${project.mobileImage} alt=${project.id}></a>
      <div class="card_bottom">
        <h2 class="card_title">${project.name}</h2>
        <ul class="card_ul">
          ${project.categ.map((category) => `<li><p class="text_li">${category}</p></li><li><img class="counter" src="styles-conference/assets/Counter.svg" alt="counter"/></li>`).join('')}
        </ul>
        <p class="description description_cards">
          ${project.mobileDescription}
        </p>
        <ul class="categories">
          ${project.technologies.map((tech) => `<li><p>${tech}</p></li>`).join('')}
        </ul>
        <a class="see_project_button">See project</a>
      </div>
    </div>
  </section>`;
  work.appendChild(card);
});

const popupWindowDiv = document.querySelector('.popup-window');

function togglePopUp() {
  welcomePage.classList.toggle('blend-mode');
  work.classList.toggle('blend-mode');
  about.classList.toggle('blend-mode');
  contact.classList.toggle('blend-mode');
  popupWindowDiv.classList.toggle('visible');
  popupWindowDiv.classList.toggle('invisible');
  // restOfPage.forEach((page) => page.classList.toggle('display-none'));
}

function popupWindow(project) {
  togglePopUp();
  popupWindowDiv.children[0].children[0].children[0].innerHTML = project.name;
  const [categ1, categ2, categ3] = project.categ;
  popupWindowDiv.children[0].children[1].children[0].children[0].innerHTML = categ1;
  popupWindowDiv.children[0].children[1].children[2].children[0].innerHTML = categ2;
  popupWindowDiv.children[0].children[1].children[4].children[0].innerHTML = categ3;
  popupWindowDiv.children[0].children[2].children[0].src = project.mobileImage;
  popupWindowDiv.children[0].children[2].children[0].style = `background-color: ${project.bgColor}`;
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

$(document).ready(() => {
  const openLanguages = $('#open-dropdown-languages');
  const closeLanguages = $('#close-dropdown-languages');
  const languages = $('#languages');
  const lengSeparator = $('#languages-separator');
  const languagesTitle = $('#languages-title');

  $.each(skillsList.languages, (index, skill) => {
    const li = $('<li>').addClass('list_lang').html(`
      <div class="logo-container">
        <img class="lang_logo" src="styles-conference/assets/${skill.asset}"/>
      </div>
      <p>${skill.language}</p>
    `);
    languages.append(li);
  });

  const clickLanguages = () => {
    openLanguages.toggleClass('display-none');
    closeLanguages.toggleClass('display-none');
    languages.toggleClass('display-none');
    lengSeparator.toggleClass('display-none');
  };

  languagesTitle.click(clickLanguages);
});

const openFrameworks = document.querySelector('#open-dropdown-frameworks');
const closeFrameworks = document.querySelector('#close-dropdown-frameworks');
const frameworks = document.querySelector('#frameworks');
const frameworksSeparator = document.querySelector('#frameworks-separator');
const frameworksTitle = document.querySelector('#frameworks-title');

skillsList.frameworks.forEach((skill) => {
  const li = document.createElement('li');
  li.classList = 'list_lang';
  li.innerHTML = `
  <div class="logo-container">
    <img class="lang_logo" src="styles-conference/assets/${skill.asset}"/>
  </div>
  <p>${skill.framework}</p>`;
  frameworks.appendChild(li);
});

const clickFrameworks = () => {
  openFrameworks.classList.toggle('display-none');
  closeFrameworks.classList.toggle('display-none');
  frameworks.classList.toggle('display-none');
  frameworksSeparator.classList.toggle('display-none');
};

frameworksTitle.addEventListener('click', clickFrameworks);

const openSkills = document.querySelector('#open-dropdown-skills');
const closeSkills = document.querySelector('#close-dropdown-skills');
const skills = document.querySelector('#skills');
const skillsSeparator = document.querySelector('#skills-separator');
const skillsTitle = document.querySelector('#skills-title');

skillsList.skills.forEach((skill) => {
  const li = document.createElement('li');
  li.classList = 'list_lang';
  li.innerHTML = `
  <div class="logo-container">
    <img class="lang_logo" src="styles-conference/assets/${skill.asset}"/>
  </div>
  <p>${skill.skill}</p>`;
  skills.appendChild(li);
});

const clickSkills = () => {
  openSkills.classList.toggle('display-none');
  closeSkills.classList.toggle('display-none');
  skills.classList.toggle('display-none');
  skillsSeparator.classList.toggle('display-none');
};

skillsTitle.addEventListener('click', clickSkills);

const openTools = document.querySelector('#open-dropdown-tools');
const closeTools = document.querySelector('#close-dropdown-tools');
const tools = document.querySelector('#tools');
const toolsSeparator = document.querySelector('#tools-separator');
const toolsTitle = document.querySelector('#tools-title');
skillsList.tools.forEach((skill) => {
  const li = document.createElement('li');
  li.classList = 'list_lang';
  li.innerHTML = `
  <div class="logo-container">
    <img class="lang_logo" src="styles-conference/assets/${skill.asset}"/>
  </div>
  <p>${skill.tool}</p>`;
  tools.appendChild(li);
});

const clickTools = () => {
  openTools.classList.toggle('display-none');
  closeTools.classList.toggle('display-none');
  tools.classList.toggle('display-none');
  toolsSeparator.classList.toggle('display-none');
};

toolsTitle.addEventListener('click', clickTools);

nameInput.onchange = populateStorage;
emailInput.onchange = populateStorage;
msgInput.onchange = populateStorage;
