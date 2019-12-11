'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numDogs = document.getElementById('dogSearch').value;
    console.log(numDogs);
    if (numDogs === '') {
        numDogs = 3;
        for (let i=1; i<=numDogs; i++){
            getDogImage();
            }
    }
    else if (numDogs > 51) {
        console.log('Please type a lower number');
    }
    else {
      for (let i=1; i<=numDogs; i++){
      getDogImage();
      }
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});