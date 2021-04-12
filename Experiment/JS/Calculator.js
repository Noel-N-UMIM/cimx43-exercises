function CalcDayRate(){

    // Find the values from the input fields// 
    
    let salary = parseFloat(0)+document.getElementById('salary').value;
    let expenses = parseFloat(0)+document.getElementById('expenses').value;
    
    
    let a = parseFloat(salary)+parseFloat(expenses);
    let dayRate=(a/260).toFixed(2);
    dayRate = dayRate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //this adds a comma for the thousands, between every 3 digits in the string//
    document.getElementById('day_Rate').innerHTML = "= $"+""+ dayRate;
    let days = parseFloat(0)+document.getElementById('days').value;
   
//    -------Pricing the Job-------
    let jobPrice=(days*dayRate).toFixed(2);
    jobPrice = jobPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('job_Price').innerHTML= "= $"+""+ jobPrice;

    // if (document.getElementById('day_Rate').innerHTML == NaN){
    //     document.getElementById('day_Rate').innerHTML=0;
    // }
}

function CalcJobPrice(){

    let days = document.getElementById('days').value;

    let jobPrice=(days*dayRate).toFixed(2);
    jobPrice = jobPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('job_Price').innerHTML= "= $"+""+ jobPrice;
}
function computeLoan(){
    var amount = document.getElementById('amount').value;
    var interest_rate=document.getElementById('interest_rate').value;
    var months = document.getElementById('months').value;
    var interest = (amount*(interest_rate*.01)) / months;
    var payment = ((amount / months)+ interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
  }