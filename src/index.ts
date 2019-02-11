export default function pikkr<T>(arr: T[]): T {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array.');
  }

  if (arr.length < 2) {
    throw new Error('There must be at least 2 items in the array.');
  }

  const num = Math.floor(Math.random() * arr.length);

  // use num to decide which element of arr is chosen
  return arr[num];
}
