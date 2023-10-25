
const oneWord=(str)=>{
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirst=(str)=>{
    const [first, ...others]=str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer=(str, fn)=>{
    console.log(`Original str: ${str}`); 
    console.log(`Transform str: ${fn(str)}`); 
    console.log(`Transformed by: ${fn.name}`); 
};


transformer('javascript is the best.', upperFirst);
//Original str: javascript is the best.
//Transform str: JAVASCRIPT is the best.
//Transformed by: upperFirst

transformer('javascript is the best.', oneWord);
// Original str: javascript is the best.
// Transform str: javascriptisthebest.
// Transformed by: oneWord


// JS use callback function all the time
const sayHi=()=>{
    console.log('Hi');
};

document.body.addEventListener('click', sayHi);

['hi','hi','hi','hi','hi'].forEach(sayHi);

// NOTE:
/**
 * callback function allow to abstracting abstracting means short the code or hide detailing that is important in js.On the top , we can see the example, where transformer function did not concern about oneWord and upperFirstWord function. And this transformer type of functions are called HIGHER ORDER FUNCTION.
 */