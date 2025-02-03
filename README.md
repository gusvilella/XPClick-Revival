# XPClick Revival

Script do Tampermonkey que reproduz o som de clique clássico do Windows XP em qualquer página da web.

## Descrição

Esse script traz de volta o som nostálgico do clique do Windows XP, aquele que rolava quando você abria pastas, iniciava programas ou navegava na web. Se você sente falta dessa experiência sonora, esse script é pra você.

## Como Usar

### 1. Instale o Tampermonkey

- Se ainda não tem, baixe e instale a extensão Tampermonkey para o seu navegador:
  - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
  - [Edge](https://www.microsoft.com/store/productId/9NBLGGH5162S)

### 2. Instale o Script

- Acesse o arquivo [`xp-click.user.js`](https://raw.githubusercontent.com/SEU_USUARIO/XPClick-Revival/main/xp-click.user.js) no repositório.
- Clique no botão **Raw** para que o Tampermonkey detecte o script.
- Confirme a instalação quando o Tampermonkey solicitar.

### 3. Teste o Script

- Depois de instalado, navegue normalmente e clique em qualquer lugar da página.
- O som clássico do Windows XP deve tocar a cada clique.

### 4. Personalização

- Caso queira usar outro som ou precise ajustar o link do áudio, edite o script:
  ```js
  const audio = new Audio('https://raw.githubusercontent.com/gusvilella/XPClick-Revival/main/xp-click.wav');

## Licença
Esse projeto está licenciado sob a Licença MIT.
