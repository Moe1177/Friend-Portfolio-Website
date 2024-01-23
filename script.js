'use scrict';

const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');
const sideMenu = document.querySelector('#side-menu');
const submitForm = document.querySelector('#submit');

const handleClick = click => {
  // Remove 'active-link' class from all tab links
  for (let tablink of tabLinks) {
    tablink.classList.remove('active-link');
  }

  // Add 'active-link' class to the clicked tab link
  click.currentTarget.classList.add('active-link');

  // Get the index of the clicked tab link
  const tabIndex = Array.from(tabLinks).indexOf(click.currentTarget);

  // Remove 'active-tab' class from all tab contents
  for (let tabcontent of tabContents) {
    tabcontent.classList.remove('active-tab');
  }

  // Add 'active-tab' class to the corresponding tab content
  tabContents[tabIndex].classList.add('active-tab');
};

function opentab(tabName) {
  // Add click event listener to each tab link
  for (let tablink of tabLinks) {
    tablink.addEventListener('click', handleClick);
  }
}

function openMenu() {
  sideMenu.style.right = '0';
}

function closeMenu() {
  sideMenu.style.right = '-200px';
}

function sendForm() {
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let subject = document.querySelector('#subject').value;
  let message = document.querySelector('#message').value;

  let body = "Name: " + name + "<br/> Email: " + email + "<br/> <br/>" + message;

  Email.send({
    SecureToken: 'e7a2c9c5-bad4-4d43-9d22-0711b66bb7be',
    To: 'maddasi04@gmail.com',
    From: 'maddasi04@gmail.com',
    Subject: subject,
    Body: body,
  }).then(message => alert(message));
}

sideMenu.addEventListener('click', openMenu);
sideMenu.addEventListener('click', closeMenu);

