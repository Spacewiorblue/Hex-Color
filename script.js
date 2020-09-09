const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.querySelector('.hexBtn');
const hex = document.querySelector('.hex');
const backgroundColor = document.querySelector('body');

button.addEventListener('click', getHex);

function getHex() {
    let hexCol = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * nums.length);
        hexCol += nums[random];
    }
    backgroundColor.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}






