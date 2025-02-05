const price = 1000;

if (price >= 4000) {
  // 50% discount
  const discount = price * (50 / 100);
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price >= 3000) {
  // 40% discount
  const discount = price * (40 / 100);
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price >= 2000) {
  // 20% discount
  const discount = price * (20 / 100);
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
