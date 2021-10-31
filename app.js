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
//****************************************************************************

const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

// delayedColorChange('red',2000)
//     .then(() => delayedColorChange('orange',2000))
//     .then(() => delayedColorChange('yellow',2000))
//     .then(() => delayedColorChange('green',2000))
//     .then(() => delayedColorChange('blue',2000))
//     .then(() => delayedColorChange('indigo',2000))
//     .then(() => delayedColorChange('violet',2000))
//     .catch((err) => console.error(err))

    async function rainbow(){
        await delayedColorChange('red', 1000)
        console.log("Hey Red!");
        await delayedColorChange('orange',1000)
        console.log("Hey Orange!");
        await delayedColorChange('yellow',1000)
        console.log("Hey Yellow!");
        await delayedColorChange('green',1000)
        console.log("Hey Green!");
        await delayedColorChange('blue',1000)
        console.log("Hey Blue!");
        await delayedColorChange('indigo',1000)
        console.log("Hey Indigo!");
        await delayedColorChange('violet',1000)
        console.log("Hey Violet!");
        return "ALL DONE!";
    }

    rainbow().then(() => console.log("END OF RAINBOW!"))

    async function printRainbow(){
        await rainbow();
        console.log("END OF RAINBOW!");
    }

// ********************* handling errors in async functions *************************    
    const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests(){
    try{
   let data1 = await fakeRequest('/page1')
   let data2 = await fakeRequest('/page2')
    console.log(data1);
}catch(e){
    console.log("CAUGHT AN ERROR");
    console.log("error is: ",e);
    }
    
}

