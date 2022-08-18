document.getElementById('deposit_btn').addEventListener('click', function(){

const deposit_data=getInputValueById('deposit_input')

  //check for the emptiness
  if(isNaN(deposit_data)){
    alert("Enter the Amount Please! ! !")
    return
}

//set deposit data  to deposit text 
const deposit_text=getTextValueById('deposit_text')
// add two diposited data and then set
const addSetData=deposit_text+deposit_data
console.log('total deposit data : ', addSetData)
//set 
setInputData('deposit_text', addSetData)



//Now calculate the balance part which is a text
//fetch the balace id
const balace_data=getTextValueById('balance_text') //previos balance float data
const balanceTotal=balace_data+deposit_data           
setInputData('balance_text',balanceTotal)

})

