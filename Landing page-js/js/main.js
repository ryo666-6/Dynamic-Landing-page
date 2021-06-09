let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let names = document.getElementById("name");
let focus = document.getElementById("focus");

const setAmPm = true;
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}${setAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}
//add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = "Good Morning ";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = "Good Afternoon ";
  } else {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = "Good Evening ";
    document.body.style.color = "white";
  }
};

function getName() {
    if (localStorage.getItem('name') === null) {
      names.textContent = '[Enter Name]';
    } else {
      names.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            names.blur();
        }
    }else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
  }

function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else {
        localStorage.setItem('focus', e.target.innerText);
    }
};

names.addEventListener('keypress', setName);
names.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();
