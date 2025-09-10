$(document).ready(function () {
    $('#myform').submit(function (event) {
        event.preventDefault();

        // Serialisera data som JSON-format
        var formData = $('#myform').serializeArray();
        let jsonObject = {};
        $.each(formData, function (index, element) {
            jsonObject[element.name] = element.value;
        });
        var jsonData = JSON.stringify(jsonObject);
    });

    let jsonData = JSON.stringify(jsonObject);

    // Spara JSON-data i filen på klient (webbläsare)
    let blob = new Blob([jsonData],
        { type: "application/json;charset=utf-8" });
    saveAs(blob, "form_data.json");

    alert("Form data saved successfully!");

    // Rensa formulär
    $('#myform')[0].reset();
});