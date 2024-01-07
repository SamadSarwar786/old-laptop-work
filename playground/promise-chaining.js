const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// 1st Method to do chaining

// add(2, 5)
//   .then((sum) => {
//     console.log("sum1", sum);
//     add(2, sum)
//       .then((sum2) => console.log("sum2", sum2))
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// 2nd Method to do chaining

add(2, 5)
  .then((sum) => {
    console.log(sum);
    return add(sum, 2);
  })
  .then((sum2) => console.log(sum2))
  .catch((err) => console.log(err));   // combine err statment for all chaini
