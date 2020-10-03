function FazerObj(){
    const nome = ['NovaA','NovaB','NovaC','NovaD','NovaE','NovaF','NovaG'] 
    const tipo = ['M-A', 'M-B', 'M-C', 'M-D', 'M-E', 'M-F', 'M-G']
    const idade = [12,20,23,34,54,65,71]
    const cor_cabelo = ['branco','preto','cinza','vermelho','azul', 'verde', 'anomeelo']
    const pais = ['america-S','america-N','america-C','europa','asia','africa']
    const status = ['mp000','mp001','mp002','mp003','mp004','mp005','mp006','mp007']


    const rd1 = Math.floor(Math.random() * nome.length)
    const rd2 = Math.floor(Math.random() * tipo.length)
    const rd3 = Math.floor(Math.random() * idade.length)
    const rd4 = Math.floor(Math.random() * cor_cabelo.length)
    const rd6 = Math.floor(Math.random() * status.length)
    const rd7 = Math.floor(Math.random() * pais.length)
    const rd8 = Math.floor(Math.random() * 2)

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        return resolve({
            OName: nome[rd1],
            OType: tipo[rd2],
            OAge: idade[rd3],
            OHair: cor_cabelo[rd4],
            OState: status[rd6],
            ONation: pais[rd7],
            ONEW: rd8
                })

            
        },1000)
    })

  
 
}


module.exports = {
    FazerObj
}