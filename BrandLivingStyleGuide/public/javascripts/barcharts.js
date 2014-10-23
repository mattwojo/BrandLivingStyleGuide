function Person (currentYear, currentSavings, currentInterest, targetYear){
  this.currentYear = currentYear;
  this.currentSavings = currentSavings;
  this.currentInterest = currentInterest;
  this.targetYear = targetYear;
  this.array = [];
  this.yearsLeft = function(){
    return this.targetYear - this.currentYear;
  };
  this.moneyAttargetYear = function(){
    if (this.yearsLeft() <= 0){
      alert('You are retired!');
    }
    else {
      for (i = 0; i < this.yearsLeft(); i++){
        this.currentSavings += this.currentSavings * this.currentInterest/100;
        this.array[i] = this.currentSavings.toFixed(2);
      }
      return this.array;
    }
  };
}

document.getElementById('submit').onclick = function() {
  var currentYear = parseInt(document.getElementById('currentYear').value);
  var currentSavings = parseInt(document.getElementById('total-currentSavings').value);
  var currentInterest = parseInt(document.getElementById('currentInterest-rate').value);
  var targetYear = parseInt(document.getElementById('targetYear').value);
  var test = new Person(currentYear, currentSavings, currentInterest, targetYear);
  var data = test.moneyAttargetYear();
  alert("ALERT!");
  var x = d3.scale.linear() //function that maps values to pixel measurements
  .domain([0, d3.max(data)])
  .range([0, 420]);

  d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  .style("height", function(d) { return x(d) + "px"; })
  .text(function(d) { return d; });
  return false;
};
