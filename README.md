# 🏆 Coletor de Orbes - Isadora Jucá de Lima

> Status do Projeto: Concluído ✔️

---

### Tabela de Conteúdos
* [Descrição do Projeto](#descrição-do-projeto)
* [Demonstração da Aplicação](#demonstração-da-aplicação)
* [Funcionalidades](#-funcionalidades)
* [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
* [Como Rodar o Projeto Localmente](#️-como-rodar-o-projeto-localmente)
* [Funcionalidade Adicional](#-funcionalidade-adicional)
* [Autor](#-autor)

---

### Descrição do Projeto
<p align="center">
Este projeto é um jogo interativo de coleta de orbes, desenvolvido com React Native e Expo. A aplicação utiliza o giroscópio do dispositivo para movimentar uma bolinha pela tela, com o objetivo de capturar orbes gerados aleatoriamente. O projeto inclui sistema de colisão e pontuação em tempo real, além de melhorias de performance na leitura dos sensores.
</p>

---

### 🚀 Funcionalidades

- **Controle por Giroscópio:** Movimentação fluida em 60 FPS utilizando os sensores do dispositivo.
- **Sistema de Colisões:** Detecção precisa de colisão entre círculos (personagem e orbes) calculada com base em seus raios.
- **Placar Dinâmico:** A pontuação é atualizada a cada orbe coletado.
- **Geração Segura de Orbes:** Sistema de spawn que garante que o orbe apareça 100% dentro da área visível da tela.
- **Navegação de Telas:** Tela inicial de apresentação com opção de iniciar o jogo utilizando o Expo Router.
- **Funcionalidade Adicional:** Contador de capturas e tela inicial de apresentação. (O contador de capturas exibe o número total de orbes coletados pelo jogador, enquanto a tela inicial de apresentação fornece informações sobre o jogo e permite que o usuário inicie a partida.)

---

### 🛠️ Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)**
- **[Expo](https://expo.dev/)**
- **[Expo Sensors (Gyroscope)](https://docs.expo.dev/versions/latest/sdk/sensors/)**
- **[TypeScript](https://www.typescriptlang.org/)**

---

### ⚙️ Como Rodar o Projeto Localmente

```bash
# 1. Clone o repositório
$ git clone [link-do-seu-repositorio]

# 2. Navegue até o diretório do projeto
$ cd aula-giroscopio

# 3. Instale as dependências
$ npm install

# 4. Inicie o servidor de desenvolvimento
$ npm start
```
Após executar `npm start`, pressione `w` para abrir no navegador ou escaneie o QR Code com o app Expo Go no seu celular.

---

### 👨💻 Autor

Desenvolvido por **Isadora Jucá de Lima**.

Sob a orientação do **Prof. Rafael Ribas**.
