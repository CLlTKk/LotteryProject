
const connecWalletButton = document.getElementById("connectWallet");
const participateButton = document.getElementById("participate");
const finishButton = document.getElementById("finishRound");
const currentAddressText = document.getElementById("currentAddress");
const poolText = document.getElementById("pool");
const playersList = document.getElementById("playersList");

connecWalletButton.addEventListener('click', connectWallet);
participateButton.addEventListener('click', participate);
finishButton.addEventListener('click', finishCurrentRound);

let web3 = new Web3(window.ethereum);
let userAddress;


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




const tokenAddress = "0xC461f0834a4d135F92c63d3449fdF670591e59C4";
const tokenABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

const lotteryAddress = "0x1041dB10e1798465FB5F32a48dBF40BdEBaeA1A2";
const lotteryABI = [{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"finishRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getHistory","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"participants","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"random","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winnersAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winnersList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

let tokenContract;
let lotteryContract;

let managerAddress;
let price;

async function connectWallet() {
    if(window.ethereum){
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        userAddress = accounts[0];
        // console.log(accounts[0]);
        web3 = new Web3(Web3.givenProvider);
        currentAddressText.innerText = userAddress;

        managerAddress = await lotteryContract.methods.manager().call();
        
        console.log(userAddress);
        console.log(managerAddress);

        if(userAddress.toLowerCase() === managerAddress.toLowerCase()){
            finishButton.style.display = "block";
            console.log('MANAGER');
        }else{
            console.log('not manager');
        }

        // contract = new web3.eth.Contract(abi, contractAddress);
        // document.getElementById("address").innerText = userAddress;
    }else{
        console.log("Please install Metamask");
    }
}

tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
lotteryContract = new web3.eth.Contract(lotteryABI, lotteryAddress);


async function showInfo() {
    let pool = await lotteryContract.methods.pool().call();
    pool = web3.utils.fromWei(pool, 'ether');
    poolText.innerText = "Пул: " + pool;
    console.log("pool");

    price = await lotteryContract.methods.price().call(); 
}

async function showPLayers(){
    let players = await lotteryContract.methods.getPlayers().call();
    console.log(players);

    playersList.innerText = "";

    players.forEach(element => {
        const el = document.createElement('p');
        el.innerText = map.get(element) + " "+ element;
        playersList.appendChild(el);
    });
}


async function participate(){
    await tokenContract.methods.approve(lotteryAddress, price).send({
        from: userAddress
    });

    console.log("test");

    await lotteryContract.methods.participate().send({
        from: userAddress,
    })
}

async function finishCurrentRound(){
    await lotteryContract.methods.finishRound().send({
        from: userAddress,
    })
}


showInfo();
showPLayers();
setInterval(showInfo, 2000);
setInterval(showPLayers, 2000);









