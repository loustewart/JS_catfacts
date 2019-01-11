const CatFacts = require('./models/cat_facts.js');
const CatView = require('./views/cat_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript loaded");




  const factContainer = document.querySelector('#cat-facts');
  const catView = new CatView(factContainer);
  catView.bindEvents();


  const catFacts = new CatFacts();
  catFacts.bindEvents();
  catFacts.getData();

});
