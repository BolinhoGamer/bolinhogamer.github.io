const messages = [
    'Leia tudo, não pule nada!',
    'Sabe, eu não te amo...',
    'Bem, eu não amo ninguém...',
    'Eu não sinto amor... (⁠╥⁠﹏⁠╥⁠)',
    'Mas isso não me impede de gostar de você!',
    'Você é meu melhor amigo, te considero uma das pessoas mais importantes da minha vida!',
    'Sua amizade é algo muito especial para mim!',
    'Sou eternamente e profundamente grato por ser meu amigo!',
    'Muito obrigado por nunca ter desistido de mim!',
    'Sua amizade significa muito para mim! (⁠灬⁠º⁠‿⁠º⁠灬⁠)⁠♡',
    'Pode não ter meu amor (que ninguém tem), mas tem meu carinho, respeito e admiração!',
    'Desculpa se as vezes sou pegajoso ou distante, não faço por mal, minha cabeça é uma loucura, então nem sempre sei o que estou fazendo...'
];

function buttonClicked() {
    for (let i = 0; i < messages.length; i++)
        alert(messages[i]);
    
    let ans = confirm('Você, grande amigo, gostaria de ver algo legal?');
    while (!ans)
        ans = confirm('... vamos tentar de novo... ರ⁠╭⁠╮⁠ರ');
    
    location.href = 'https://www.instagram.com/reel/DHJE8DczPCt/?igsh=MXAxdG9uMXY4MnJqdw==';
}