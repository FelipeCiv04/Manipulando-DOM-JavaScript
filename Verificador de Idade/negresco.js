function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade <= 14) {
                img.setAttribute('src', 'homemcriança.png');
                document.body.style.background = '#A60303'
                // Lógica para criança


            } else if (idade >= 15 && idade <= 30) {
                img.setAttribute('src', 'homemjovem.png');
                document.body.style.background = '#0D3D0F'
                // Lógica para jovem


            } else if (idade >= 31 && idade <= 55) {
                img.setAttribute('src', 'homemadulto.png');
                document.body.style.background = '#000000'
                // Lógica para adulto


            } else {
                img.setAttribute('src', 'homemidoso.png');
                document.body.style.background = '#FF4D00'
                // Lógica para idoso
            }

        } else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade >= 0 && idade <= 14) {
                img.setAttribute('src', 'mulhercriança.png');
                document.body.style.background = '#FF94F4'
                // Lógica para criança


            } else if (idade >= 15 && idade <= 30) {
                img.setAttribute('src', 'mulherjovem.png');
                document.body.style.background = '#5E17EB'
                // Lógica para jovem


            } else if (idade >= 31 && idade <= 55) {
                img.setAttribute('src', 'mulheradulta.png');
                document.body.style.background = '#007C89'
                // Lógica para adulto


            } else {
                img.setAttribute('src', 'mulheridosa.png');
                document.body.style.background = '#4B1414'
                // Lógica para idoso
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}