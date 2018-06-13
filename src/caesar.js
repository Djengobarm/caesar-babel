const abc = 'abcdefghijklmnopqrstuvwxyz';
const lastPosition = abc.length - 1;

export function caesar(input, key) {

  key = parseInt(key);

  if ( key > lastPosition ) {
    throw new Error('Key is invalid');
  }

  let output = '';

  for ( let i = 0; i < input.length; i++ ) {
    let ch = input[i];
    let index = abc.indexOf(ch);

    if ( index !== -1 ) {
      // JS is weird, so I had to multiply at least one value to 1 to avoid strings concatenation
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