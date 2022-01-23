require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stomach regret screen purity heavy arena metal gentle'; 
let testAccounts = [
"0x235fa6d751b328740b10554942a1a3ce3b1369d4fd55c881cc8cccb50854d8a1",
"0xac1af4f0c13007d6a08072624b892d43eb8d5dd39ac56518eafcd54a0a3348a5",
"0xf7b6b46d420768ab555c6aa1453a573295703c9786198f6e5796b05406b2d801",
"0x331ba0deebcd218ed496bb7efe0f291f8593d70b401cb01a7d2e480450d382a1",
"0xfc83839531b6f88395f7c3c0c4152d2634a177368a08a081faf7106113018f06",
"0x163ccc87c2cbb5d3bad48b74e0bf6b673c33b1a6d32e8a5468b8421429be34b2",
"0x4eb727d984df2c72a87bf8dda594bf67a9c82bf00518977906876a8de3b552d7",
"0xa16a8d8145ff4de4aa10129ee6e1a475e7a8f7d3cb4d99bac8853d1eabd6b8ed",
"0x974ff9dec7af77c98fabd18ccd3e80f588695fc163c40066618a6a315951da82",
"0xc52c10283917183a0a7167e124f5cd3925873c74c06a64f6f97b3bdf7f220561"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


