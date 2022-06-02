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
  activeButtons();
  list_element.innerHTML = '';
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
  const pageNumber = parseInt(e.target.closest('li').dataset.page);
  activeButtons();
  if (pageNumber === 0) {
    current_page -= 1;
  } else if (pageNumber === 5) {
    current_page += 1;
  } else {
    current_page = pageNumber;
  }
  console.log(current_page);
  displayContact(contact_list, current_page, contacts_on_page);
});

const activeButtons = () => {
  const prevBtn = document.querySelector("[data-page='0']");
  const nextBtn = document.querySelector("[data-page='5']");

  if (current_page <= 1) {
    current_page === 1;
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'block';
  } else if (current_page === 2) {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
  } else {
    current_page === 3;
    prevBtn.style.display = 'block';

    nextBtn.style.display = 'none';
  }
};

displayContact(contact_list, current_page, contacts_on_page);
