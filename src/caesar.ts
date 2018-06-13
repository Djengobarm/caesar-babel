const abc = 'abcdefghijklmnopqrstuvwxyz';
const lastPosition = abc.length - 1;

export function caesar(input: string, key: number): string {

  if ( key > lastPosition ) {
    throw new Error('Key is invalid');
  }

  let output = '';

  for ( let i = 0; i < input.length; i++ ) {
    let ch = input[i];
    let index = abc.indexOf(ch);

    if ( index !== -1 ) {
      let offset = index + key;

      if ( offset > lastPosition ) {
        offset = offset - abc.length;
      }

      output += abc.charAt(offset);
    } else {
      output = output + ch;
    }
  }

  return output;
}