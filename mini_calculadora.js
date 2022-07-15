var day_1 = document.getElementById("Dia_1");
var day_2 = document.getElementById("Dia_2");
var diff_button = document.getElementById("boton_calcular");
var span_diff = document.getElementById("diff_container");

diff_button.onclick=function () {
    let day_1_value = day_1.value;
    let day_2_value = day_2.value;

    let date_1=new Date(day_1_value);
    let date_2=new Date(day_2_value);

    span_diff.textContent = Math.ceil((date_2-date_1) / (1000 * 60 * 60 * 24));
}