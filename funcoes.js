function verificar() {
    var info = new Date
    var ano_atual = info.getFullYear()
    var ano_nasc = window.document.getElementById('ano_nasc')
    var res = window.document.querySelector('div#res')
    var idade = ano_atual - ano_nasc.value

    if (ano_nasc.value <= 1900 || ano_nasc.value > ano_atual) {
        window.alert('Informe um ano de nascimento válido.')
    }

    var sex = window.document.getElementsByName('radiosexo')
    var genero = ''
    var img = window.document.getElementById('img')

    if (sex[0].checked) {
        genero = 'homem'
            if (idade <= 10) {
                img.innerHTML = "<img src ='../imagens/foto-bebe-m.png'>"
            } else if (idade > 10 && idade <= 20) {
                img.innerHTML = "<img src ='../imagens/foto-jovem-m.png'>"
            } else if (idade >= 21 && idade < 50) {
                img.innerHTML = "<img src = '../imagens/foto-adulto-m.png'>"
            } else if (idade >= 50) {
                img.innerHTML = "<img src = '../imagens/foto-idoso-m.png'>"
            }
    } else if (sex[1].checked) {
        genero = 'mulher'
        if (idade <= 10) {
            img.innerHTML = "<img src = '../imagens/foto-bebe-f.png'>"
        } else if (idade > 10 && idade <= 20) {
            img.innerHTML = "<img src = '../imagens/foto-jovem-f.png'>"
        } else if (idade >= 21 && idade < 50) {
            img.innerHTML = "<img src = '../imagens/foto-adulto-f.png'>"
        } else if (idade >= 50) {
            img.innerHTML = "<img src = '../imagens/idoso-f.png'>"
        }
    }

    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    res.appendChild(img)
}