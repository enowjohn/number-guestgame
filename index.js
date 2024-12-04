const checkbox = document.getElementById('checkbox');
const visabtn = document.getElementById('visabtn');
const mastercardbtn = document.getElementById('mastercardbtn');
const paypalbtn = document.getElementById('paypalbtn');
const btn = document.getElementById('btn');
const subresult = document.getElementById('subresult');
const payresult = document.getElementById('payresult');

btn.addEventListener('click', function () {
    if (checkbox.checked) {
        subresult.innerHTML = "you are subscribed"
    } else {
        subresult.innerHTML = "you are not subscribed"
    }

    if(visabtn.checked) {
        payresult.innerHTML = "you are paying with visa"
    } else if(mastercardbtn.checked) {
        payresult.innerHTML = "you are paying with mastercard"
    }else if(paypalbtn.checked) {
        payresult.innerHTML = "you are paying with paypal"
    }else {
        payresult.innerHTML = "you are not paying"
    }
})