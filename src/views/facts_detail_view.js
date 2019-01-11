const FactsDetailView = function(){

};

FactsDetailView.prototype.createFactDetail = function (catfact) {

  const factDiv = document.createElement('div');

  const text = document.createElement('div')
  text.textContent = catfact.text;
  factDiv.appendChild(text);

  return factDiv

};


module.exports = FactsDetailView;
