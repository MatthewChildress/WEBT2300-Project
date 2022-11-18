export default function timeGreeting() {
    // instantiates new date object
    const time = new Date();
    if (time.getHours() > 4 && time.getHours() < 12) {
        document.getElementById("timeGreet").textContent = "Good Morning, ";
      } else if (time.getHours() >= 12 && time.getHours() < 17) {
        document.getElementById("timeGreet").textContent = "Good Afternoon, ";
      } else {
        document.getElementById("timeGreet").textContent = "Good Evening, ";
      }
}