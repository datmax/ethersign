const ethers = require("ethers");


//SEEEEH
const privateKey = "insert key"; 
const msg = "ciao";
const signer = new ethers.Wallet(privateKey)
signer.signMessage("ciao").then((msg) =>{
    console.log(msg)
})
