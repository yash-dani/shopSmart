 var url = location.href; 


if (url.includes("www.amazon.ca")){
    if (url.includes("gp/cart")){
        chrome.runtime.sendMessage({
            action: 'updateIcon',
            value: 0
        });
    } 
    else if (url.includes("gp/product") || url.includes("dp")) {

    //disable buy now

        document.getElementById("buy-now-button").disabled = true;
        document.getElementById("buy-now-button").style.cursor = "auto";
        document.getElementById("submit.buy-now").getElementsByTagName('span')[0].style.background = "#565656";
        document.getElementById("submit.buy-now").classList.remove("a-button-oneclick");
        document.getElementById("submit.buy-now-announce").innerHTML = 'Buy Now (Disabled)';

        var unique_code = document.getElementById('amsDetailRightV2').getAttribute('data-detailpageasin');
        if(confirm("Do you want to check the history prices of this item?")){
            window.open(
                `https://ca.camelcamelcamel.com/product/${unique_code}`,
                '_blank'
              )
           
         }else {//do nothing. This will fire if cancel is clicked.}
        } }
    else if (url.includes("gp/buy/spc")) {
        var response = prompt("Enter 'This is not an impulse purchase'"); 
        if (response ==="This is not an impulse purchase" ){
            alert("Please preceed to place order"); 
        } else {
            window.open(
                'https://www.amazon.ca/gp/cart/view.html?ref_=nav_cart',
                "_self"
              )
        }
    } else {
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



