function Person (currentYear, currentSavings, currentInterest, targetYear){
  this.currentYear = currentYear;
  this.currentSavings = currentSavings;
  this.currentInterest = currentInterest;
  this.targetYear = targetYear;
  this.array = [];
  this.yearsLeft = function(){
    return this.targetYear - this.currentYear;
  };
  this.money = function(){
    if (this.yearsLeft() <= 0){
      alert('Current Year must be before Target Year!');
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
  var currentSavings = parseInt(document.getElementById('currentSavings').value);
  var currentInterest = parseInt(document.getElementById('currentInterest').value);
  var targetYear = parseInt(document.getElementById('targetYear').value);
  var test = new Person(currentYear, currentSavings, currentInterest, targetYear);
  var data = test.money();
  var x = d3.scale.linear() //function that maps values to pixel measurements
  .domain([0, d3.max(data)])
  .range([0, 200]);

  d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  .style("height", function(d) { return x(d) + "px"; })
  .text(function(d) { return d; });
  return false;
};
