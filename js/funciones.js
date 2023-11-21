let costo;
const dolar = 747.42;
let pesos;
let sp = " ";
let conf = true;

while (conf == true) {
costo = Number(prompt ("INGRESAR EL COSTE DEL JUEGO"));


if (costo > 0) {
    pesos = (dolar * costo);
    alert("El precio en pesos aproximadamente es de" + (sp) + (Math.round (pesos)) + (sp) + "pesos");
}
else{ 
    alert ("El precio que nos proporcionaste es 0 o negativo, ingrese un valor mayor a 0 para utilizar correctamente la calculadora");
};

conf = confirm("¿Quiere calcular otro precio?");

}