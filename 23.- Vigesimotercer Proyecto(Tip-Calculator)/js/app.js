function calculate(){
    const totalBill = document.querySelector('.totalbill').value;
    const tip = document.getElementById('dropdown').value;
    const split = document.querySelector('.split').value;
    const bill = (split === '') ? (totalBill * (tip/100)) : ((totalBill * (tip/100))/split);
    document.getElementById("result").innerHTML = bill.toFixed(2)+"&euro;";
}