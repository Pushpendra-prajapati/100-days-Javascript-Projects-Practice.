let billAmount = document.querySelector("#bill_amount");
let tipPercentage = document.querySelector("#tipPercentage");
let calculateBtn = document.querySelector("#calculate_btn");
let totalAmount = document.querySelector("#total_amount");

const calculateTotal = () => {
     const totalValue = billAmount.value * (1 + tipPercentage.value/100);
       totalAmount.innerHTML = totalValue.toFixed(2);
}

calculateBtn.addEventListener("click", calculateTotal);