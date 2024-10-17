let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; // error because we don't know the type of userInput.

if (typeof userInput === 'string') {
  userName = userInput; // acceptable because of type checking
}

function generateError(message: string, code: number): never {
    throw { message: message, code: code }; // never returns a returned value - no undefined
    // while (true) {} // this also never returns value or undefined
}


generateError('An error occurred!', 500);