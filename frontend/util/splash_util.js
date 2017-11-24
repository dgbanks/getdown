// export const randomColor = () => {
//   return ['red', 'blue', 'green', 'yellow', 'purple', 'orange'][Math.floor(Math.random() * 6)];
// };
export const randomColor = () => {
  // return ['rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)'].shift();
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
  return ['0', '.5', '1', '1.5', '2',
          '2.5', '3', '3.5', '4'][Math.floor(Math.random() * 11)];
};

export const randomTime = () => {
  return ['8', '8.25', '8.5', '8.75',
          '9', '9.25', '9.5', '9.75',
          '10', '10.25', '10.5', '10.75',
          '11', '11.25', '11.5', '11.75',
          '12', '12.25', '12.5', '12.75',
          '13', '13.25', '13.5', '13.75',
          '14'][Math.floor(Math.random() * 25)];
};

export const insertKeyframes = (width) => {
  let styleSheet = document.styleSheets[0];
  let keyframes = `@keyframes moveStripe {
    from
    { margin-left: -${width}px; }
    to
    { margin-left: 105%; }
    }`;

  styleSheet.insertRule(keyframes);
};
