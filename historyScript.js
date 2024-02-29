let web3 = new Web3(window.ethereum);

const lotteryList = document.getElementById('historyList');

const lotteryAddress = "0x1041dB10e1798465FB5F32a48dBF40BdEBaeA1A2";
const lotteryABI = [{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"finishRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getHistory","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"participants","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"random","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winnersAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winnersList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

let lotteryContract;


lotteryContract = new web3.eth.Contract(lotteryABI, lotteryAddress);

let map = new Map();

map.set("0xb0692d4213A9E78898D9AF6D59f05a981E308666", "Tima");
map.set("0x439CF876CD85a0bF120891Fc56755B1493124c79", "Dima");
map.set("0x4E4006Dbe0522CfAa47392a2B2716712A611e678", "Nauan");
map.set("0x84EBb8cefb5d2ba912a860FE2C7831B6ED43cc20", "Lin");
map.set("0xB973BfDC9597f249Fd34f695F397857AE0d2b04A", "Nurs");
map.set("0x7F41860Ac5DDb72ef6cE9D423FD8De2A59c05C0f", "Juldyz");
map.set("0x5a92C2fD6e28bafE9c37aB228e6cca4F9b0E43b9", "Billy");
map.set("0x555DC7fF4b721BE6bC4f010545427c27Fe371950", "Beka");
map.set("0x5F9e787E146cdF86342D25e00452Fc3be6Fe62a6", "Edige");

async function getHistory(){
    const history = await lotteryContract.methods.getHistory().call();

    lotteryList.innerText = "";

    for(let i=0; i<history[0].length; i++){
        const el = document.createElement('p');
        let winAmount = web3.utils.fromWei(history[1][i], "ether");
        el.innerText = map.get(history[0][i]) +" "+  history[0][i] + " " + winAmount + " LIN";
        el.style.fontSize = "18px";
        lotteryList.appendChild(el);
    }
}


getHistory();
setInterval(getHistory, 5000);

