import Button from './Button';

function PlusButton(eventListener) {
  const button = Button('+');
  button.addEventListener('click', eventListener);
  return button;
}
export default PlusButton;
