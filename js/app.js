/* =========================================================
   Vitrine Local — protótipo
   Aqui os dados estão "fixos" no código, só para demonstração.
   No sistema real (Django) eles virão do banco de dados e o
   próprio Django vai montar o HTML; este arquivo vira quase nada.
   ========================================================= */

// Cor de fundo e cor do texto de cada categoria: [fundo, texto]
const CORES = {
  'Construção': ['#F1E4D3', '#8A4B12'],
  'Roupas': ['#F3DDE3', '#8E2F4A'],
  'Calçados': ['#E5E1F3', '#4B3E8F'],
  'Eletrodomésticos': ['#DCE9F3', '#1E5A85'],
  'Eletrônicos': ['#DDEEF0', '#1D6670'],
  'Alimentos': ['#E9F0D9', '#4E6A17'],
  'Móveis': ['#EFE6DA', '#6B4A2B'],
  'Pet': ['#F6E6D0', '#8F4E0F'],
  'Ótica e saúde': ['#DFF0E6', '#1F6F4A'],
};

// Lojas fictícias, já em ordem de visitas (a 1ª é a mais visitada)
const LOJAS = [
  { nome: 'Casa Forte Materiais', iniciais: 'CF', categoria: 'Construção', bairro: 'Centro', visitas: 2410 },
  { nome: 'Moda Jequitibá', iniciais: 'MJ', categoria: 'Roupas', bairro: 'Góes Calmon', visitas: 2180 },
  { nome: 'Eletro Cacau', iniciais: 'EC', categoria: 'Eletrodomésticos', bairro: 'Centro', visitas: 1960 },
  { nome: 'Ponto Tech Celulares', iniciais: 'PT', categoria: 'Eletrônicos', bairro: 'São Caetano', visitas: 1875 },
  { nome: 'Empório Sabor da Roça', iniciais: 'SR', categoria: 'Alimentos', bairro: 'Conceição', visitas: 1640 },
  { nome: 'Pé Direito Calçados', iniciais: 'PD', categoria: 'Calçados', bairro: 'Centro', visitas: 1530 },
  { nome: 'Ótica Visão Clara', iniciais: 'VC', categoria: 'Ótica e saúde', bairro: 'Jardim Vitória', visitas: 1410 },
  { nome: 'Pet Amigo', iniciais: 'PA', categoria: 'Pet', bairro: 'Califórnia', visitas: 1290 },
  { nome: 'Lar & Cia Móveis', iniciais: 'LC', categoria: 'Móveis', bairro: 'Fátima', visitas: 1185 },
  { nome: 'Mercadinho Bom Preço', iniciais: 'BP', categoria: 'Alimentos', bairro: 'Mangabinha', visitas: 980 },
  { nome: 'Ateliê Flor de Cacau', iniciais: 'FC', categoria: 'Roupas', bairro: 'Pontalzinho', visitas: 920 },
  { nome: 'Elétrica Luz Forte', iniciais: 'LF', categoria: 'Construção', bairro: 'Fátima', visitas: 870 },
  { nome: 'Conecta Cell', iniciais: 'CC', categoria: 'Eletrônicos', bairro: 'Centro', visitas: 860 },
  { nome: 'Tênis & Cia', iniciais: 'TC', categoria: 'Calçados', bairro: 'Califórnia', visitas: 790 },
  { nome: 'Padaria Pão Quente', iniciais: 'PQ', categoria: 'Alimentos', bairro: 'Santo Antônio', visitas: 760 },
  { nome: 'Refrigeração Polar', iniciais: 'RP', categoria: 'Eletrodomésticos', bairro: 'São Caetano', visitas: 700 },
  { nome: 'Bicho Feliz Pet', iniciais: 'BF', categoria: 'Pet', bairro: 'Zildolândia', visitas: 650 },
  { nome: 'Farmácia Saúde Já', iniciais: 'SJ', categoria: 'Ótica e saúde', bairro: 'Conceição', visitas: 640 },
  { nome: 'Móveis Bahia Sul', iniciais: 'BS', categoria: 'Móveis', bairro: 'Alto Maron', visitas: 610 },
  { nome: 'Boutique Cacaueira', iniciais: 'BC', categoria: 'Roupas', bairro: 'Centro', visitas: 580 },
  { nome: 'Depósito Pedra Branca', iniciais: 'PB', categoria: 'Construção', bairro: 'Mangabinha', visitas: 540 },
];

const CATEGORIAS = ['Todas', ...Object.keys(CORES)];
const ICONE_OLHO = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';

// Monta o HTML de um card. "destaque" = card grande da vitrine 3x3
function cardLoja(loja, posicao, destaque) {
  const [fundo, texto] = CORES[loja.categoria];
  const extras = destaque
    ? `<span class="selo-rank">#${posicao}</span><span class="selo-aberta">Aberta agora</span>`
    : '';
  const rodape = destaque
    ? `<div class="card-rodape"><span class="visitas">${ICONE_OLHO} ${loja.visitas.toLocaleString('pt-BR')} visitas</span><span>Ver loja →</span></div>`
    : '';
  return `
    <a class="card" href="loja.html">
      <div class="card-capa" style="background:${fundo}">
        <span class="card-iniciais" style="color:${texto}">${loja.iniciais}</span>
        ${extras}
      </div>
      <div class="card-corpo">
        <strong>${loja.nome}</strong>
        <span class="muted">${loja.categoria} · ${loja.bairro}</span>
        ${rodape}
      </div>
    </a>`;
}

// ---------- Página inicial ----------
function iniciarPaginaInicial() {
  const vitrine = document.getElementById('vitrine');
  if (!vitrine) return; // não estamos na página inicial

  // 1) As 9 mais visitadas
  vitrine.innerHTML = LOJAS.slice(0, 9).map((l, i) => cardLoja(l, i + 1, true)).join('');

  // 2) Lista completa com filtro e "carregar mais"
  const estado = { categoria: 'Todas', bairro: 'Todos', mostrando: 8 };
  const lista = document.getElementById('lista');
  const contador = document.getElementById('contador');
  const vazio = document.getElementById('vazio');
  const maisBtn = document.getElementById('carregar-mais');
  const chips = document.getElementById('chips');
  const selectBairro = document.getElementById('bairro');

  chips.innerHTML = CATEGORIAS.map(c =>
    `<button type="button" class="chip" data-categoria="${c}" aria-pressed="${c === 'Todas'}">${c}</button>`
  ).join('');

  function desenharLista() {
    const filtradas = LOJAS.filter(l =>
      (estado.categoria === 'Todas' || l.categoria === estado.categoria) &&
      (estado.bairro === 'Todos' || l.bairro === estado.bairro)
    );
    lista.innerHTML = filtradas.slice(0, estado.mostrando).map(l => cardLoja(l, 0, false)).join('');
    contador.textContent = filtradas.length === 1 ? '1 loja encontrada' : `${filtradas.length} lojas encontradas`;
    vazio.hidden = filtradas.length > 0;
    maisBtn.hidden = filtradas.length <= estado.mostrando;
  }

  chips.addEventListener('click', (e) => {
    const botao = e.target.closest('.chip');
    if (!botao) return;
    estado.categoria = botao.dataset.categoria;
    estado.mostrando = 8;
    chips.querySelectorAll('.chip').forEach(b => b.setAttribute('aria-pressed', b === botao));
    desenharLista();
  });

  selectBairro.addEventListener('change', () => {
    estado.bairro = selectBairro.value;
    estado.mostrando = 8;
    desenharLista();
  });

  maisBtn.addEventListener('click', () => {
    estado.mostrando += 4;
    desenharLista();
  });

  desenharLista();
}

// ---------- Cadastro: alterna cliente / lojista ----------
function iniciarCadastro() {
  const alternador = document.getElementById('alternador');
  if (!alternador) return;

  alternador.addEventListener('click', (e) => {
    const botao = e.target.closest('button');
    if (!botao) return;
    const lojista = botao.dataset.tipo === 'lojista';
    alternador.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b === botao));
    document.getElementById('dados-loja').hidden = !lojista;
    document.getElementById('lado-lojista').hidden = !lojista;
    document.getElementById('lado-cliente').hidden = lojista;
    document.getElementById('botao-enviar').textContent = lojista ? 'Cadastrar minha loja' : 'Criar minha conta';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  iniciarPaginaInicial();
  iniciarCadastro();
});
