

var city = document.querySelector('#city-list');
city.addEventListener('change', infoFunc);
function infoFunc() {
    var selectedCity = city[city.selectedIndex].value;
    window.location.href = '/travel/info/'+selectedCity;
}