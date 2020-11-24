export default {




    
    formatCurrency: function(num) {
    return "$" +  Number(num.toFixed(2)).toLocaleString('en', {maximumFractionDigits: 0})
}

}