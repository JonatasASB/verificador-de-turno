function carregar() {
var msg = document.getElementById("msg");
var saudacao = document.querySelector('#saudacao')
var img = document.getElementById('image');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas`
if (hora > 0 && hora < 12) {
    saudacao.innerHTML = `Bom dia`
} else if (hora < 18) {
    saudacao.innerHTML =`Boa Tarde`
} else {
    saudacao.innerHTML = `Boa noite`
}

if (hora > 0 && hora < 12) {
    // BOM DIA
    img.src = 'assets/images/manha.jpg';
    document.body.style.backgroundColor = '#e2cd9f'
} else if (hora <= 18) {
    // BOA TARDE
    img.src = 'assets/images/tarde.jpg'
    window.document.body.style.backgroundColor = '#b9846f'
} else {
    img.src = 'assets/images/noite.jpg'
    document.body.style.backgroundColor = '#515154'
} 
};


