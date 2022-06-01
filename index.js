// Import stylesheets
import './style.css';

const users = [
  'Peter Petrelli',
  'Claire Bennet',
  'Hiro Nakamura',
  'Nathan Petrelli',
  'Sylar',
  'Niki Sanders',
];

const list_element = document.querySelector('.contact-container');
const pagination_element = document.querySelector('.list ul');

let current_page = 1;
let rows = 3;

const displayContact = () => {};
