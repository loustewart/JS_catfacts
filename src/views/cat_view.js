const PubSub = require('../helpers/pub_sub.js');
const FactsDetailView = require('./facts_detail_view.js');

const CatView = function (element) {
  this.element = element;
}

CatView.prototype.bindEvents = function () {
  PubSub.subscribe('CatFacts:all-facts', (event) => {
    // this.container.innerHTML = '';
    console.log(event.detail);
    this.render(event.detail.all);
  })
};


CatView.prototype.render = function (catFacts) {
  catFacts.forEach((fact) => {
    const factDetail = new FactsDetailView();
    const factDiv = factDetail.createFactDetail(fact);
    this.element.appendChild(factDiv);
  })

};


module.exports = CatView;
