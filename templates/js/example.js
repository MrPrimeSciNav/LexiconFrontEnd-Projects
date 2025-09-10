let noteName, noteInput, textEntered, target;

noteName = document.getElementByID("noteName");
noteInput = document.getElementByID("noteInput");

noteInput.addEventListener("input", writeLabel);

function writeLabel(event) {
    target = event.target;
    textEntered = target.value;

    noteName.textContent = textEntered;
}

function recorderControls(e) {
    // Get element
    target = e.target;
    // Check value of data-state and decide what will happen
    switch (target.getAttribute("data-state")) {
        case "record":
            record(target);
            break;
        case "stop":
            stop(target);
            break;
    }
}

function record(target) {

}

function writeLabel(event) {
    target = event.target;
    textEntered = target.value;

    noteName.textContent = textEntered;
}

function recorderControls(e) {
    // Get element
    target = e.target;
    // Prevent default action of event
    if (e.preventDefault) {
        e.preventDefault();
    }
    else {
        e.returnValue = false;
    }

    // Check value of data-state and decide what will happen
    switch (target.getAttribute("data-state")) {
        case "record":
            record(target);
            break;
        case "stop":
            stop(target);
            break;
    }
}

function record(target) {
    target.setAttribute("data-state", "stop");
    target.textContent = "stop";
    console.log("Recording started");
}

function stop(target) {
    target.setAttribute("data-state", "record");
    target.textContent = "record";
    console.log("Recording stopped");
}

document.addEventListerner("click", function (e) {
    recorderControls(e)
});

noteInput.addEventListener("input", writeLabel);
