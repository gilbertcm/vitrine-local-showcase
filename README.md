# Vitrine Local

**O comércio de Itabuna numa vitrine digital.**

Uma plataforma que reúne as lojas da cidade num só lugar: o cliente descobre lojas e produtos perto de casa,
e o lojista ganha uma página própria, estatísticas de visitas e contato direto com quem tem interesse.

🔗 **Ver o protótipo:** https://gilbertcm.github.io/vitrine-local-showcase/

> Este repositório é uma **demonstração visual** da proposta. O sistema completo, em Python/Django,
> é desenvolvido em um repositório privado. Lojas, produtos, preços e números exibidos são fictícios.

---

## O problema

O comércio local perde espaço para as grandes plataformas de compra online. Muitas lojas de bairro
não têm site, e quem procura um produto pelo celular raramente encontra a loja que fica a poucas ruas de casa.

## A proposta

Uma **vitrine digital da cidade**, simples para o lojista e fácil para o cliente:

- **Para o cliente:** encontrar lojas por categoria e bairro, ver produtos, preços e horários,
  e falar com o lojista direto pelo WhatsApp.
- **Para o lojista:** ter uma página própria, publicar produtos e acompanhar quantas pessoas
  visitaram a loja e clicaram para chamá-lo.

## Como funciona

**A vitrine 3×3.** A página inicial destaca as 9 lojas mais visitadas dos últimos 30 dias, em três fileiras
de três. Logo abaixo fica a lista completa, com filtros por categoria e bairro.

**Ranking justo:**
- Conta uma visita por pessoa, por loja, por dia: atualizar a página não sobe ninguém.
- Uma vaga pode ser reservada para lojas novas, para quem acabou de chegar também aparecer.
- Qualquer destaque pago é identificado como "Patrocinado".

**No celular**, a vitrine vira 9 quadradinhos, como ícones de aplicativo.

## Telas do protótipo

| Tela | O que mostra |
|---|---|
| [Página inicial](https://gilbertcm.github.io/vitrine-local-showcase/) | Vitrine 3×3 com as lojas mais visitadas e a lista completa com filtros |
| [Página da loja](https://gilbertcm.github.io/vitrine-local-showcase/loja.html) | Produtos, preços, horário, endereço e contato pelo WhatsApp |
| [Cadastro](https://gilbertcm.github.io/vitrine-local-showcase/cadastro.html) | Criação de conta para cliente ou lojista |
| [Painel do lojista](https://gilbertcm.github.io/vitrine-local-showcase/painel.html) | Visitas, cliques no WhatsApp, posição na vitrine, produtos e plano |
| [Sobre o projeto](https://gilbertcm.github.io/vitrine-local-showcase/escopo.html) | Resumo da proposta e das regras |

## Roadmap

| Fase | Entregas |
|---|---|
| **1 · MVP** | Cadastro de clientes e lojistas, páginas das lojas, catálogo de produtos, vitrine 3×3, busca e filtros, contato pelo WhatsApp, painel com estatísticas, aprovação de lojas |
| **2** | Plano mensal para lojistas, favoritos, avaliações, promoções e mapa das lojas |
| **3** | Pedidos e pagamento (Pix) na plataforma, entrega ou retirada, aplicativo para celular |

No MVP a plataforma divulga, e a venda acontece no WhatsApp do lojista.

## Modelo de negócio

- **Plano gratuito:** a loja aparece na vitrine com um número limitado de produtos.
- **Plano mensal:** produtos ilimitados, estatísticas completas e selo de loja verificada.

## Tecnologias

| Protótipo (este repositório) | Sistema completo (privado) |
|---|---|
| HTML5, CSS3 (Grid e Flexbox, layout responsivo), JavaScript puro | Python, Django, MySQL |

## Status

🚧 Protótipo concluído. Em fase de validação com lojistas de Itabuna (BA) e desenvolvimento do MVP.

## Autor

**Gilbert Carmo Macêdo**, estudante de Ciência da Computação na UESC.
Contato: gilbertcm139@gmail.com

## Direitos

© 2026 Gilbert Carmo Macêdo. Todos os direitos reservados.

Este código está público apenas para visualização. Não é permitido copiar, modificar, redistribuir
ou usar este projeto, no todo ou em parte, sem autorização por escrito do autor.
