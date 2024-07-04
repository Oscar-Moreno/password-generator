// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const passwordElement = document.getElementById('password');
const textElement = document.getElementById('length-password');
const rangeElement = document.getElementById('range');
const buttonElement = document.getElementById('btn');

const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

let passwordLength = 16;

const randomNumber = () => {
  return Math.floor(Math.random() * allCharacters.length);
};

const generatePassword = () => {
  let newPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const takeRandomNumber = randomNumber();
    newPassword += allCharacters[takeRandomNumber];
  }
  return newPassword;
};
const printPassword = () => {
  passwordElement.value = generatePassword;
};


const setPasswordLength = event => {
    passwordLength = event.target.value;
    textElement.textContent = passwordLength;
  };
  
rangeElement.addEventListener('input', setPasswordLength);
  
buttonElement.addEventListener('click', printPassword);