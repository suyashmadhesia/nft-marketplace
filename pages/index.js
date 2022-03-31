import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';
import { nftaddress, nftmarketaddress } from '../config';
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";

function Home() {

    const [nfts, setNfts] = useState([]);
    const [loadingState, setLoadingState] = useState(true);

    async function loadNfts() {
        const provider = new ethers.providers.JsonRpcProvider();
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider);
        const data = await marketContract.fetchMarketItems();

        const items = await Promise.all(data.map(async (i) => {
            const tokenUri = await tokenContract.tokenURI(i.tokenId);
            const meta = await axios.get(tokenUri);
            let price = ethers.utils.formatEther(i.price.toString(), 'ether');
            let item = {
                price,
                tokenId: i.tokenId.toNumber(),
                image: meta.data.image,
                name: meta.data.name,
                description: meta.data.description,
                seller: i.seller,
                owner: i.owner,
            }
            return item;
        }));
        setNfts(items);
        setLoadingState(true);
    }

    async function buyNft(nft) {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const signer = provider.getSigner();
        const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

        const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');

        const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, { value: price });

        await transaction.wait();

        loadNfts();
    }

    useEffect(() => { }, []);

    if (loadingState && !nfts.length) return (
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-3xl'>
                No items in marketplace
            </h1>
        </div>
    );


    return (
        <div className='flex justify-center  h-screen'></div>
    )
}

export default Home;