module.exports = function decryptText(text, rotation) {  
  const arrayText = Array.from(text);
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let newText = '';
  
  arrayText.forEach(value => {
    if (value === ' ') {
      newText += ' ';
    } else {
      const position = alphabet.indexOf(value);

      if (position > -1){
        
        let newPosition = (position - rotation);
        
        if (newPosition < 0) {          
          newPosition = (26 - (rotation - position));
        }

        const newLetter = alphabet[newPosition];
        newText += newLetter;

      } else {
        newText += value;
      }
    }
  })

  return newText.toLowerCase();
}