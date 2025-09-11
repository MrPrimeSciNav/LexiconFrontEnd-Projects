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
        if(!element.value) return true; // Only validate if field has value

        let type = $element.data('type') || element.getAttribute('type');
        if(typeof validateType[type] === 'function'){
            return validateType[type](element);
        } else {
            return true; // No validation function for type
        }
    }

    // Help functions for type validation
    validateType.email = function(element){
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(String(element.value).toLowerCase());
        if(!valid){
            setErrorMessage(element, 'Please enter a valid email address');
        }
        return valid;
    }

    // Help functions for error messages (SET, SHOW, REMOVE)
    function setErrorMessage(element, message){
        element.dataset.errorMessage = message;
    }  
    function showErrorMessage(element){
        let message = element.dataset.errorMessage || 'Invalid value';
        let $message = $('<span class="error-message" aria-live="polite"></span>').text(message);
        $(element).addClass('error').attr('aria-invalid', 'true');
        if($(element).next('.error-message').length === 0){
            $(element).after($message);
        }
    }
    function removeErrorMessage(element){
        $(element).removeClass('error').removeAttr('aria-invalid');
        $(element).next('.error-message').remove();
    }

    // Object that control types
    let validateType = {
        email: function(element){
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let valid = re.test(String(element.value).toLowerCase());
            if(!valid){
                setErrorMessage(element, 'Please enter a valid email address');
            }
            return valid;
        },
        number: function(element){
            let valid = !isNaN(element.value);
            if(!valid){
                setErrorMessage(element, 'Please enter a valid number');
            }
            return valid;
        },
        date: function(element){
            let timestamp = Date.parse(element.value);
            let valid = !isNaN(timestamp);
            if(!valid){
                setErrorMessage(element, 'Please enter a valid date');
            }
            return valid;
        }
    };
})