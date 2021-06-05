
const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (numero = 5 , listado , maximo) => {
    console.clear();

    try {
        
        console.clear();
        console.log('============================'.green)
        console.log(`   Tabla del ${numero}`.magenta)
        console.log(`  Se multiplico ${maximo}`.magenta)
        console.log('')

        let salida = ''; 
    
        for (let i = 1; i <= maximo; i++) {
    
            salida += (`    ${numero} ${colors.yellow('x')} ${i} = ${colors.underline.yellow(`${numero*i}\n`)}`)   ;
    
        }
        if(listado) {
            console.log(salida)
            console.log('============================'.green)
        }
        
    
        fs.writeFileSync(`./salidas/tabla-del-${numero}.txt` , salida)
        return(`${colors.rainbow(`tabla-del-${numero}.txt creado correctamente`)}`)
   
    } catch (error) {
        throw error
    }


}


module.exports = {
    crearArchivo
}