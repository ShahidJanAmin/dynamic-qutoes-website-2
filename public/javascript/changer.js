

function data(){
  
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById("show_quotes").innerHTML=data[0].text;
    console.log(data[0].text)
  });
  alert("hi");
};