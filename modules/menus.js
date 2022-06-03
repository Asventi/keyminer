const menu = require('console-menu');
const normaleth = require('./cracker/eth/normaleth')

const mainMenu = () => {
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
    }).then(item => {
        if (item) {
            switch (item.title) {
                case 'Back':
                    mainMenu();
                    break;
                case 'Normal Mode':
                    normaleth();
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

module.exports = mainMenu;