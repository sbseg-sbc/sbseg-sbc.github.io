

function traducaoPt() {

	    var cadeia = window.location.href,
	    subst = "/en",
	    novoValor    = "/pt",
	    novaCadeia = cadeia.replace(subst, novoValor);
	    window.location =novaCadeia;

	};



function traducaoEn() {

	    var cadeia = window.location.href,
	    subst = "/pt",
	    novoValor    = "/en",
	    novaCadeia = cadeia.replace(subst, novoValor);
	    window.location =novaCadeia;
	  

	};

