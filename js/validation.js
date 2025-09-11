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
})
})