const date = new Date();
let time = [date.getHours(), date.getMinutes(), date.getSeconds()];

time = time.map((el)=> {
    return el > 9 ? el : `0${el}`;
}).join(':');

console.log(time);
