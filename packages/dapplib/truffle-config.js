require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen foot ecology rescue rural misery grace define army gentle'; 
let testAccounts = [
"0xf222aba48075ec63a663625c5d63d927e151359c38300fc03aff5778d0a5a366",
"0x7bec3a264307a16f006a49a1679c33c54846948b476761c6ca23896fc632fdd7",
"0x0c4ec0a1f9eb62ea2b955ae75b79a3b2aa2f384416fef1e831bc086840e408f3",
"0x4c6340b95c4ffbebb3c09306f969b791fd56c3a653d3979735e8b851aa1d47dd",
"0x626d4af64ee75e434057ad98a8404e9c40ee5bf51cffc964dbf843d1c92a7f3e",
"0x901ae1ee868c76ce5ead52e4e89f03dd60c18d8aa9fe86604f401efd6058e9bc",
"0x4245472c67cb403776f132d8b445810803076aad72681198971e3edb469b987f",
"0xef5fabf217a68ede02977c6250f87d668b3c5c67e1ef11c6003b5a3e91e4687c",
"0xe2084a4153444418894691a41a06875f4035b6de967fc0e69441be579c54b63a",
"0xe97fe81ab26b64162ccb7e70d19b0a77968e992a0373626f5dfae1dfbcd43395"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

