export function calcRatio(dimetions) {
  const dims = dimetions
    .toLowerCase()
    .split('x');

  return (dims[1] / dims[0]) * 100;
}
