// Import stylesheets
import './style.css';

const contact_list = [
  'Peter Petrelli',
  'Claire Bennet',
  'Hiro Nakamura',
  'Nathan Petrelli',
  'Sylar',
  'Niki Sanders',
];

const list_element = document.querySelector('.contact-container');
const pagination_element = document.querySelector('.pagination ul');

let current_page = 1;
let contacts_on_page = 2;

const displayContact = (contacts, page, on_page) => {
  // list_element.innerHTML = '';
  page--;
  let loop_start = page * on_page;
  let contact_to_display = contacts.slice(loop_start, loop_start + on_page);
  console.log(contact_to_display);
  for (let i = 0; i < contact_to_display.length; i++) {
    const div_element = document.createElement('div');
    div_element.classList.add(
      'flex',
      'cursor-pointer',
      'my-1',
      'hover:bg-blue-lightest',
      'rounded'
    );
    const template = `
  <div class="w-4/5 h-10 py-3 px-1">
    <p class="hover:text-blue-dark">${contact_to_display[i]}</p>
  </div>`;
    div_element.innerHTML = template;

    list_element.appendChild(div_element);
  }
};

pagination_element.addEventListener('click', (e) => {
  console.log(e.target.value);
});

displayContact(contact_list, current_page, contacts_on_page);
