(function(){var c="http://analytics.ludei.com/track/static/index.html";var a=function(){var f;var d=document.getElementsByTagName("script");for(var e=0;e<d.length;e++){if(d[e].getAttribute("data-compilation")){f=d[e].getAttribute("data-compilation")}}return f};var b=function(){var e;e=document.createElement("iframe");var d=e.style;d.position="absolute";d.left=d.top="-999px";e.onload=function(){var f=a();e.contentWindow.postMessage(f,c)};e.src=c;if(document.body){document.body.appendChild(e)}else{document.appendChild(e)}};b()})();