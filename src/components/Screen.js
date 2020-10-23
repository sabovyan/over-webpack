import Display from './Display';

function Screen() {
  const render = ({ value }) => {
    const result = Display(value);
    if (root.firstChild) {
      root.firstElementChild.remove();
    }
    root.prepend(result);
  };
  return {
    render,
  };
}

export default Screen;
