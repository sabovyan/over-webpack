import PlusButton from './PlusButton';
import MinusButton from './MinusButton';

function ButtonGroup(increaseValue, decreaseValue) {
  const fragment = document.createDocumentFragment();
  const plusBtn = PlusButton(increaseValue);
  const minusBtn = MinusButton(decreaseValue);
  fragment.append(plusBtn);
  fragment.append(minusBtn);
  return fragment;
}

export default ButtonGroup;
