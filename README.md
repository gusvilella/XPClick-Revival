# **XPClick Revival** 🎵💻  

XPClick Revival é um **userscript** para **Tampermonkey** que traz de volta o **som clássico de clique do Windows XP** ao navegar na web.  

Se você sente falta daquela **nostalgia dos tempos do XP**, esse script vai recriar essa experiência ao clicar em **botões, links e elementos interativos** em páginas comuns da web.  

---

## 🚀 **Como Funciona?**  

O script toca o som **ao clicar em botões, links e elementos interativos**. Ele é focado em **páginas tradicionais** e **não interfere em redes sociais ou web apps complexos**.  

### ✅ Funciona bem em:
✔ **Google** (pesquisa, botões, menus, configurações, resultados).  
✔ **Wikipedia** (links, botões de edição, navegação).  
✔ **Old Reddit** ([https://old.reddit.com](https://old.reddit.com)) – funciona apenas na versão antiga.  
✔ **Fóruns e sites de notícias** (como Medium, dependendo da página).  

### ⚠ **Parcialmente compatível com:**
⚠ **DuckDuckGo** – funciona, mas pode falhar em algumas seções.  
⚠ **Alguns blogs e sites pequenos** – depende da estrutura do site.  

### ❌ **Não funciona bem em:**
❌ **New Reddit** ([https://www.reddit.com](https://www.reddit.com)) – a versão nova do Reddit usa eventos que não conseguimos capturar.  
❌ **YouTube, Twitter, Facebook e outras redes sociais** – essas plataformas usam eventos personalizados que impedem a detecção direta.  
❌ **Google Docs, Gmail e Web Apps complexos** – o script não foi feito para funcionar nesses ambientes.  

> 🛠 **Quer personalizar onde o som toca?**  
> Você pode modificar o script e ajustar para **incluir ou excluir elementos** do jeito que quiser! 🔥

---

## 🛠 **Como Instalar?**  

O script precisa do **Tampermonkey**, uma extensão para gerenciar userscripts. Instale no seu navegador:  

🔹 **Google Chrome** → [Instalar Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
🔹 **Mozilla Firefox** → [Instalar Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  
🔹 **Microsoft Edge** → [Instalar Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
🔹 **Opera & Opera GX** → [Instalar Tampermonkey](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)  
🔹 **Brave & Vivaldi** → Pode instalar a versão do Chrome, funciona normalmente.  

### **Instalando o script**
1. **Clique aqui para abrir o script** → [XPClick Revival - Script](https://github.com/gusvilella/XPClick-Revival/raw/main/xp-click.user.js)  
2. O Tampermonkey deve abrir perguntando se você quer instalar.  
3. **Clique em "Instalar"**.  
4. **Pronto!** Agora os cliques na web vão tocar o som clássico do XP. 🎵  

---

## 🔧 **Como Personalizar o Script?**  

Se quiser **modificar onde o som toca**, siga os passos:  

1. **Abra o Tampermonkey** no navegador.  
2. Vá para **"Dashboard"** e clique no **XPClick Revival** para editar.  
3. Procure esta parte do código:  
   ```js
   const elementosInterativos = ['a', 'button', 'input', 'select', 'textarea', 'label'];
   - **Quer adicionar mais elementos?** Adicione a tag HTML aqui. Exemplo:
     ```js
     const elementosInterativos = ['a', 'button', 'input', 'select', 'textarea', 'label', 'div', 'span'];
     ```
   - **Quer remover algo?** Basta apagar da lista.  
4. **Salve as alterações e teste!**  

> 💡 **Dica:** Se quiser testar um site novo, pode abrir o **Console do DevTools** (`F12` ou `Ctrl + Shift + I`) e rodar este código:
> ```js
> document.body.addEventListener('click', function(event) { console.log(event.target.tagName); });
> ```
> Isso vai mostrar os elementos que você está clicando e pode te ajudar a decidir o que adicionar ao script! 🔥  

---

## 📢 **Aviso**
🚨 **O script NÃO toca o som em todos os lugares do Google automaticamente!**  
Ele foi configurado para **suportar cliques nos resultados da pesquisa** e botões interativos.  

Se algum botão essencial não estiver tocando o som, reporte no repositório!  

💡 **Sabe programar?** Quer melhorar o script? **Forke o repositório** e manda sugestões!  

---

## 🎵 **Gostou? Deixe uma Estrela! ⭐**
Se esse script trouxe um pouco de nostalgia pra você, **deixa uma estrela no repositório** e compartilha com os amigos.  

[🔗 Repositório XPClick Revival](https://github.com/gusvilella/XPClick-Revival)  

🚀 **Divirta-se clicando!** 😆🎵  
