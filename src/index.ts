export default function pikkr<T>(arr: T[]): T | boolean {
  // Bail early if no arr found or if there's only one item in arr
  if (!arr || arr.length < 2) {
    return false;
  }

  const num = Math.floor(Math.random() * arr.length);

  // use num to decide which element of arr is chosen
  return arr[num];
}
