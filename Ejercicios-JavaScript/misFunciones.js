/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades de medicion
 * @method conversorunidades
 * @param {string} id - el Id de los inputs metros, pies, yardas o pulgadas.
 * @param {number} valor - el valor de los inputs metros, pies, yardas o pulgadas.
 * @return -
 */

function conversorunidades(id, valor){
    var metro, pulgada, pie, yarda;

    if(isNaN(valor)){
        alert("Se ingresó un valor inválido" +id);
        metro="";
        pulgada="";
        pie="";
        yarda="";
    }else if(id=="metro"){
        metro=valor;
        pulgada=39.3701*valor;
        pie=3.28084*valor;
        yarda=1.09361*valor;
    }else if(id=="pulgada"){
        pulgada=valor;
        metro=0.0254*valor;
        pie=0.0833333*valor;
        yarda=0.0277778*valor;
    }else if(id=="pie"){
        pie = valor;
        metro=0.3047996952*valor;
        pulgada=11.999988*valor;
        yarda=0.333333*valor;
    }else if(id=="yarda"){
        yarda = valor;
        metro=0.9144*valor;
        pulgada=36*valor;
        pie=3*valor;
    }
    document.LasUnidades.unid_metro.value=Math.round(metro*100)/100;
    document.LasUnidades.unid_pulgada.value=Math.round(pulgada*100)/100;
    document.LasUnidades.unid_pie.value=Math.round(pie*100)/100;
    document.LasUnidades.unid_yarda.value=Math.round(yarda*100)/100;
}

/**
 * Convertir a Radianes.
 * @method convertirRadianes
 * @param {string} id - el Id de los inputs metros, pies, yardas o pulgadas.
 * @return -
 */

function convertirRadianes(id) {
    var grados, rad;
    if (id == "grados") {
        grados = document.getElementById("grados").value;
        rad = (grados * Math.PI)/180;

    } else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grados = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grados;
    document.getElementById("radianes").value = rad;
}

/**
 * Mostrar ocultar .
 * @method mostrar_ocultar.
 * @param {string} id - el Id de del div con su estilo.
 * @return -
 */

function mostrar_ocultar(valorM){
    if (valorM=="val_mostrar"){
        document.getElementById("divM").style.display = 'block';
    }else if (valorM=="val_ocultar"){
        document.getElementById("divM").style.display = 'none';
    }
}
function calcularS() {
    var num1, num2;

    num1= document.getElementsByName("sum_num1")[0].value;
    num2= document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML=  Number(num1) + Number(num2);
}

function calcularR() {
    var num1, num2;

    num1= document.getElementsByName("res_num1")[0].value;
    num2= document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML=  Number(num1) - Number(num2);
}

function calcularM() {
    var num1, num2;

    num1= document.getElementsByName("mul_num1")[0].value;
    num2= document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML=  Number(num1) * Number(num2);

}

function calcularD() {
    var num1, num2;

    num1= document.getElementsByName("div_num1")[0].value;
    num2= document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML=  Number(num1) / Number(num2);

}
function CargarWeb() {
    var cant, unidad, urlcomp;

    cant= document.getElementById("distancia").value;
    unidad= document.getElementsByName("unidades")[0].value;
    urlcomp= "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlcomp);
}

function CRes() {
    var urlComp, can, un;

    urlComp = window.location.href;
    can=urlComp.split("#")[1];
    un=urlComp.split("#")[2];

    document.getElementById("dist").value= can + " " + un;
}

function dibujarcirycuadrado() {
    var canvas =document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ymax=canvas.height;
    var xmax=canvas.width;
    var margen= 5;
    ctx.fillStyle = "#49FF33";
    ctx.fillRect(8 + margen , ymax-40-margen, 80,80);

    ctx.arc(xmax/2, ymax/2, 60, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#7D33FF";
    ctx.fill();

}
var bandera;
function dibujarimagen(event) {
    var canvas= document.getElementById("CanvasADibujar")
    var ctx= canvas.getContext("2d");

    var posX= event.clientX;
    var posY= event.clientY;

    canvas.onmousedown = function(){bandera=true};
    canvas.onmouseup = function(){bandera=false};
    if(bandera){
        ctx.fillRect(posX , posY , 5, 5);
        ctx.fill;

    }
}




function dibujarimagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX,posY);
    var img= new Image();
    img.src= "images/auto.png";

    canvas.width=canvas.width;
    img.onload = function(){
        ctx.drawImage(img, posX, posY);
    };
}

