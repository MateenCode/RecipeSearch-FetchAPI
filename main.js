let container = document.querySelector('.container')
let display = document.querySelector('.display')


let input = document.querySelector('.inputBox').addEventListener('keydown', function(event){

  if(event.keyCode === 13){
    return(getData(event.target.value));
  }
})

function getData(event){
  fetch(`http://recipepuppyproxy.herokuapp.com/api/?i=${event}`)
    .then(function(response){
      return response.json()
    }).then(function(data) {
      populateData(data)
    })
  }

  getData("")

  function populateData(data) {
    console.log(data);
    let content = ""
    for (var i = 0; i < data.results.length; i++) {

        var title = `${data.results[i].title}`;
        let link = `${data.results[i].href}`;
        let img = `${data.results[i].thumbnail}`;
        let ingredients = `${data.results[i].ingredients}`


content +=  `<div class = "w3-card">
<h2 href='${link}'>${title}</h2>
<img href='${link}' src="${img}">
<p>${ingredients}</p>
      </div>`

    }
    display.innerHTML = content
  }
