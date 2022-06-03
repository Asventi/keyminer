const readline = require('readline');
const asventitag = require("asventitag");
const Web3 = require("web3");


async function main() {
    let provider = "";
    function askQuestion(query) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false,
        });

        return new Promise(resolve => rl.question(query, ans => {
            rl.close();
            resolve(ans);
        }))
    }

    provider = await askQuestion("Enter your ethereum http provider and press Enter: \n");
    console.clear();
    asventitag();

    const web3 = new Web3(new Web3.providers.HttpProvider(provider));
    let found = false;

    while (!found) {
        let privatekey = web3.utils.randomHex(32).substring(2);
        let account = web3.eth.accounts.privateKeyToAccount(privatekey);
        let balance = await web3.eth.getBalance(account.address);
        balance = web3.utils.fromWei(balance);

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