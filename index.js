/**
 * @returns {string} time - current time in format like 08:12:35
 **/

const getTime = ()=> {
    const date = new Date();

    const time = [date.getHours(), date.getMinutes(), date.getSeconds()];

    return time.map((el)=> {
        return el > 9 ? el : `0${el}`;
    }).join(':');
}

console.log(getTime());
