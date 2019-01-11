const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js')

const CatFacts = function(){
  this.catfacts = [];
}

CatFacts.prototype.bindEvents = function () {
  const index = event.detail;

};


CatFacts.prototype.getData = function () {
  const request = new Request("https://cat-fact.herokuapp.com/facts");
  request.get().then((data) => {
    this.catfacts = data
    console.log(this.catfacts);
    PubSub.publish('CatFacts:all-facts', this.catfacts);
  })
};




module.exports = CatFacts;
