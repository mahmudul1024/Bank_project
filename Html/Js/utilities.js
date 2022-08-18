
// function for input ---value
function getInputValueById(inputId){
    const input_object=document.getElementById(inputId)
    const converted_data=parseFloat(input_object.value)
    
    //clear just after the
    input_object.value=' '
    
    return converted_data
    
    }
    ///////////////////////////////////////////////
    // function for text  ---innerText
    function getTextValueById(inputId){
        const input_object=document.getElementById(inputId)
        const converted_data=parseFloat(input_object.innerText)
        return converted_data
        
        }
    
    
    
    
    ////////////////////////////////////////////////
    // whichid and what
    function setInputData(setId ,Setvalue){
    const setdata =document.getElementById(setId)
    setdata.innerText= Setvalue 
    
    }
    
    //////////////////////////////////////////////end


