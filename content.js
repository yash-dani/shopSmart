alert("ShopSmart");

// disable buy now
document.getElementById("buy-now-button").disabled = true;
document.getElementById("buy-now-button").style.cursor = "auto";
document.getElementById("submit.buy-now").getElementsByTagName('span')[0].style.background = "#565656";
document.getElementById("submit.buy-now").classList.remove("a-button-oneclick");
document.getElementById("submit.buy-now-announce").innerHTML = 'Buy Now (Disabled)';
