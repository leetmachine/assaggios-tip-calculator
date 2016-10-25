'use strict';

//Calculate Tips and Claims
var calculateTips = function() {
  var serverResults = document.getElementById("serverResults");
  var backwaiterResults = document.getElementById("backwaiterResults");
  var busserResults = document.getElementById("busserResults");
  var hostResults = document.getElementById("hostResults");
  var barResults = document.getElementById("barResults");

  var cash = Number(document.getElementById("cashTips").value);
  var credit = Number(document.getElementById('creditTips').value);
  var totalTips = cash + credit;
  var point = 0;
  var claim = 0;

  var totalSales = Number(document.getElementById('totalSales').value);
  if(credit < (totalSales*.10)) {
    claim = totalSales*.10;
  } else {
    claim = credit;
  }


  //claim values
  var barTips = Number(document.getElementById('barTips').value);
  var takeout = Number(document.getElementById('takeoutTips').value);

  if(barBool) {
    console.log(totalTips);
    var barValue = Math.floor(totalTips*.05);
    var barClaim = Math.floor(credit*.05) + barTips;
    barResults.innerHTML = "bar made " + barValue + " and claimed " + barClaim;
    totalTips -= barValue;
    credit -= barClaim;
  }

  //calculate tips and update fields
  point = doTips(totalTips);
  claim = doTips(credit);
  console.log(NoOfHosts);
  serverResults.innerHTML = "servers made " + point+ " and claimed " + claim;
  backwaiterResults.innerHTML = "backwaiter made " + Math.floor(point*.75) +
                                " and claimed " + Math.ceil(claim*.75);
  if(NoOfHosts != 0) {
    hostResults.innerHTML = "host made " + Math.floor(point*.10) +
                            " and claimed " + Math.ceil((claim*.10) + (takeout/NoOfHosts));
  }

  if(NoOfbussers != 0) {
    busserResults.innerHTML = "busser(s) made " + Math.floor(point*(adjuster/100/NoOfbussers)) +
                              " and claimed " + Math.ceil(claim*(adjuster/100/NoOfbussers));
  }

}

//returns the point value to divide into each position
//staffWeight must be divided by 100
var doTips = function(tips) {
  var point = 0;
  point = Math.floor(tips/(staffWeight/100));
  return point;

};
