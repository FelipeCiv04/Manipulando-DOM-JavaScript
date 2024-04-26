function contar (){
    let inicio = document.getElementById('comeco')
    let fim  = document.getElementById('final')
    let passo  = document.getElementById('passo')
    let res = document.getElementById('contagem')

    if( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO_01]algo deu errado. Confira os valores')

    }else{
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0){
            window.alert('[ERRO_02]Impossível passo ser 0. CONSIDERANDO PASSO UM')
            p = 1
        }

        if( i < f){
            for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} - `
        }


        }else{
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} -  `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }


}