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

/* Create Project List of Objects */
const projectList = [
  {
    id: 'tonic1',
    name: 'Facebook 360',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    featuredImage: 'styles-conference/assets/popup_img1.svg',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript', 'Bootstrap'],
    liveLink: 'https://mar12358.github.io/Portfolio/',
    sourceLink: 'https://github.com/Mar12358/Portfolio',
  },
  {
    id: 'stories1',
    name: 'Uber Navigation',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    featuredImage: 'styles-conference/assets/popup_img1.svg',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript', 'Bootstrap'],
    liveLink: 'https://mar12358.github.io/Portfolio/',
    sourceLink: 'https://github.com/Mar12358/Portfolio',
  },
  {
    id: 'tonic2',
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    featuredImage: 'styles-conference/assets/popup_img1.svg',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript', 'Bootstrap'],
    liveLink: 'https://mar12358.github.io/Portfolio/',
    sourceLink: 'https://github.com/Mar12358/Portfolio',
  },
  {
    id: 'stories2',
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    featuredImage: 'styles-conference/assets/popup_img1.svg',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript', 'Bootstrap'],
    liveLink: 'https://mar12358.github.io/Portfolio/',
    sourceLink: 'https://github.com/Mar12358/Portfolio',
  },

];