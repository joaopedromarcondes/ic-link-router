export default function handler(req, res) {


    const links = [
        "https://google.com.br",
        "https://uol.com.br",
        "https://facebook.com.br"
    ];

  // Faz o sorteio de um número aleatório
  const sorteio = Math.floor(Math.random() * links.length);

  // Redireciona imediatamente no servidor (302 é o código de redirecionamento temporário)
  res.redirect(302, links[sorteio]);
}