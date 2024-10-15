function countBy(x, n) {
  const z = [x];

  for (let i = x; i <= n; i++) {
    z.push(i * x);
  }

  return z;
}
console.log(countBy(1, 10));
console.log(countBy(2, 5));
