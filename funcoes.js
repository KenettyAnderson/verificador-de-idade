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
    var img = document.createElement ('img') //criou o espaço para uma imagem(img)
    img.setAttribute ('id', 'foto') //atribuiu o id"foto" para img

    if (sex[0].checked) {
        genero = 'homem'
            if (idade <= 10) {
                img.setAttribute ('src', 'foto-bebe-f.png')
            } else if (idade > 10 && idade <= 20) {
                img.setAttribute ('src', 'foto-bebe-f.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute ('src', 'foto-bebe-f.png')
            } else if (idade >= 50) {
                img.setAttribute ('src', 'foto-bebe-f.png')
            }
    } else if (sex[1].checked) {
        genero = 'mulher'
        if (idade <= 10) {
            img.setAttribute('src', 'foto-bebe-f.png')
        } else if (idade > 10 && idade <= 20) {
            img.setAttribute ('src', 'foto-bebe-f.png')
        } else if (idade >= 21 && idade < 50) {
            img.setAttribute ('src', 'foto-bebe-f.png')
        } else if (idade >= 50) {
            img.setAttribute ('src', 'foto-bebe-f.png')
        }
    }

    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    res.appendChild(img)
}