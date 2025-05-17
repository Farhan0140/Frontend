
function cal_tax(bal) {

    let x = bal * (20 / 100);
    return (bal - x);

}


function monthlySavings(arr, t_c) {
    if(Array.isArray(arr)) {

        let total_taka = 0;

        for(let i=0; i<arr.length; i++) {
            if(arr[i] >= 3000) {

                const x = cal_tax(arr[i]);
                total_taka += x;

            } else {

                total_taka += arr[i];

            }
        }

        const main_bal = total_taka - t_c;
        
        if(main_bal < 0) {
            return "Earn More";
        } else {
            return main_bal;
        }

    } else {

        return "Invalid Input";

    }
}



console.log(monthlySavings([1000, 2000, 3000], 5400)); // 0
console.log(monthlySavings([1000, 2000, 2500], 5000)); // 500
console.log(monthlySavings([900, 2700, 3400], 10000)); // Earn More
console.log(monthlySavings(100, [900, 2700, 3400])); // Invalid Input


