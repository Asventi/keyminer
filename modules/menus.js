const menu = require('console-menu');
const askQuestion = require('./helper/askQuestion');
const asventitag = require('asventitag');
const normaleth = require('./cracker/eth/normaleth');
const targeteth = require('./cracker/eth/targeteth');

function mainMenu() {
    menu([
        { separator: true },
        //{ hotkey: '1', title: 'BTC' },
        { hotkey: '1', title: 'ETH'},
        //{ hotkey: '3', title: 'SOL' },
        { separator: true },
        { hotkey: '?', title: 'Help' },
        { separator: true },
        { separator: true },
    ], {
        header: 'Main Menu (WIP for btc and sol)',
        border: false,
    }).then(item => {
        if (item) {
            switch (item.title) {
                case "BTC":
                    btcMenu();
                    break;
                case "ETH":
                    ethMenu();
                    break;
                case "SOL":
                    solMenu();
                    break;
                case 'Help':
                    helpMenu();
                    break;
            }
        }
    });
}

const btcMenu = () => {
    menu([
        { separator: true },
        { hotkey: '1', title: 'Normal Mode' },
        { hotkey: '2', title: 'Target Mode'},
        { separator: true },
        { hotkey: '0', title: 'Back' },
        { hotkey: '?', title: 'Help' },
        { separator: true },
        { separator: true },
    ], {
        header: 'BTC Wallet Miner Menu',
        border: false,
    }).then(item => {
        if (item) {
            switch (item.title) {
                case 'Bacck':
                    mainMenu();
                    break;
            }
        }
    });
}

const ethMenu = () => {
    menu([
        { separator: true },
        { hotkey: '1', title: 'Normal Mode' },
        { hotkey: '2', title: 'Target Mode'},
        { separator: true },
        { hotkey: '0', title: 'Back' },
        { hotkey: '?', title: 'Help' },
        { separator: true },
        { separator: true },
    ], {
        header: 'ETH Wallet Miner Menu',
        border: false,
    }).then(async item => {
        if (item) {
            switch (item.title) {
                case 'Back':
                    mainMenu();
                    break;
                case 'Normal Mode':
                    normaleth();
                    break;
                case 'Target Mode':
                    console.clear();
                    asventitag();
                    let target = await askQuestion('Enter the target ETH address:\n');
                    targeteth(target);
                    break;
                case 'Help':
                    helpMenu();
                    break;
            }
        }
    });
}

const solMenu = () => {
    menu([
        { separator: true },
        { hotkey: '1', title: 'Normal Mode' },
        { hotkey: '2', title: 'Target Mode'},
        { separator: true },
        { hotkey: '0', title: 'Back' },
        { hotkey: '?', title: 'Help' },
        { separator: true },
        { separator: true },
    ], {
        header: 'SOL Wallet Miner Menu',
        border: false,
    }).then(item => {
        if (item) {
            switch (item.title) {
                case 'Back':
                    mainMenu();
                    break;
            }
        }
    });
}

const helpMenu = () => {
    menu([
        { separator: true },
        { hotkey: '1', title: 'Normal Mode Help' },
        { hotkey: '2', title: 'Target Mode Help'},
        { separator: true },
        { hotkey: '0', title: 'Back' },
        { separator: true },
        { separator: true },
    ], {
        header: 'Main Help Menu',
        border: false,
    }).then(item => {
        if (item) {
            switch (item.title) {
                case 'Back':
                    mainMenu();
                    break;
                case 'Normal Mode Help':
                    normalHelpMenu();
                    break;
            }
        }
    });
}

const normalHelpMenu = () => {
    menu([
        { separator: true },
        { hotkey: "1", title: 'Normal mode generate ETH wallet by a random private key and then check if the account have a balance.\n'+
        'The program check balance thanks to an API, so you will need to get an API key, i suggest the free ethereum alchemy API'},
        { separator: true },
        { hotkey: '0', title: 'Back' },
        { separator: true },
        { separator: true },
    ], {
        header: 'Normal Mode Help',
        border: false,
    }).then(item => {
        if (item) {
            console.clear();
            asventitag();
            mainMenu();
        }
    });
}

module.exports = mainMenu;