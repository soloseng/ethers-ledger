"use strict";

const { LedgerSigner } = require("./lib");

(async function() {
    const signer = new LedgerSigner(_,"m/44'/52752'/0'/0/0");
    console.log(signer);
    try {
        const sig = await signer.signMessage("Hello World");
        console.log(sig);
    } catch (error) {
        console.log("ERR", error);
    }
})();
