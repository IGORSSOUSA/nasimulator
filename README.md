# 🍥 Naruto Arena Simulator (NASimulator)

![Status](https://img.shields.io/badge/Status-Ativo-success)
![Linguagem](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Linguagem](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)

Um simulador tático avançado e assistente inteligente para o jogo Naruto Arena. Desenvolvido para ajudar jogadores a testarem sinergias de equipes, descobrirem combos de habilidades e, o mais importante, solucionar requisitos complexos de Missões Ninja de forma automática.

## 🚀 Principais Funcionalidades

### ⚔️ Motor Heurístico de Combate
* **Análise de Sinergia:** Avalia a composição do seu time e gera uma nota (1 a 5 estrelas), listando as vantagens (ex: Alto Dano Físico) e riscos (ex: Vulnerabilidade a Stuns).
* **Guia de Rotação (Combos):** O algoritmo lê a descrição das habilidades e sugere automaticamente a ordem de execução (Setup -> Finisher), exibindo os ícones exatos de cada habilidade.

### 🎯 Assessor Tático (PvP)
* **Ordem de Foco:** Analisa o time inimigo buscando por *healers*, *stunners* e dano perfurante, sugerindo a ordem exata de quem você deve focar para vencer a partida.
* **Guia do Turno 1:** Sugere ações baseadas em quem ganha a iniciativa (Primeiro a jogar vs Segundo a jogar), priorizando invulnerabilidades ou agressão rápida.

### 📜 Assistente de Missões (Mission Solver)
* **Cruzamento de Requisitos:** O sistema lê a string de requerimento da missão (ex: *"Win 3 games with any Uchiha"*) e cruza com a *Lore* (história) e as classes de todos os personagens.
* **Escalação Automática:** Monta equipes perfeitas para completar a missão. Se faltarem vagas, a inteligência preenche a equipe com suportes táticos focados em cura ou redução de dano.
* **Evita Paradoxos:** O algoritmo sabe qual é o personagem de recompensa e o exclui das sugestões de time.

### 🕷️ Backend & Scraping Automático
A base de dados estática do projeto (`dados.js` e `missoes.js`) é alimentada por um conjunto de robôs extratores desenvolvidos em **Python** usando **Selenium** e **BeautifulSoup**. Eles acessam a conta do jogador, varrem as categorias, capturam imagens, cooldowns, custos de chakra e extraem o texto das missões em tempo real.

## 🛠️ Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3, Vanilla JavaScript.
* **Arquitetura:** SPA (Single Page Application) sem dependências externas, 100% Client-side.
* **Data Extraction:** Python 3, Selenium WebDriver, BeautifulSoup4.

## ⚙️ Como Executar o Projeto

Como o projeto foi arquitetado para ser um Web App puramente estático, a execução é imediata:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/IGORSSOUSA/nasimulator.git](https://github.com/IGORSSOUSA/nasimulator.git)

👨‍💻 Autor
Desenvolvido por Igor Sousa GitHub

Este é um projeto criado por fãs e para a comunidade. Todos os direitos de imagens e personagens pertencem aos seus respectivos criadores e à plataforma original do Naruto Arena.
