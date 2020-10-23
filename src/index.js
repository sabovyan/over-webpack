import ButtonGroup from './components/ButtonGroup';
import Screen from './components/Screen';

import './less/index.less';

/* ----------------Root---------------- */
const root = document.querySelector('#root');

/* ---------------Main------------------ */
function Main() {
  const state = {
    value: 0,
  };

  const increaseValue = (render) => {
    state.value += 1;
    render(state);
  };

  const decreaseValue = (render) => {
    if (state.value - 1 < 0) {
      state.value = 0;
    } else {
      state.value -= 1;
    }
    render(state);
  };

  const render = () => {
    const screen = new Screen();
    const buttons = ButtonGroup(
      increaseValue.bind(null, screen.render),
      decreaseValue.bind(null, screen.render)
    );

    screen.render(state);
    root.append(buttons);
  };
  const init = () => {
    render();
  };
  return {
    render,
    init,
  };
}

const calc = new Main();
calc.init();
