async function hello(){

}
// when a function is declared async, it automatically returns a promise
// hello()
// Promise {<fulfilled>: undefined}

const sing = async() => {
    // throw new Error("UH OH");
    return 'DO RE MI';
}
// if the function returns a value, the promise will be resolved with that value
// if the function throws an exception, the promise will be rejected
sing().then((data) => {
    console.log("Promise fulfilled with: ",data);
})
.catch((err) => {
    console.log("Error encountered: ",err);
})
// ********************************* EXAMPLE *************************************

const login = async(username,password) =>{
    if(!username || !password)
    throw 'Missing Credentials'
    if(password === 'myMeowIsTheBest')
    return 'WELCOME!';
    throw 'Invalid Password'
}
//*******************************************
login('marsh')
.then(msg => {
    console.log('LOGGED IN!');
    console.log(msg);
})
.catch(err => {
    console.log('ERROR!');
    console.log(err);
})
// ERROR!
// app.js:37 Missing Credentials
//********************************************
login('marsh','rastdy')
.then(msg => {
    console.log('LOGGED IN!');
    console.log(msg);
})
.catch(err => {
    console.log('ERROR!');
    console.log(err);
})
// ERROR!
// app.js:47 Invalid Password
//*********************************************
login('marsh','myMeowIsTheBest')
.then(msg => {
    console.log('LOGGED IN!');
    console.log(msg);
})
.catch(err => {
    console.log('ERROR!');
    console.log(err);
})
// LOGGED IN!
// app.js:57 WELCOME!
//***********************************************