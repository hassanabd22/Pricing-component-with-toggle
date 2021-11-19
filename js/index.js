let checkBox = document.getElementById('checkbox');
let  priceMaster = document.getElementById('price-m');
let  pricePro = document.getElementById('price-p');
let  priceBasic = document.getElementById('price-b');

checkBox.onchange = () => {
    if(checkBox.checked) {
        priceMaster.textContent = '$39.99';
        pricePro.textContent = '$24.99';
        priceBasic.textContent = '$19.99';
    } else {
        priceMaster.textContent = '$399.99';
        pricePro.textContent = '$249.99';
        priceBasic.textContent = '$199.99';
    }
}


