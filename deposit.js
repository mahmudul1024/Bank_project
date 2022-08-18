//fetch data from deposit input text area

document.getElementById('deposit_btn').addEventListener('click', function(){
const deposit_input_obj=document.getElementById('deposit_input')
const deposit_data=parseFloat(deposit_input_obj.value)

   //check for the emptiness
   if(isNaN(deposit_data)){
    alert("Enter the Amount Please! ! !")
    return
}

//clear just after the
deposit_input_obj.value=' '


//set deposit data  to deposit text 

const deposit_text_obj=document.getElementById('deposit_text')
const deposit_text_data=parseFloat(deposit_text_obj.innerText) //text data to float
// deposit_text_obj.innerText=deposit_data

// add two diposited data and then set
const text_data=deposit_text_data+ deposit_data
deposit_text_obj.innerText=text_data




//Now calculate the balance part which is a text
//fetch the balace id
const balace_obj=document.getElementById('balance_text')
const balace_data=parseFloat(balace_obj.innerText) //convert text to float

const balace_total=balace_data+deposit_data
//finally set the result to the balance text
balace_obj.innerText=balace_total

})



