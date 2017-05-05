console.log('app js is connected');

var state = document.querySelector('#state-list');
var city = document.querySelector('#city-list');

state.addEventListener('click', startFunc);
function startFunc() {
 if(state.innerHTML === 'New York') {
   city.innerHTML = 'New York City';
 }
}