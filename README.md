# Готовая к деплою NFT коллекция | HardHat

Вы можете использовать этот проект для создания своей NFT коллекции в сети BNB Сhain Testen


## Инструкция

### 1. Склонируйте репозиторий и установите зависимости

```shell
git clone git@github.com:kurzan/mint_nft_hardhat.git
cd mint_nft_hardhat
npm install
```

### 2. Настройки приватности .env

В главной директории создайте файл 
```shell
.env
```
Укажите в нем приватный ключ от кошелька для деплоя контрака и etherscan api key для верификации контракта в сети BNB Chain Testnet
```shell
TBNB_PRIVATE_KEY = 'your private key'
ETHERSCAN_API = 'you api key from BNBScan'
```

### 3. Настройте свою NFT коллекцию

В файле <b>/contacts/NFT.sol</b> измените нужные вам параметры

```shell
uint256 maxSupply = 10; // Сколько всего NFT планируется выпустить
uint256 cost = 0.001 ether; //0.001 BNB цена за 1 NFT
string baseURI = "ipfs://QmeB6E2pJJwb3MX6kQ1WZb7DkjWnSqU7JfQWE2CP9CpBUY/"; // Базовый URI, где хранятся мета-данные вашей коллекции


    constructor() ERC721("Smoke Cat", "SMCT") {} // Smoke Cat - название коллекции, SMCT - тикер токена
```

### 3. Деплой коллекции в сети BNB Chain Testnet

Выполните команду 
```shell
npx hardhat run scripts/deploy.js --network tbnb
```


<b>Примите поздравления, ваша коллекция размещена в блокчейне!
