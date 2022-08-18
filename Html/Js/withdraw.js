document.getElementById('withdraw_btn').addEventListener('click', function(){
    const withdraw_input=getInputValueById('withdraw_input') //// present data withdraw

      //check for the emptiness
  if(isNaN(withdraw_input)){
    alert("Enter the Amount Please! ! !")
    return
}

const balace_ob=getTextValueById('balance_text')

if(withdraw_input> balace_ob){
    alert("You dont have sufficient balace to withdraw")

    return
    
    }

    // set withdrawn data to withdraw text 

const withdraw_text_obj=getTextValueById('withdraw_text') // previous data withdraw

//add two withdwal and then set

const withdraw_result=withdraw_input+ withdraw_text_obj
setInputData('withdraw_text',withdraw_result )


const balance_text= getTextValueById('balance_text')
const TotalBalance=balance_text- withdraw_input
setInputData('balance_text' ,TotalBalance)



})
