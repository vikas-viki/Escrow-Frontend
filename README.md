#  Escrow 3.0

<code>
<img width="30" src="https://web3-escrow.netlify.app/assets/logo-3321b4b6.png">
</code>

**`Escrow 3.o helps you to easily experience hassle-free transactions with web3 powered escrow platform.`**

### See live: https://web3-escrow.netlify.app/ 

## How it works ?
1.      The seller lists their product with the required details and a fixed price in dollars, unaffected by changes in the ETH price 📃.
2.      The buyer purchases the product by paying the equivalent amount in ETH (Ethereum) and provides the address of the product inspector (approver) 🛒.
3.      The approver inspects the product and approves it as Good if it meets the requirements. If not, it will be approved as Not Good, here 🔍.
4. 
        a) If the product is approved as Good, the deposited amount will be sent to the seller 🟩.
        b) If the product is approved as Not Good, the deposited amount will be sent back to the buyer 🟥.
        
        That's how simple it is 🤗!

## Packages used

1. **`Backend`**
    - Solidity (smart contract).
    - Chainlink oracle (for real time ethers price).
    - Hardhat (for testing).
2. **`Frontend`**
    - React+vite (for frontend).
    - tailwindcss (for css design).
    - react-router-dom (for routing).
    - ethers (for blockchain interaction).
    - aos (to animate on scroll).
