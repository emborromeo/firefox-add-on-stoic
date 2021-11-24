const stoicURL=`https://stoic-api.herokuapp.com/api/v1/random`;

fetch(stoicURL)
.then(response => response.json())
.then(data => {

console.log(data);
console.log(data.saying);


document.getElementById("quote").innerHTML = data.saying;
document.getElementById("author").innerHTML = data.author;
document.getElementById("source").innerHTML = " from " + data.source;



sayingValue=data.saying;
authorValue=data.author;

document.getElementById("share-link").href="https://twitter.com/intent/tweet?text=" + sayingValue + " - " + authorValue;  

});

window.onload = function() {
    clock();  
      function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = 'PM';
      if (min < 10) {
        min = "0" + min;
      }
      if (hour > 12) {
        hour = hour - 12;
      }    
      if(hour==0){ 
        hour=12;
      }
      if(TwentyFourHour < 12) {
         mid = 'AM';
      }     
    document.getElementById('currentTime').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
      setTimeout(clock, 1000);
      }
  }
  