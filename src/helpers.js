export function calcRatio(dimetions) {
  const dims = dimetions
    .toLowerCase()
    .split('x');

  return (dims[1] / dims[0]) * 100;
}

export function isVisible(element) {
  const { innerWidth, innerHeight, pageXOffset, pageYOffset } = window;

  const { offsetTop, offsetLeft } = element;

  const rangeY = [pageYOffset, pageYOffset + innerHeight];
  const rangeX = [pageXOffset, pageXOffset + innerWidth];

  const inY = offsetTop >= rangeY[0] && offsetTop <= rangeY[1];
  const inX = offsetLeft >= rangeX[0] && offsetLeft <= rangeX[1];

  return inY && inX;
}
