let imgBox = document.getElementById("imgBox"); // criei uma variável e fui buscar o valor dela a um elemento do html.
let qrImage = document.getElementById("qrImage"); // criei uma variável e fui buscar o valor dela a um elemento do html.
let qrText = document.getElementById("qrText"); // criei uma variável e fui buscar o valor dela a um elemento do html.

// criei uma função que vai ser chamada quando o botão for clicado.
function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value); //chamei a segunda variável e adicionei um evento através de uma api que vai ser chamado quando o botão for clicado.
    imgBox.classList.add("show-img"); // adicionar o qrcode depois de o botão ser clicado.
  } else {
    qrText.classList.add('error');
    setTimeout(() => {
      qrText.classList.remove('error');
    }, 1000); // tempo em milissegundos que o erro vai aparecer no inspetor do browser.
  }
}