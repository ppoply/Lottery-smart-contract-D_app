import Web3 from 'web3';

// binding our instance of web3 with Metamask's 
const web3 = new Web3(window.web3.currentProvider);

export default web3;
