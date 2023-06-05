document.getElementById("calculatorForm").addEventListener("submit", function(event) {
event.preventDefault(); // Prevent form submission

  var form = new FormData(event.target);

  fetch('/calculate', {
    method: 'POST',
    body: form
  })
  .then(response => response.json())
  .then(data => {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "Profit: $" + data.profit.toFixed(2) + "<br>";
    resultsDiv.innerHTML += "Break-Even Quantity: " + data.break_even_quantity;
  });
});
