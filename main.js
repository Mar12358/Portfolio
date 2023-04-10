let welcomePage = document.querySelector('#welcome');
let ham = document.querySelector('#menu-button');
let menuList = document.querySelector('.toggle-menu')
let restOfPage = document.querySelectorAll('.toggle-section');
ham.addEventListener('click', function(event) {
  welcomePage.classList.toggle('blend-mode')
  menuList.classList.toggle('invisible')
  for (let i=0; i<restOfPage.length; i++){
      restOfPage[i].classList.toggle('invisible')
  }
})