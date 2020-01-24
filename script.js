let data = new XMLHttpRequest();
let responseObject1;
let apikey = '68b0a95b';
const input = document.querySelector('input');
const button = document.querySelector('button');
const listOnPage = document.getElementById('results');

function makeSearch() {
    data.open("GET", "https://www.omdbapi.com/?apikey=68b0a95b&type=movie&s=" + input.value);
    data.send();
   
    data.onload = function () {
        /* if (this.readyState == 4 && this.status == 200) {  */           
            console.log(data.responseText);
            responseObject1 = JSON.parse(data.responseText);
            //clear
            listOnPage.innerHTML = "Loading...^_^";
           // listOnPage.innerHTML = "";
            for(let i = 0; i < responseObject1.Search.length; i++) {
                // store the current result in a variable for easy acces
                let result = responseObject1.Search[i];
                console.log(result);
                // create a li object
                let liObject = document.createElement('li');
                let posterObject = document.createElement('img');
                posterObject.src = result.Poster;
                // change the text to a movie result
                liObject.innerHTML = result.Title;
                // append it to the container
                listOnPage.appendChild(liObject);
                listOnPage.appendChild(posterObject);
              }
              listOnPage.firstChild.textContent ="";
        /* } */
    }

  /*   reponseObject1.forEach((movies) => {
        let result = movies; 
    }); */
}


button.addEventListener('click', makeSearch);




 // console.log(axios)
/* let input = document.querySelector('input');
let button = document.querySelector('button');

function makeSearch(){
  console.log("https://www.omdbapi.com/?apikey=68b0a95b&type=movie&s="+input.value);
  let listOnPage = document.getElementById('results');
  //clear the existing list
  listOnPage.innerHTML = "Loading...^_^";

  //put URL here
  axios.get("https://www.omdbapi.com/?apikey=68b0a95b&type=movie&s="+input.value)
    .then(iHappenLater);

  function iHappenLater(response) {
      // you now have access to the data

      listOnPage.innerHTML = "";
      console.log(response.data);
      for(let i = 0; i < response.data.Search.length; i++) {
        // store the current result in a variable for easy acces
        let result = response.data.Search[i];
        console.log(result);
        // create a li object
        let liObject = document.createElement('li');
        let posterObject = document.createElement('img');
        posterObject.src = result.Poster;
        // change the text to a movie result
        liObject.innerHTML = result.Title;
        // append it to the container
        listOnPage.appendChild(liObject);
        listOnPage.appendChild(posterObject);
      }
    }
}

button.addEventListener('click', makeSearch);

  */