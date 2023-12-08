const BOTON = document.getElementById('sumar_boton');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const ENTRADA = document.getElementById('peso');
const ERROR = document.getElementById('mensaje_error')
BOTON.addEventListener('click',calcular_peso);

function calcular_peso(){
    const peso_obtenido = parseInt(ENTRADA.value);
    let volumen ;
    let mantenimiento;
    let mm;

    if(isNaN(peso_obtenido)){
         
        
         ERROR.style.display = 'block';
         MAN.innerHTML = null;
         FLU.innerHTML = null;
    }else{
        if( peso_obtenido <= 10){
            volumen  = (peso_obtenido*100);
        }else if( peso_obtenido <= 20 ){
            volumen  = ( 10 * 100 + (peso_obtenido - 10) * 50 );
        }else if( peso_obtenido <= 30 ){
            volumen  = ( 10 * 100 + 10 * 50 + (peso_obtenido - 20 ) * 20 );
        }else {
            volumen  = ( ((peso_obtenido * 4) + 7) / (peso_obtenido + 90)*1500 );
        }
        mantenimiento = (volumen/24);
        mm = (mantenimiento*1.5);
        MAN.innerHTML = ` ${mantenimiento.toFixed(2)} cc/hr `;
        FLU.innerHTML = `m+m/2 ${mm.toFixed(2)} cc/hr `
        ERROR.style.display = null;
    }   
}