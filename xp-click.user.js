// ==UserScript==
// @name         XPClick Revival
// @namespace    http://tampermonkey.net/
// @version      1.9
// @description  Reproduz o som de clique clássico do Windows XP em páginas comuns da web.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("XPClick Revival está rodando!");

    document.addEventListener('click', function(event) {
        const tag = event.target.tagName.toLowerCase();

        // Lista de elementos que fazem sentido ter som
        const elementosInterativos = ['a', 'button', 'input', 'select', 'textarea', 'label'];

        // Detecta cliques em links e botões
        if (elementosInterativos.includes(tag)) {
            tocarSom();
            return;
        }

        // Corrige cliques nos resultados do Google (links dentro de divs)
        if (event.target.closest('.tF2Cxc, .yuRUbf, .BVG0Nb, .rc')) {
            tocarSom();
            return;
        }

    }, true);

    function tocarSom() {
        console.log("Clique detectado!");

        const audio = new Audio('https://gusvilella.github.io/XPClick-Revival/xp-click.wav');
        audio.volume = 1.0;
        audio.currentTime = 0;

        audio.play().then(() => {
            console.log("Som tocando!");
        }).catch(e => {
            console.error("Erro ao tocar o som:", e);
        });
    }
})();
