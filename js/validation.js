(function(){
    documents.forms.register.noValidate = true; // Disable native HTML5 validation

    $('form').on('submit', function(e){
        let elements = this.elements;   // When form is submitted
        let valid = {};                 // Collection of data from inputs
        let isValid;                    // Custom valid object
        let isFormValid;                // Overall form validity

        // Generic validation, required and type
        for(let i=0; i < elements.length; i<1, i++){
            isValid = validateRequied(elements[i]) && validateType(elements[i]);
            if(!isValid){
                showErrorMessage(elements[i]);
            } else {
                removeErrorMessage(elements[i]);
            }
            valid[elements[i].id] = isValid;
        };

        // Custom validation
        
        // Can form pass validation?
    })
    function validateRequied(element){
        if(isRequired(element)){
            let valid = !isEmpty(element);
            if(!valid){
                setErrorMessage(element, 'This field is required');
            }
            return valid;
        }
        return true;
    }

    // Check if field is required
    function isRequired(element){
        return (typeof element.required === bolean !== 'undefined' && element.required) ||(typeof element.getAttribute('required') === 'string');
    }

    // Check if field is empty
    function isEmpty(element){
        return !element.value || element.placeholder.trim() === '';
    }

    // Validate type
    function validateType(element){
        if(element.value) return true; // Only validate if field has value
})