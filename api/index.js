
export default function handler(req, res) {


    const links = [
        "https://google.com.br",
        "https://uol.com.br",
        "https://facebook.com.br"
    ];

    // Faz o sorteio de um número aleatório
    const sorteio = Math.floor(Math.random() * links.length);

    // Jeito nativo do Node.js para redirecionar (não depende da Vercel)
    res.writeHead(302, { Location: links[sorteio] });
    res.end();
}