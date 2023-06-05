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
    document.addEventListener("mousemove", function(event) {
      var grass = document.getElementById("grass");
      var posX = event.clientX / window.innerWidth;
      var posY = event.clientY / window.innerHeight;
      grass.style.backgroundPositionX = posX * 50 + "%";
      grass.style.backgroundPositionY = posY * 50 + "%";
    });
       
// Add event listeners to the profit and break-even buttons
document.getElementById("profit-button").addEventListener("click", addShakeEffect);
document.getElementById("break-even-button").addEventListener("click", addShakeEffect);

// Function to add the shake effect to the website
function addShakeEffect() {
  var elements = document.getElementsByClassName("shake-effect");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("shake");
    setTimeout(function() {
      elements[i].classList.remove("shake");
    }, 500);
  }
}



function calculateCashFlow() {
    var revenue = parseFloat(document.getElementById('revenue').value);
    var fixedCosts = parseFloat(document.getElementById('fixed-costs').value);
    var variableCosts = parseFloat(document.getElementById('variable-costs').value);
    var sellingPrice = parseFloat(document.getElementById('selling-price').value);
  
    // Input validation
    if (isNaN(revenue) || isNaN(fixedCosts) || isNaN(variableCosts) || isNaN(sellingPrice)) {
      alert('Please enter valid numeric values.');
      return;
    }
  
    var profit = revenue - fixedCosts - (variableCosts * sellingPrice);

    // Store the calculated profit and break-even values in variables
  
    document.getElementById('profit').textContent = profit.toFixed(2);
  }
  
  function calculateBreakEven() {
    var fixedCosts = parseFloat(document.getElementById('fixed-costs').value);
    var variableCosts = parseFloat(document.getElementById('variable-costs').value);
    var sellingPrice = parseFloat(document.getElementById('selling-price').value);
  
    // Input validation
    if (isNaN(fixedCosts) || isNaN(variableCosts) || isNaN(sellingPrice)) {
      alert('Please enter valid numeric values.');
      return;
    }
  
    if (variableCosts >= sellingPrice) {
      alert('Variable costs should be less than the selling price for a break-even point.');
      return;
    }
  
    var breakEvenQuantity = Math.ceil(fixedCosts / (sellingPrice - variableCosts));
  
    document.getElementById('break-even-quantity').textContent = breakEvenQuantity;
  }
  

  