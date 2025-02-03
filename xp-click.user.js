// ==UserScript==
// @name         XPClick Revival
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Reproduz o som de clique clássico do Windows XP em qualquer página da web.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Link direto para o arquivo .wav hospedado no repositório do GitHub.
    const audio = new Audio('https://raw.githubusercontent.com/gusvilella/XPClick-Revival/main/xp-click.wav');
    document.addEventListener('click', function() {
        audio.currentTime = 0;
        audio.play();
    });
})();
