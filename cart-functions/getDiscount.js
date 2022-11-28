
export const getDiscount = () => {
    let discountTotal = document.getElementById("discountTotal");
    //Get values from each Radio question
    var member = $("input[name=Member]:checked").val(); // gets the value from the radio (true/false)
    var veteran = $("input[name=Veteran]:checked").val(); // gets the value from the radio (true/false)
    var employee = $("input[name=Employee]:checked").val();// gets the value from the radio (true/false)
    let discount = 0;
    if (member && veteran && employee)// While all radio buttons are checked:
    {
        if (member == 'true') {
            discount += 3 // 3% discount if a member   
        }
        if (veteran == 'true') {
            discount += 3 // 3% discount if a veteran   
        }
        if (employee == 'true') {
            discount += 3 // 3% discount if an Employee 
        }
        discountTotal.innerHTML = `${discount}%`;
    }
    else {
        document.getElementById("quizOutput").innerHTML = "Please answer all questions.";
    }

}
