const readline = require('readline');
const asventitag = require("asventitag");
const Web3 = require("web3");
const askQuestion = require("../../helper/askQuestion")

async function main() {
    let provider = "";

    provider = await askQuestion("Enter your ethereum http provider and press Enter: \n");
    console.clear();
    asventitag();

    const web3 = new Web3(new Web3.providers.HttpProvider(provider));
    let found = false;

    while (!found) {
        let privatekey = web3.utils.randomHex(32).substring(2);
        let account = web3.eth.accounts.privateKeyToAccount(privatekey);
        let balance = await web3.eth.getBalance(account.address)
            .then(res => {return web3.utils.fromWei(res)})

        console.clear();
        asventitag();
        console.log(`Checking: ${account.address}      Balance = ${balance} ETH\n`);

        if (balance !== "0") {
            console.log(`Found account with ${balance} ETH\n`);
            console.log(`Account adress: ${account.address}`);
            console.log(`Account private key: ${account.privateKey}`);

            found = true;
        }

    }

    while(true);
}

module.exports = main;