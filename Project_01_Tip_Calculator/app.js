let billInput = document.querySelector("#bill_input");
let tipInput = document.querySelector("#tip_input");
let calculateBtn = document.querySelector("#calculate_btn");
let totalSpan = document.querySelector("#total_span");

const calculateTotal = () => {
     const totalValue = billInput.value * (1 + tipInput.value/100);
       totalSpan.innerHTML = `<b>${totalValue.toFixed(2)}<b>`;
}

calculateBtn.addEventListener("click", calculateTotal);