
let count = 0;
const button = document.getElementById('count')
const newElement = document.getElementById('newE')

button.onclick = function(){
    count++;
    newElement.innerHTML = count;
}