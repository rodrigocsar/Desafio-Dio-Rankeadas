function matches(victory,defeat){
    let result = victory - defeat;
    return result;
}

function rankGamer(){
    let resultOfGamer = matches(50,10);
    let nivelOfGamer = 81
    switch(nivelOfGamer){
        case 10:
            nivelOfGamer = "Ferro"
            console.log(`${nivelOfGamer} Heroi Nivel "Ferro"`);
            break;
        case 11 || 20:
            nivelOfGamer = "Bronse"
            console.log(`${nivelOfGamer} Heroi Nivel "Bronse"`);
            break;
        case 21 || 50:
            nivelOfGamer = "Prata"
            console.log(`${nivelOfGamer} Heroi Nivel "Prata"`);
            break;
        case 51 || 80:
            nivelOfGamer = "Ouro"
            console.log(`${nivelOfGamer} Heroi Nivel "Ouro"`);
            break;
        case 81 || 90:
            nivelOfGamer = "Diamante"          
            console.log(`${nivelOfGamer} Heroi Nivel " Diamante"`);
            break;
        case 91 || 100:
            nivelOfGamer = "Lendário"
            console.log(`${nivelOfGamer} Heroi Nivel "Lendário"`);
            break;
        case 101:
            nivelOfGamer = "Imortal"
            console.log(`${nivelOfGamer} Heroi Nivel "Imortal"`);
            break;
        case 0:
            default:
                console.log("Pontuação negativa Não foi Dessa Vez!!!")     
            break;
    }
    return `Saldo do heroi é de **${resultOfGamer}** Vitorias e está no nível **${nivelOfGamer}**`
   
}

console.log(rankGamer())
