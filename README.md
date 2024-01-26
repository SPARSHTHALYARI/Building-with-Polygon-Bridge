# Building-with-Polygon-Bridge
To complete the Final Challenge, you'll need to follow several steps involving generating a collection of NFTs, storing them on IPFS, deploying them to the Goerli Ethereum Testnet, mapping them to the Polygon network, and performing various operations using Hardhat scripts. Below is a general outline of how you can achieve each step:

### 1. Generate a 5-item collection using DALLE 2 or Midjourney
- Use DALLE 2 or Midjourney to generate a collection of 5 unique items. These items could be images, artwork, or any other type of content.

### 2. Store items on IPFS using pinata.cloud
- Upload the generated items to IPFS using pinata.cloud or any other IPFS pinning service to obtain their IPFS hashes.

### 3. Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
- Write and deploy a smart contract using Solidity that implements either ERC721 or ERC1155 standards.
- Include a function `promptDescription` that returns the prompt used to generate the images.
- Use Hardhat or Truffle for development and deployment.

### 4. Map Your NFT Collection using Polygon network token mapper
- Map your NFT collection to the Polygon network using the token mapper provided by Polygon. This step isn't necessary but can be helpful for interoperability and visualization.

### 5. Write a Hardhat script to batch mint all NFTs
- Write a Hardhat script that allows you to batch mint all NFTs generated in step 1. 
- If you're using ERC721, consider using ERC721Enumerable for efficient enumeration.

### 6. Write a Hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
- Write a Hardhat script that facilitates batch transfer of all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.
- This script should handle approving NFTs for transfer, depositing NFTs to the bridge, and handling any other necessary operations.

### 7. Test balanceOf on Mumbai
- After transferring the NFTs to Polygon Mumbai, write tests to ensure that the `balanceOf` function correctly returns the balance of NFTs for a given address on the Mumbai testnet.


By following these steps, you should be able to successfully complete the Final Challenge and achieve the required objectives. Make sure to test thoroughly and ensure all functionalities are working as expected before finalizing your project.
