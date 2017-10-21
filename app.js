'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allLocations = [];
var totalCookiesHour = 0;
var combinedTotal = 0;

function MakeLocation(name, minCustHour, maxCustHour, aveCookieSoldHour) {
  this.name = name;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.aveCookieSoldHour = aveCookieSoldHour;
  this.randCustHour = [];
  this.cookiesSoldHour = [];
  this.totalCookies = 0;
  allLocations.push(this);

  this.calcRandCustHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour);
      console.log(this.randCustHour[i]);
    }
  };
  this.calcCookiesSoldHour = function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldHour.push(Math.round(this.aveCookieSoldHour * this.randCustHour[j]));
      console.log(this.cookiesSoldHour[j]);
    }
  };
  this.calcRandCustHour();
  this.calcCookiesSoldHour();

  function makeStands() {
    new MakeLocation('First and Pike', 23, 65, 6.3);
    new MakeLocation('SeaTac Airport', 3, 24, 1.2);
    new MakeLocation('Seattle Center', 11, 38, 3.7);
    new MakeLocation('Capitol Hill', 20, 38, 2.3);
    new MakeLocation('Alki', 2, 16, 4.6);
  }
};
makeStands();

var headerRow = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];
var

var tableEl = document.getElementById('sales');

function tableRowMaker(inputArray) {
  var trEl = document.createElement('tr');
  for(var i = 0; i < inputArray.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = inputArray[i];
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
}

tableRowMaker(headerRow);

/*var firstAndPike = {
  name: 'First and Pike',
  minCustHour: 23,
  maxCustHour: 65,
  aveCookieSoldHour: 6.3,
  randCustHour: [],
  cookiesSoldHour: [],
  totalCookies: 0,

  calcRandCustHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour);
      console.log(this.randCustHour[i]);
    }
  },
  calcCookiesSoldHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldHour.push(Math.round(this.aveCookieSoldHour * this.randCustHour[j]));
      console.log(this.cookiesSoldHour[j]);
    }
  },
  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    this.calcCookiesSoldHour();
    this.calcRandCustHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldHour[k] + ' cookies';
      console.log(liEl);
      firstandpike.appendChild(liEl);
    }
  }
};

var seaTac = {
  name: 'SeaTac Airport',
  minCustHour: 3,
  maxCustHour: 24,
  aveCookieSoldHour: 1.2,
  randCustHour: [],
  cookiesSoldHour: [],
  totalCookies: 0,

  calcRandCustHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour);
      console.log(this.randCustHour[i]);
    }
  },
  calcCookiesSoldHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldHour.push(Math.round(this.aveCookieSoldHour * this.randCustHour[j]));
      console.log(this.cookiesSoldHour[j]);
    }
  },
  render: function() {
    var seatac = document.getElementById('seatac');
    var stac = document.getElementById('stac');
    this.calcCookiesSoldHour();
    this.calcRandCustHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seatac.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldHour[k] + ' cookies';
      console.log(liEl);
      stac.appendChild(liEl);
    }
  }
};
var seattleCenter = {
  name: 'Seattle Center',
  minCustHour: 11,
  maxCustHour: 38,
  aveCookieSoldHour: 3.7,
  randCustHour: [],
  cookiesSoldHour: [],
  totalCookies: 0,

  calcRandCustHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour);
      console.log(this.randCustHour[i]);
    }
  },
  calcCookiesSoldHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldHour.push(Math.round(this.aveCookieSoldHour * this.randCustHour[j]));
      console.log(this.cookiesSoldHour[j]);
    }
  },
  render: function() {
    var seacent = document.getElementById('seacent');
    var seattlecenter = document.getElementById('seattlecenter');
    this.calcCookiesSoldHour();
    this.calcRandCustHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seacent.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldHour[k] + ' cookies';
      console.log(liEl);
      seattlecenter.appendChild(liEl);
    }
  }
};
var capitolHill = {
  name: 'Capitol Hill',
  minCustHour: 20,
  maxCustHour: 38,
  aveCookieSoldHour: 2.3,
  randCustHour: [],
  cookiesSoldHour: [],
  totalCookies: 0,

  calcRandCustHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour);
      console.log(this.randCustHour[i]);
    }
  },
  calcCookiesSoldHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldHour.push(Math.round(this.aveCookieSoldHour * this.randCustHour[j]));
      console.log(this.cookiesSoldHour[j]);
    }
  },
  render: function() {
    var caphill = document.getElementById('caphill');
    var capitolhill = document.getElementById('capitolhill');
    this.calcCookiesSoldHour();
    this.calcRandCustHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    caphill.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldHour[k] + ' cookies';
      console.log(liEl);
      capitolhill.appendChild(liEl);
    }
  }
};
var alki = {
  name: 'Alki',
  minCustHour: 2,
  maxCustHour: 16,
  aveCookieSoldHour: 4.6,
  randCustHour: [],
  cookiesSoldHour: [],
  totalCookies: 0,

  calcRandCustHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour);
      console.log(this.randCustHour[i]);
    }
  },
  calcCookiesSoldHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldHour.push(Math.round(this.aveCookieSoldHour * this.randCustHour[j]));
      console.log(this.cookiesSoldHour[j]);
    }
  },
  render: function() {
    var alki = document.getElementById('alki');
    var alki2 = document.getElementById('alki2');
    this.calcCookiesSoldHour();
    this.calcRandCustHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    alki.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldHour[k] + ' cookies';
      console.log(liEl);
      alki2.appendChild(liEl);
    }
  }
};

firstAndPike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();
*/
