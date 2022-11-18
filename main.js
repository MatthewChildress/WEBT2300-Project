import timeCalculation from './time-functions/timeCalculation.js'
import timeGreeting from './time-functions/timeGreeting.js'
import itemsForEach from './ui-functions/itemsForEach.js'
import { showCart } from './ui-functions/showCart.js'
import { itemsFilter } from './ui-functions/itemsFilter.js' 

showCart();
itemsFilter();
/* const toggleCart = document.getElementById('toggleCart');
toggleCart.onclick = showCart(); */
// gives time & day. can append to be two divs if needed
setInterval(timeCalculation, 1000);
timeGreeting();

//iterates of array of objects and creates dom elements and their ids/classes
itemsForEach();

