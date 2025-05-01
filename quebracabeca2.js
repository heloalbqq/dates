const grade = document.getElementById("grade");
let escolhido1 = null;
let escolhido2 = null;

// Criação das peças
for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 4; i++) {
        const novaPeca = document.createElement("div");
        novaPeca.id = "x" + j + "y" + i;
        novaPeca.style.position = "absolute";
        novaPeca.style.top = i * 100 + "px";
        novaPeca.style.left = j * 100 + "px";
        novaPeca.style.backgroundPositionX = ((j * 25 / (6 - 1)) * 100) + "%";
        novaPeca.style.backgroundPositionY = ((i * 25 / (4 - 1)) * 100) + "%";
        novaPeca.setAttribute("onclick", "clicarPeca(this)");
        grade.appendChild(novaPeca);
    }
}

function clicarPeca(argElemento) {
    if (escolhido1 == null) {
        escolhido1 = argElemento;
    } else if (escolhido2 == null) {
        escolhido2 = argElemento;
        trocarPeca();
    }
}

function trocarPeca() {
    const top1 = escolhido1.style.top;
    const left1 = escolhido1.style.left;

    escolhido1.style.top = escolhido2.style.top;
    escolhido1.style.left = escolhido2.style.left;
    escolhido2.style.top = top1;
    escolhido2.style.left = left1;

    escolhido1 = null;
    escolhido2 = null;

    validar();
}

function validar() {
    let quebraCabecaOk = true;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            const posicaoXEsperada = j * 100 + "px";
            const posicaoYEsperada = i * 100 + "px";

            const pecaVerificada = document.getElementById("x" + j + "y" + i);
            if (pecaVerificada.style.left != posicaoXEsperada ||
                pecaVerificada.style.top != posicaoYEsperada) {
                quebraCabecaOk = false;
            }
        }
    }
    if (quebraCabecaOk) {
        window.alert("Parabéns, minha gostosa");
    }
}

function embaralhar(argIteracoes) {
    for (let i = 0; i < argIteracoes; i++) {
        let escolhido1X = 0, escolhido1Y = 0;
        let escolhido2X = 0, escolhido2Y = 0;

        while (escolhido1X === escolhido2X && escolhido1Y === escolhido2Y) {
            escolhido1X = Math.round(Math.random() * 5);
            escolhido1Y = Math.round(Math.random() * 3);
            escolhido2X = Math.round(Math.random() * 5);
            escolhido2Y = Math.round(Math.random() * 3);
        }

        escolhido1 = document.getElementById("x" + escolhido1X + "y" + escolhido1Y);
        escolhido2 = document.getElementById("x" + escolhido2X + "y" + escolhido2Y);
        trocarPeca();
    }
}

embaralhar(100);
