// 1. Variáveis para armazenar o nome e XP
let nomeHeroi = "FantasmaaX"; 
let XpHeroi = 7999;
let nivel = "";

// 2. Estrutura de "repetição"
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (XpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (XpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (XpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (XpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (XpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (XpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// 3. Saída (o que vai mostrar na tela)
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivel}**`);