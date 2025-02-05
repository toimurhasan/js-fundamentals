const price = 1000;
const age = 10;

if (age < 12) {
  console.log("you can eat for free");
} else if (age >= 60) {
  // 50% discount
  const discount = price * (50 / 100);
  const payAmount = price - discount;
  console.log(payAmount);
} else if (age >= 50) {
  // 40% discount
  const discount = price * (40 / 100);
  const payAmount = price - discount;
  console.log(payAmount);
} else if (age >= 40) {
  // 20% discount
  const discount = price * (20 / 100);
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
