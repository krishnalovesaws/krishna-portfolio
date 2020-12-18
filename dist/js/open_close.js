let openClose = document.getElementById('openClose');
function startTime() {
  let now = new Date();
  let weekday = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
  let today = weekday[now.getDay()];
  let dayOfWeek = now.getDay();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();        
  let suffix = hour >= 12 ? "PM" : "AM";
  if (minutes < 10)  {minutes = "0" + minutes};
  if (seconds < 10 ) {seconds = "0" + seconds;}
  if ((dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 4) && hour >= 8 && hour < 17) {
    hour = ((hour + 11) % 12 + 1);
    showMessage(`${today }, ${hour}:${minutes}:${seconds} ${suffix} - Let's Connect`, 'open');
  }
  else if ((dayOfWeek === 5 || dayOfWeek === 6) && hour >= 10 && hour <16) {
    hour = ((hour + 11) % 12 + 1);
    console.log(hour);
    showMessage(`${today }, ${hour}:${minutes}:${seconds} ${suffix} - Let's Connect`, 'open');
  }
  else {
    let hourFormat = hour >=12 ? hour-12 : hour;
    // Changing the Hour Format
    showMessage(`${today }, ${hourFormat}:${minutes}:${seconds} ${suffix} - Out of Office`, 'closed')
    // console.log(hour)
    // console.log(hourFormat)
  }
  setTimeout(function(){ startTime() }, 500);
}

  
function showMessage(message, classname) {
  openClose.innerHTML = message;
  openClose.classList.add(classname);
}
  
window.addEventListener('load', startTime());