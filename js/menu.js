function checkMenuBtn() {
    let navMenuElement = document.getElementById('menu');
    let classListOfElement = navMenuElement.classList;
    let shadowElement = document.getElementById('shadowAnimation');

    if (classListOfElement.contains('hidden')) {
        shadowElement.endElement();
    } else {
        shadowElement.beginElement();
    }
}