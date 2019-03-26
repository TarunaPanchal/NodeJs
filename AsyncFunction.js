function a2sec(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await a2sec(10);
  const b = await a2sec(20);
  const c = await a2sec(30);
  return x + a + b + c;
}


addAsync(10).then((sum) => {
  console.log(sum);
});