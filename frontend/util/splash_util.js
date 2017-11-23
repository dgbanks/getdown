// export const randomColor = () => {
//   return ['red', 'blue', 'green', 'yellow', 'purple', 'orange'][Math.floor(Math.random() * 6)];
// };
export const randomColor = () => {
  return ['rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)'][Math.floor(Math.random() * 3)];
};
// consider CMYK colors and css blend mode

export const randomOpacity = () => {
  return ['.2', '.3', '.4', '.5', '.6', '.7', '.8'][Math.floor(Math.random() * 7)];
};

export const randomWidth = () => {
  return ['1000', '1250', '1500'][Math.floor(Math.random() * 3)];
};

export const randomPosition = (width) => {
  let pos = [width, (width * .9), (width * .8), (width * .7),
    (width * .6), (width * .5), (width * .4), (width * .3),
    (width * .2), (width * .1)][Math.floor(Math.random() * 10)];
  let neg = ['-', ''][Math.floor(Math.random() * 2)];
  return `${neg}${pos}px`;
};

export const randomDelay = () => {
  return ['0', '.1', '.2', '.3',
                '.4', '.5', '.6', '.7',
                '.8', '.9', '1'][Math.floor(Math.random() * 11)];
};

export const randomTime = () => {
  return ['5', '5.25', '5.5', '5.75',
          '6', '6.25', '6.5', '6.75',
          '7', '7.25', '7.5', '7.75',
          '8', '8.25', '8.5', '8.75',
          '9', '9.25', '9.5', '9.75',
          '10'][Math.floor(Math.random() * 21)];
};

export const insertKeyframes = (width) => {
  let styleSheet = document.styleSheets[0];
  let keyframesOne = `@keyframes moveLeftStripe {
    from
    { margin-left: -${width}px; }
    to
    { margin-left: 100%; }
    }`;

  let keyframesTwo = `@keyframes moveRightStripe {
    from
    { margin-left: 100%; }
    to
    { margin-left: -${width}px; }
    }`;

  styleSheet.insertRule(keyframesOne);
  styleSheet.insertRule(keyframesTwo);
};
