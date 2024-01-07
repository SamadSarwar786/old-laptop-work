// const doWork = async () => {
//     throw new Error('Something went wrong');
//  return 'Andrew';
// }

// doWork()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// ---------------**************************------------------------------//

// async await make promise chaning lot easier by making the content inside async function , synchronous

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      return reject("Both numbers should be positive");
    }
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  console.log("before 1st add");
  const sum = await add(2, -3);
  console.log("before 2nd add");
  const sum2 = await add(sum, -5);
  console.log("before 3rd add");
  const sum3 = await add(sum2, 10);
  return sum3;
};

doWork()
  .then((res) => console.log("result -----> ", res))
  .catch((err) => console.log("error -----> ", err));
