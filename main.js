let sum = 0;
function toAddExpense(name , amount){
    return `<tr>
    <td>${name}</td>
    <td>${amount}</td>
    <td><a id="delet-btn" href="#"><i class="fa-solid fa-trash" style="color: #27374D;"></i></a></td>
    </tr>`
}

function addExpense(){
    let expenseName = $("#expense-name");
    let expenseAmount = $("#expense-amount");

    if(expenseName.val().trim() === "" || expenseAmount.val().trim() === ""){
        $("#error-span").css("display" , "inline")
        return;
    }else{
        $("#error-span").css("inline" , "display")
    }

    const todorow = $(toAddExpense(expenseName.val(), expenseAmount.val()))

    $("#title").after(todorow);

    sum = Number($("#expense-sum").text());
    sum += Number(expenseAmount.val());
    $("#expense-sum").text(sum);

    expenseName.val("")
    expenseAmount.val("")
}

$(document).ready(function(){
    $(".add-btn").click(function(){
        addExpense();
    })
    

    $("#delet-btn").click(function(){
        const todeleterow = $(toAddExpense(expenseName.val(), expenseAmount.val()))
        todeleterow.remove()
    })
})