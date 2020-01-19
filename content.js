 var url = location.href; 


if (url.includes("amazon.ca")){
    if (url.includes("gp/cart")) {
        chrome.runtime.sendMessage({
            action: 'updateIcon',
            value: 0
        });
    } 
    if (url.includes("gp/product")) {

    //disable buy now

        document.getElementById("buy-now-button").disabled = true;
        document.getElementById("buy-now-button").style.cursor = "auto";
        document.getElementById("submit.buy-now").getElementsByTagName('span')[0].style.background = "#565656";
        document.getElementById("submit.buy-now").classList.remove("a-button-oneclick");
        document.getElementById("submit.buy-now-announce").innerHTML = 'Buy Now (Disabled)';

    }else {
        chrome.runtime.sendMessage({
            action: 'updateIcon',
            value: 1
        });
    }
} else {
    chrome.runtime.sendMessage({
        action: 'updateIcon',
        value: 2
    });
}



