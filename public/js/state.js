var state = document.querySelector('#state-list');

state.addEventListener('change', startFunc);   //used 'change' event to capture the values in dropdown after the user chooses it
function startFunc() {
 var selected_state = state[state.selectedIndex].value;
 window.location.href = 'travel/state_name/' + selected_state;
}
