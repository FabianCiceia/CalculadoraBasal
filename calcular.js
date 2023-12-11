const BOTON = document.getElementById('sumarBoton');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const ENTRADA = document.getElementById('pesoInput');
const ERROR = document.getElementById('mensajeError')

BOTON.addEventListener('click',calcularPeso);

ENTRADA.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcularPeso();
    }
  });

function calcularPeso(){
   
    const pesoObtenido = parseInt(ENTRADA.value);

    let volumen ;
    let mantenimiento;
    let mm;

    if((isNaN(pesoObtenido)) || pesoObtenido == 0){
         ERROR.style.display = 'block';
         MAN.innerHTML = null;
         FLU.innerHTML = null;
         return;
        
    }
    if( pesoObtenido <= 10){
        volumen  = (pesoObtenido*100);
    }else if( pesoObtenido <= 20 ){
        volumen  = ( 10 * 100 + (pesoObtenido - 10) * 50 );
    }else if( pesoObtenido <= 30 ){
        volumen  = ( 10 * 100 + 10 * 50 + (pesoObtenido - 20 ) * 20 );
    }else {
        volumen  = ( ((pesoObtenido * 4) + 7) / (pesoObtenido + 90)*1500 );
    }
    
    mantenimiento = (volumen/24);
    mm = (mantenimiento*1.5);
    MAN.innerHTML = ` ${mantenimiento.toFixed(2)} cc/hr `;
    FLU.innerHTML = `m+m/2 ${mm.toFixed(2)} cc/hr `
    ERROR.style.display = null;
    
}