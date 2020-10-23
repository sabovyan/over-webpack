import Button from './Button.js';

function MinusButton(eventListener) {
  const button = Button('-');
  button.addEventListener('click', eventListener);
  return button;
}
export default MinusButton;
