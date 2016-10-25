'use strict';

var staffWeight = 0;
var busserWeight = 0;
var adjuster = 0.0
var barBool = false;
var NoOfbussers = 0;
var NoOfHosts = 0;

var serverClass = document.getElementsByClassName("server");
var backwaiterClass = document.getElementsByClassName("backwaiter");
var busserClass = document.getElementsByClassName("busser");
var hostClass = document.getElementsByClassName("host");
var bar = document.getElementById("bar");
var weightText = document.getElementById("weight");
var calculate = document.getElementById("calculate");
var cash = document.getElementById("cashTips").value;

//increments staffweight based on server button toggled.
var serverClicked = function(){
  if(this.classList.contains("buttonActive")) {
    staffWeight -= 100;
  } else {
    staffWeight += 100;
  }
  this.classList.toggle("buttonActive");
  setWeightText();
};

//increments staffweight based on backwaiter button toggled.
var backwaiterClicked = function(){
  if(this.classList.contains("buttonActive")) {
    staffWeight -= 75;
  } else {
    staffWeight += 75;
  }
  this.classList.toggle("buttonActive");
  setWeightText();
};

//increments staffweight for host button toggled.
var hostClicked = function() {
  if(this.classList.contains("buttonActive")) {
    staffWeight -= 10;
    NoOfHosts--;
  } else {
    staffWeight += 10;
    NoOfHosts++;
  }
  setWeightText();
  this.classList.toggle("buttonActive");
};

//increment staffweight if busser is clicked
//bussers possess different payouts therefore each button has a class value of 1, 2 or 4.
var busserClicked = function() {
  if(this.classList.contains("1")) {
    if(this.classList.contains("buttonActive")) {
      busserWeight -= 1;
    } else {
      busserWeight += 1;
    }
  }
  if(this.classList.contains("2")) {
    if(this.classList.contains("buttonActive")) {
      busserWeight -= 2;
    } else {
      busserWeight += 2;
    }
  }
  if(this.classList.contains("4")) {
    if(this.classList.contains("buttonActive")) {
      busserWeight -= 4;
    } else {
      busserWeight += 4;
    }
  }
  adjustForBus();
  setWeightText();
  this.classList.toggle("buttonActive");
};


//adjusts staffWeight for Busser Combinations
var adjustForBus = function() {
  staffWeight -= adjuster;
  switch(busserWeight) {
    case 0:
      adjuster = 0;
      NoOfbussers = 0;
      break;
    case 1:
      adjuster = 75;
      staffWeight += adjuster;
      NoOfbussers = 1;
      break;
    case 2:
      adjuster = 60;
      staffWeight += adjuster;
      NoOfbussers = 1;
      break;
    case 3:
      adjuster = 100;
      staffWeight += adjuster;
      NoOfbussers = 2;
      break;
    case 4:
      adjuster = 60;
      staffWeight += adjuster;
      NoOfbussers = 1;
      break;
    case 5:
      adjuster = 100;
      staffWeight += adjuster;
      NoOfbussers = 2;
      break;
    case 6:
      adjuster = 100;
      staffWeight += adjuster;
      NoOfbussers = 2;
      break;
    case 7:
      adjuster = 150;
      staffWeight += adjuster;
      NoOfbussers = 3;
      break;
  }
}

var barClicked = function() {
  if(this.classList.contains("buttonActive")) {
    barBool = false;
  } else {
    barBool = true;
  }

  this.classList.toggle("buttonActive");
  console.log(barBool);
}

var calculateClicked = function() {
  calculateTips();
};

//set button onClickListeners
for(var i = 0; i < serverClass.length; i++) {
  serverClass[i].addEventListener('click', serverClicked, false);
}

for(var i = 0; i < hostClass.length; i++) {
  hostClass[i].addEventListener('click', hostClicked, false);
}

backwaiterClass[0].addEventListener('click', backwaiterClicked, false);

for(var i = 0; i < busserClass.length; i++) {
  busserClass[i].addEventListener('click', busserClicked, false);
}

bar.addEventListener('click', barClicked, false);
calculate.addEventListener('click', calculateClicked, false);


//adjusts staffWeightText on UI for Live Display on changes.
var setWeightText = function() {
  weightText.innerText = "Staff Weight is " + staffWeight/100;
};
