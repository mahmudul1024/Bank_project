// Fetch from withdwa input
document.getElementById('withdraw_btn').addEventListener('click', function(){
    const withdraw_input_obj =document.getElementById('withdraw_input')
    const withdraw_data= parseFloat(withdraw_input_obj.value)

    //check for the emptiness
if(isNaN(withdraw_data)){
    alert("Enter the Amount Please! ! !")
    return
}
    
//condition for less amount
// copied data from the balace and little change on name

const balace_ob=document.getElementById('balance_text')
const balace_dat=parseFloat(balace_ob.innerText) //convert text to float



if(withdraw_data> balace_dat){
alert("You dont have sufficient balace to withdraw")
withdraw_input_obj.value=' '

return

}

    //clear the input area
    withdraw_input_obj.value=' '

// set withdrawn data to withdraw text 
const withdraw_text_obj=document.getElementById('withdraw_text')
const withdraw_text_data=parseFloat(withdraw_text_obj.innerText)

//add two withdwal and then set
const withdraw_result=withdraw_data+withdraw_text_data
withdraw_text_obj.innerText=withdraw_result



//Now calculate the balance part which is a text
//fetch the balace id
const balace_obj=document.getElementById('balance_text')
const balace_data=parseFloat(balace_obj.innerText) //convert text to float

const balace_total=balace_data-withdraw_result
//finally set the result to the balance text
balace_obj.innerText=balace_total

})


