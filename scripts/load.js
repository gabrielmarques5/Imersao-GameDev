function preload() {
    imagemCenarioCeu = loadImage('img/cenario/Sky.png')
    imagemCenarioFundo = loadImage('img/cenario/BG_Decor.png')
    imagemCenarioArvoreFundo = loadImage('img/cenario/Middle_Decor.png')
    imagemCenarioArvore = loadImage('img/cenario/Foreground.png')
    imagemCenarioGrama = loadImage('img/cenario/Ground.png')

    imagemPersonagem = loadImage('img/personagem/correndo.png')
    imagemInimigo = loadImage('img/inimigos/gotinha.png')
    imagemInimigoGrande = loadImage('img/inimigos/troll.png')
    imagemInimigoVoador = loadImage('img/inimigos/gotinha-voadora.png')
    imagemGameOver = loadImage('img/assets/game-over.png')
    imagemTelaInicial = loadImage('img/assets/telaInicial.png')
    imagemVida = loadImage('img/assets/coracao.png')

    fonteTelaInicial = loadFont('img/assets/fonteTelaInicial.otf')

    fita = loadJSON('fita/fita.json')

    somDoJogo = loadSound('sons/trilha_jogo.mp3')
    somDoPulo = loadSound('sons/somPulo.mp3')
    somGameOver = loadSound('sons/GameOver.mp3')
}