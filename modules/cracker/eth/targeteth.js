const Web3 = require('web3');
const readline = require('readline');
const asventitag = require('asventitag');

const web3 = new Web3();

const main = (targetAdress) => {
    let found = false;
    asventitag();

    while(!found) {
        let privateKey = web3.utils.randomHex(32).substring(2);
        let account = web3.eth.accounts.privateKeyToAccount(privateKey);
        console.clear();
        asventitag();
        console.log(`Checking: ${privateKey}\nTarget = ${targetAdress}\n`);

        if(account.address === targetAdress) {
            console.log(`Found key for address : ${account.address}`);
            console.log(`Key = ${privateKey}`);

            found = true;
        }
    }
    while (true);
}

module.exports = main;