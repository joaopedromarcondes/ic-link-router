import { createClient } from '@supabase/supabase-js';


export default async function handler(req, res) {
    try {
        // Trava de segurança para ambiente local
        if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
            throw new Error("Variáveis de ambiente ausentes.");
        }

        // Inicia a conexão DENTRO da função
        const supabase = createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_ANON_KEY
        );

        // Pede para o banco: "Ache o menor, some 1 e me dê a URL"
        const { data: urlSorteada, error } = await supabase.rpc('pegar_proximo_link');

        if (error || !urlSorteada) throw error;

        // Redireciona o usuário para a URL que o banco devolveu
        res.writeHead(302, { Location: urlSorteada });
        res.end();
        
    } catch (err) {
        console.error("Erro no Banco:", err.message || err);
        
        // Fallback de segurança: Se o banco ficar fora do ar, mande para um link padrão 
        res.writeHead(302, { Location: "https://forms.gle/vmNZZHPmDQTsDHHC9" });
        res.end();
    }
}