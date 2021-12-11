window.onload = () => {
    const contenedor = $("#loader")[0];
    contenedor.style.visibility = 'hidden';
}

$(document).ready(() => {
    $.fx.speeds.xslow = 2300;
    $("#body-animation").fadeIn("xslow");
})

