
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}


function getRandomString (length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
}

function getRandomArray (min, max, length) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return randomArray;
}


module.exports = {
    getRandomNumber: getRandomNumber,
    getRandomString: getRandomString,
    getRandomArray: getRandomArray
}


