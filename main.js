let tiempodeReferencia = Date.now()
let acumulado = 0
let cronometro = false


setInterval(() => {
    let tiempo = document.getElementById("tiempo")
    if(cronometro){
        acumulado += Date.now() - tiempodeReferencia
        
    }
    tiempodeReferencia = Date.now()
    tiempo.innerHTML = formatarMs(acumulado)
    
}, 1000 / 60)

function formatarMs(ms){
    let MS = ms%1000
    let S = Math.floor(((ms - MS)/1000)%60)
    let M = Math.floor((S /60)%60)
    let H = Math.floor((M /60)%60)
    Number.prototype.ceros = function(n){
        return (this + "").padStart(n,0)
    }
    return H.ceros(2)+":"+ M.ceros(2)+ ":"+S.ceros(2)+":"+MS.ceros(4)
}

function iniciar() {
    cronometro = true
}
function pause() {
    cronometro = false
}
function pause() {
    cronometro = false
}