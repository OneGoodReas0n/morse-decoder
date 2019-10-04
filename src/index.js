const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const BYNARY_TO_MORSE = {
    '10': '.',
    '11': '-',
}

function binaryToMorse(str) {
    let morseLetter = "";
    const morseSignsBinaryArray = String(str).match(/.{1,2}/g);
    for (let i = 0; i < morseSignsBinaryArray.length; i++) {
        morseLetter += BYNARY_TO_MORSE[morseSignsBinaryArray[i]]
    }
    return morseLetter;
}

function decode(expr) {
    // write your solution here
    let decodeStr = "";
    const signsMassive = String(expr).match(/.{1,10}/g);
    for (let i = 0; i < signsMassive.length; i++) {
        if (String(signsMassive[i]).indexOf('1') !== -1) {
            const firstPositionOfElement = String(signsMassive[i]).indexOf('1');
            const letterInBinary = String(signsMassive[i]).substr(firstPositionOfElement)
            const morseLetter = binaryToMorse(letterInBinary);
            decodeStr += MORSE_TABLE[morseLetter]
        }
        else{
            decodeStr += " ";
        }
    }
    return decodeStr;
}

module.exports = {
    decode
}