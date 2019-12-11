'use strict';

function getDogImage(str) {
    fetch(`https://dog.ceo/api/breed/${str}/images/random`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let bree = document.getElementById('dogSearch').value;
      let breed = bree.toLowerCase(document.getElementById('dogSearch').value);

      getDogImage(breed);
    });
  }

  function displayResults(responseJson) { 
      console.log(responseJson); 
      
      $('.results').html( `<img src="${responseJson.message}" class="results-img">` );
      $('.results').removeClass('hidden');
      }

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});