const getRandomCode = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialChars = '$%!#&?';

  let code = '';

  for (let i = 0; i < 10; i++) {
    code += letters.charAt(Math.floor(Math.random() * letters.length));
    code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    code += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  }

  return code;
}
