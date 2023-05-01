window.MathJax = {
    tex: {
    inlineMath: [['$\\', '$'], ['$', '$'], ['\\(', '\\) ']],
    packages: { '[+]': ['mhchem'] } //加载化学插件 如果只是数学可以不用加
    },
    loader: { load: ['[tex]/mhchem'] },
    tex2jax: {
      inlineMath: [ ["\\(","\\)"] ],
      displayMath: [ ["\\[","\\]"] ]
    },
    TeX: {
      TagSide: "right",
      TagIndent: ".8em",
      MultLineWidth: "85%",
      equationNumbers: {
        autoNumber: "AMS",
      },
      unicode: {
        fonts: "STIXGeneral,'Arial Unicode MS'"
      }
    },
    showProcessingMessages: false,
    messageStyle: "none"
  };
window.addEventListener('load', function() { 
    var p=localStorage.getItem("data-md-color-primary");
    if (p){
        document.body.setAttribute('data-md-color-primary',p);
    }
    var a=localStorage.getItem('data-md-color-accent');
    if (a){
        document.body.setAttribute('data-md-color-accent',a);
    }
    var s = localStorage.getItem('data-md-color-scheme');
    if (s) {
        document.body.setAttribute('data-md-color-scheme', s);
    }

}, false);
