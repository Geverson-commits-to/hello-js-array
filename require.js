const {
    FazerObj
} = require('./objetos')


main()

async function main(){
try{
    
    const result = await FazerObj()

    console.log(result)
}catch(error){
    console.error(`Berrooooouuuuuuu: ______${error}______`)
    }
}


// FazerObj().then((result) =>{
//     console.log('saida final ', result)
// })