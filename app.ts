import { caesar } from './src/caesar';

const input = document.querySelector('.input') as HTMLInputElement;
const output = document.querySelector('.output') as HTMLInputElement;
const key = document.querySelector('.key') as HTMLInputElement;

input.addEventListener('input', onInputChanged);
key.addEventListener('change', onInputChanged);

function onInputChanged() {
  output.value = `"${caesar(input.value, parseInt(key.value))}" encoded with key ${key.value}`;
}