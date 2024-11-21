const switchButton = document.getElementById('darkbutton');
const montDia = document.getElementById('mont-atras');
const montFrenDia = document.getElementById('mont-frente');
const montFren2Dia = document.getElementById('mont-frente2');
const montBdark = document.getElementById('montBdark');
const montFdark = document.getElementById('montfrentenoche');
const montF2dark = document.getElementById('montfrente2noche');
const estrellasDark = document.getElementById('estrellas');
const infoDark = document.getElementById('infor');
const initDark = document.getElementById('init');
const btnDark = document.getElementById('btn-inicio');
const finInit = document.getElementById('f-inicio');
const contDark = document.getElementById('contact');


switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');
    montDia.classList.toggle('montDark');
    montBdark.classList.toggle('montNoche');
    montFdark.classList.toggle('montañafrenteDark');
    montF2dark.classList.toggle('montañafrenteDark2');
    montFrenDia.classList.toggle('montañafrenteDia');
    montFren2Dia.classList.toggle('montañafrenteDia2');
    estrellasDark.classList.toggle('darkStars');
    infoDark.classList.toggle('darkInfo');
    initDark.classList.toggle('darkInit');
    btnDark.classList.toggle('darkBTN');
    finInit.classList.toggle('initFin');
    contDark.classList.toggle('contactoDark');
})