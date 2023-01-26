var AI = document.getElementsByClassName("AI");
var PixelArt = document.getElementsByClassName("PixelArt");

function getFilter(filter) {
    var value = filter.value;

    switch(value) {
        case "1":
            toggleFilter(AI, "show");
            toggleFilter(PixelArt, "show");
            break;
        case "2":
            toggleFilter(AI, "show");
            toggleFilter(PixelArt, "hide");
            break;

        case "3":
            toggleFilter(AI, "hide");
            toggleFilter(PixelArt, "show")
    }
}

function toggleFilter(filter, status) {
    if (status == "hide") {
        for (let element of filter) {
            element.style.display = "none";
        }
    }
    else if (status == "show") {
        for (let element of filter) {
            element.style.display = "block";
        }
    }
}