
    doSum = () => {
    let budget = document.getElementById("budget").value;
    let price = 9.48;
    let affordability = Math.round(budget / price);
    document.getElementById("answer").innerHTML =  "You can afford " + affordability + " domains per year assuming a cost of $9.48 per domain";
    };
    
