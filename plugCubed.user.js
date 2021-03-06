// ==UserScript==
// @name           plugCubedLoader
// @namespace      com.plugCubed
// @description    Autorun plugCubed on plug.dj
// @author         Thomas "TAT" Andresen
// @include        http://plug.dj/*
// @version        1.6
// ==/UserScript==

/*
Copyright (c) 2012-2013 by Thomas "TAT" Andresen and other contributors

Permission to use this software for any purpose without fee is hereby granted, provided
that the above copyright notice and this permission notice appear in all copies.

Permission to copy and/or edit this software or parts of it for any purpose is permitted,
provided that the following points are followed.
- The above copyright notice and this permission notice appear in all copies
- Within two (2) days after modification is proven working, any modifications are send back
  to the original authors to be inspected with the goal of inclusion in the official software
- Any edited version are only test versions and not permitted to be run as a final product
- Any edited version aren't to be distributed
- Any edited version have the prerelease version set to something that can be distinguished
  from a version used in the original software

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

var script = document.createElement('script');
script.textContent = '(function() { var a = {' +
    'b: function() { if (typeof API !== \'undefined\' && API.enabled) this.c(); else setTimeout($.proxy(this.b,this),100); },' +
    'c: function() { console.log(\'plugCubedLoader v.1.6 enabled!\'); $.getScript(\'http://alpha.plugCubed.net/plugCubed.min.js\'); }' +
'};' +
'a.b(); })()';
document.head.appendChild(script);