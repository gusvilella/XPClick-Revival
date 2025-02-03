// ==UserScript==
// @name         XPClick Revival
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Reproduz o som de clique clássico do Windows XP em qualquer página da web.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("XPClick Revival está rodando!");

    document.addEventListener('click', function(event) {
        console.log("Clique detectado!");

        const audio = new Audio('https://gusvilella.github.io/XPClick-Revival/xp-click.wav');
        audio.volume = 1.0;
        audio.currentTime = 0;

        // Força o áudio a rodar como fizemos no Console
        audio.play().then(() => {
            console.log("Som tocando!");
        }).catch(e => {
            console.error("Erro ao tocar o som:", e);
        });
    }, true);
})();
