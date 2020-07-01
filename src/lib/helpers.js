export const battToPercent = (rawVolt) => {
  let volt = parseFloat(rawVolt) * 1000;
  let p = undefined;

  if (volt < 3616) {
    p = ((volt - 3150) / (3616 - 3150)) * 7 + 0;
  } else if (volt < 3759) {
    p = ((volt - 3616) / (3759 - 3616)) * (50 - 7) + 7;
  } else if (volt < 4100) {
    p = ((volt - 3759) / (4100 - 3759)) * (100 - 50) + 50;
  } else {
    p = 100;
  }

  return parseInt(p);
};
