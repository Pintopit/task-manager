export default function addZeros(number: number) {
  return `0${String(number)}`.slice(-2);
}
