window.onload = function() {
    var handwriting = document.getElementById('handwriting');
    handwriting.style.fontFamily = this.getRandomHandwriting();
    console.log("Handwriting: " + handwriting.style.fontFamily);

    var sansserif = document.getElementById('sansserif');
    sansserif.style.fontFamily = this.getRandomSansSerif();
    console.log("Sans Serif: " + sansserif.style.fontFamily);

    var serif = document.getElementById('serif');
    serif.style.fontFamily = this.getRandomSerif();
    console.log("Serif: " + serif.style.fontFamily);
};

function calculate() {
    // Get values from inputs
    var paycheck = document.getElementById('paycheck').value;
    var freq = getFrequencyValue();
    var bills = document.getElementById('bills').value;
    var savings = document.getElementById('savings').value.replace('%', '');
    
    console.log("Paycheck: " + paycheck);
    console.log("Frequency: " + freq);
    console.log("Bills: " + bills);
    console.log("Savings: " + savings);
      
    // Calculate total monthly income based on how often paycheck is received
    var monthlyTotalIncome = setMonthlyTotalIncome(paycheck, freq);
    
    // Calculate amount to put towards bills per paycheck
    var billAmtPerPaycheck = bills / freq;
    console.log("Bill Amt Per Paycheck: " + billAmtPerPaycheck);
    
    // Calculate amount to put towards savings
    var savingsAmtPerPaycheck = paycheck * savings / 100;
    console.log("Savings Amt Per Paycheck: " + savingsAmtPerPaycheck);
    
    // Calculate remaining amount per paycheck for spending
    var spendingAmtPerPaycheck = paycheck - billAmtPerPaycheck - savingsAmtPerPaycheck;
    console.log("Spending Amt Per Paycheck: " + spendingAmtPerPaycheck);
    
    document.getElementById('remaining').innerHTML = '$' + spendingAmtPerPaycheck;
}
  
function getFrequencyValue() {
    var freq = document.getElementsByName('freq');
    var freq_value;
    for(var i = 0; i < freq.length; i++){
        if(freq[i].checked){
            freq_value = freq[i].value;
        }
    }
    
    return freq_value;
}
  
function setMonthlyTotalIncome(paycheck, freq) {
    var monthlyTotalIncome = 0;
    
    switch (freq) {
      case '1':
        monthlyTotalIncome = paycheck * freq;
        break;
      case '2':
        monthlyTotalIncome = paycheck * freq;
        break;
      default:
        alert('Please select Paycheck Frequency');
    }
    
    console.log("Monthly Total Income:" + monthlyTotalIncome);
    
    return monthlyTotalIncome;
}

function getRandomHandwriting() {
    var handwritingFonts = ['Rock Salt, cursive'];
    return handwritingFonts[Math.floor(Math.random() * handwritingFonts.length)];
}

function getRandomSansSerif() {
    var sansSerifFonts = ['Raleway'];
    return sansSerifFonts[Math.floor(Math.random() * sansSerifFonts.length)];
}

function getRandomSerif() {
    var serifFonts = ['Convergence'];
    return serifFonts[Math.floor(Math.random() * serifFonts.length)];
}