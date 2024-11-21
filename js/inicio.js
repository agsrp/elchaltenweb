let nube1 = document.getElementById('nube1')
let mont_atras = document.getElementById('mont-atras')
let mont_frente = document.getElementById('mont-frente')
let texto_inicio = document.getElementById('texto-inicio')
let btn_inicio = document.getElementById('btn-inicio')
let montBackDark = document.getElementById('montBdark')
let montDarkFrente = document.getElementById('montfrentenoche')
let montDarkFrente2 = document.getElementById('montfrente2noche')


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    nube1.style.left = value * 0.5 + 'px';
    mont_atras.style.top = value * 0.3 + 'px';
    texto_inicio.style.marginRight = value * 6 + 'px'
    btn_inicio.style.marginTop = value * 1.5 + 'px'

    montBackDark.style.top = value * 0.3 + 'px';
})