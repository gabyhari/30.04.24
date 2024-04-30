class Calebe {
    constructor (pinterest) {
        this.site = site;
        this.pinterest = pinterest;
    }

    exibirSite () {
        window.open(this.site);
        window.open(this.pinterest);
    }
 }
    var novoObjeto = new Objeto ("link do site que voce escolheu");

    var novoCalebe = new Calebe ("https://br.pinterest.com/pin/580471839499221561/"); 
    novoCalebe.exibirSite()