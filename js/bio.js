function(){
    let bio = $('#bio');
    let bioCounter = $('#bio-count');

    // Visa counter när fältet är i fokus och uppdatera spann enligt antal char som är kvar
    function updateCounter(){
        bio.on('focus', updateCounter);
        bio.on('keyup', updateCounter);

        // När vi lämnar textarea så gömmer vi counter, ifall det inte är för många tecken
        bio.on('blur', function(){
            if(bioCounter.text() >= 0){
                bioCounter.addClass('hide');
            };
        });

        function updateCounter(){
            let count = 140 - bio.val().length;
            let status = '';
            if (count < 0) {
                status = 'error';
            } else if (count <= 15) {
                status = 'warn';
            } else{
                status = 'good';
            }

            // Ta bort hide eller annan klass
            bioCounter.removeClass('hide error warn good');

            // Lägg till ny klass på bioCounter
            bioCounter.addClass(status);
        }
    }
}