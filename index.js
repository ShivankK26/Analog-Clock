const degree = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');


setInterval(() =>{ // setInterval() method calls a function at specified intervals // myInterval = setInterval(function, milliseconds);
    const date = new Date();
    const hh = date.getHours() * 30; // Returns the current hour
    const mm = date.getMinutes * degree; // Returns the current minute
    const ss = date.getSeconds * degree; // Returns the current second


    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
});