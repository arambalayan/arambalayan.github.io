$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
function hover(element) {
    element.setAttribute('src', '../img/connect.png');
}

function unhover(element) {
    element.setAttribute('src', '../img/connect1.png');
}