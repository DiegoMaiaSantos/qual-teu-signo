const submitTxt = document.querySelector("#txtSubmit");

submitTxt.addEventListener("click", function (e) {
    e.preventDefault();

    const day = document.querySelector("#txtDateDay").value;
    const month = document.querySelector("#txtDateMonth").value;
    
    const mesJaneiro = ("Capricornio");
    const mesFevereiro = ("Aquario");
    const mesMarco = ("Peixes");
    const mesAbril = ("Aries");
    const mesMaio = ("Touro");
    const mesJunho = ("Gemeos");
    const mesJulho = ("Cancer");
    const mesAgosto = ("Leao");
    const mesSetembro = ("Virgem");
    const mesOutubro = ("Libra");
    const mesNovembro = ("Escorpiao");
    const mesDezembro = ("Sagitario");

    var ano = 12;

    while (month <= ano) {

        if (month == 1 && day <= 19) {
            alert("Seu signo é " + mesJaneiro);
            break;
        }
        else if (month == 2 && day <= 18) {
            alert("Seu signo é " + mesFevereiro);
            break;
        }
        else if (month == 3 && day <= 20) {
            alert("Seu signo é " + mesMarco);
            break;
        }
        else if (month == 4 && day <= 19) {
            alert("Seu signo é " + mesAbril);
            break;
        }
        else if (month == 5 && day <= 20) {
            alert("Seu signo é " + mesMaio);
            break;
        }
        else if (month == 6 && day <= 20) {
            alert("Seu signo é " + mesJunho);
            break;
        }
        else if (month == 7 && day <= 22) {
            alert("Seu signo é " + mesJulho);
            break;
        }
        else if (month == 8 && day <= 22) {
            alert("Seu signo é " + mesAgosto);
            break;
        }
        else if (month == 9 && day <= 22) {
            alert("Seu signo é " + mesSetembro);
            break;
        }
        else if (month == 10 && day <= 22) {
            alert("Seu signo é " + mesOutubro);
            break;
        }
        else if (month == 11 && day <= 21) {
            alert("seu signo é " + mesNovembro);
            break;
        }
        else if (month == 12 && day <= 21) {
            alert("seu signo é " + mesDezembro);
            break;
        }
    }
})