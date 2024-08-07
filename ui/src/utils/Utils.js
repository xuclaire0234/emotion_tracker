/*
This code is from a video tutorial on generating an array of random and unique numbers by James Q Quick, on 2022-08-03, retrieved on 2023-04-01 from youtube.com
Video tutorial found here:
https://youtu.be/giHb-w49yGU
*/
export const getRandomNumberArray = (count, max) => {
    let rands = [];
    while (rands.length < count) {
        const r = Math.floor(Math.random() * max);
        if (rands.indexOf(r) === -1) {
            rands.push(r);
        }
    }
    return rands;
}

export const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
