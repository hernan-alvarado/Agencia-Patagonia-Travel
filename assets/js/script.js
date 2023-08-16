
const agregarLugarTrekking = document.getElementById("trekking");
agregarLugarTrekking.addEventListener("click", mostrarlugarTrekking);


function mostrarlugarTrekking() {
    document.getElementById("agregarubicacionTrekking").textContent= "Trekking en el Volcán Villarica (Regiones Araucanía y Los Ríos).";
};


const agregarLugarNatacion = document.getElementById("natacion");
agregarLugarNatacion.addEventListener("click", mostrarlugarNatacion);

function mostrarlugarNatacion() {
    document.getElementById("agregarubicacionNatacion").innerHTML= "Natación en el Lago Cochrane (Región de Aysén).";
};


const agregarLugarFerry = document.getElementById("ferry");
agregarLugarFerry.addEventListener("click", mostrarLugarFerry);

function mostrarLugarFerry() {
    document.getElementById("agregarubicacionFerry").innerHTML= "Ferry en el Lago Llanquihue (Región de Los Lagos).";
};
