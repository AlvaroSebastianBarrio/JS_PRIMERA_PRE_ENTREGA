//Definicion de variables
let capital = parseInt(prompt("ingrese el Capital a invertir"));
let tasa = (parseFloat(prompt("ingrese la Tasa de interes Mensual")))*(1/100);
let meses = parseInt(prompt("ingrese la Cantidad de Meses"));

CalcularCuota(capital,tasa,meses)

function CalcularCuota(capital,interes,tiempo){
    cuota = capital*((Math.pow(1+interes,tiempo))*interes)/((Math.pow(1+interes,tiempo))-1);
   

    for(let i=1; i<= tiempo; i++){
        pagoIntereses = parseFloat(capital*interes);
        PagoCapital = cuota - pagoIntereses;
        capital = parseFloat(capital - PagoCapital);

        document.write("--------------------------------------------------"+ "<br>"); 
        document.write("PAGO: "+i +"<br>");
        document.write("--------------------------------------------------"+ "<br>"); 
        document.write("Cuota "+i +" es de "+cuota.toFixed(2) +"<br>");
        document.write("--------------------------------------------------"+ "<br>");       
        document.write("Capital es de " +PagoCapital.toFixed(2) +"<br>");
        document.write("--------------------------------------------------"+ "<br>");     
        document.write("Interes es de "+pagoIntereses.toFixed(2) +"<br>"); 
        document.write("--------------------------------------------------"+ "<br>"); 
        document.write("El Total Adeudado es de "+capital.toFixed(2)+ "<br>");    
        document.write("--------------------------------------------------"+ "<br>");    
       
            
        
    }

}

    
    