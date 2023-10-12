const a='sunny';
first();

function first(){
    const b='I';
    // console.log(b);
    second();

    function second(){
        const c='am';
        // console.log(c);
        third();
    }
}

function third(){
    const d='.';
    // console.log(d);
    console.log(a+d); //sunny. 
    // console.log(b+c+a+d); //ReferenceError: b & c is not defined
}

/*
 * third() is called from function-scope but this function, outside his parent function/global-scope.
   So the point is, in this situation scope-chaining is not work.
 
 *first() & third() are different-different function not in a functional scope.
  So , in the third() we did not get the access to other different function. (first()-> b, second()-> c) ;

 *Into third() , give the b & c value as a error. ReferenceError: b & c is not defined
*/