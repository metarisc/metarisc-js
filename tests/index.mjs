import { Metarisc } from "../lib/index.js";

const metarisc = new Metarisc({
    metarisc_url: 'https://testlp7ijwog-mock.functions.fnc.fr-par.scw.cloud/'
});

console.log( await metarisc.poi.getPoi("123456") );