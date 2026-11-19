# Vitrine Local — protótipo

Protótipo navegável de uma vitrine digital para o comércio de Itabuna (BA).
Feito só com HTML, CSS e um pouco de JavaScript, sem framework e sem servidor.

> Lojas, produtos, preços e números são **fictícios**, apenas para demonstração.

## Telas

| Arquivo | O que é |
|---|---|
| `index.html` | Página inicial: vitrine 3×3 com as 9 lojas mais visitadas + lista de todas as lojas com filtros |
| `loja.html` | Página de uma loja: produtos, contato pelo WhatsApp, informações |
| `cadastro.html` | Cadastro de cliente ou lojista |
| `painel.html` | Painel do lojista: visitas, cliques, plano e produtos |
| `escopo.html` | Sobre o projeto (versão resumida do escopo) |

No celular, a vitrine 3×3 vira 9 quadradinhos, como ícones de aplicativo.

## Como ver no seu computador

Basta dar dois cliques no `index.html`. Não precisa instalar nada.

## Como publicar no GitHub Pages

1. No GitHub, clique em **New repository** e dê o nome `vitrine-local` (deixe **Public**).
2. Na página do repositório, clique em **Add file › Upload files** e arraste **todo o conteúdo** desta pasta
   (`index.html`, as outras páginas e as pastas `css` e `js`). Clique em **Commit changes**.
3. Vá em **Settings › Pages**. Em **Source**, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** e clique em **Save**.
4. Espere 1 ou 2 minutos e atualize a página: o link aparece no topo, no formato
   `https://SEU-USUARIO.github.io/vitrine-local/`.

Pelo terminal, o mesmo processo fica assim:

```bash
cd vitrine-local
git init
git add .
git commit -m "Protótipo da Vitrine Local"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/vitrine-local.git
git push -u origin main
```

Depois é só ativar o Pages (passo 3).

## Dica para apresentar aos lojistas

Abra o link no celular e toque em **Adicionar à tela inicial**. O protótipo fica com cara de aplicativo.
Gere um QR code do link para colocar num papel e deixar com o lojista.

## Como estudar este código

- `css/style.css`: cores e medidas estão no começo, em `:root`. Mude `--verde` e veja o site inteiro mudar.
  O bloco `@media (max-width: 640px)` no final é o que transforma o layout no celular.
- `js/app.js`: os dados das lojas ficam em `LOJAS`. A função `cardLoja()` monta o HTML de cada card
  e `desenharLista()` aplica os filtros. No Django, esse trabalho vai para as **views** e os **templates**.
