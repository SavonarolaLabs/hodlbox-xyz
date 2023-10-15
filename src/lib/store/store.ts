import { fetchContractBoxes } from "$lib/api-explorer/explorer.js";
import { CONTRACT } from "$lib/contract/sellForErg.js";
import { writable, type Writable } from "svelte/store";

export type Token = {
    amount: bigint,
    tokenId: string
}

export type UnconfirmedSale = {
    tokens: Array<Token>
    seller: string
    tx: any
    transactionId: string
    priceInErg: string
}

export const selected_wallet_ergo = writable('');
export const utxos = writable([]);
export const assets = writable([]);

export const offers = writable([]);

export const unconfirmed_sales:Writable<Array<UnconfirmedSale>> = writable([]);

export function loadStoreFromLocalStorage(){
    const ergo_bay_unconfirmed_sales = localStorage.getItem('ergo_bay_unconfirmed_sales')
    if(ergo_bay_unconfirmed_sales){
        unconfirmed_sales.set(JSON.parse(ergo_bay_unconfirmed_sales))
    }
}

export async function loadOffers(){
    const boxes = await fetchContractBoxes(CONTRACT);
    offers.set(boxes);
    removeConfirmedBoxes(boxes);
}

function removeConfirmedBoxes(confirmedBoxes){
    unconfirmed_sales.update(a =>{
        return a.filter(x => !confirmedBoxes.some(box => box.transactionId == x.transactionId))
    })
}

export const ALL_TREASURES = [
    {
        id: 0,
        price: 10,
        img: 'chest/10erg.png',
        cid: 'bafybeihui4r6ylwy2u7crtvhllwy4rnorop3icpgvks5edkyb47f3guziq',
        sha256: 'e8f26588981063e0bd9fd3f4b05b2f42aac53a0c17fd1e265b3f1eef27466b44',
        name: '$200.00 Hodlbox'
    },{
        id: 1,
        price: 100,
        img: 'chest/100erg.png',
        cid: 'bafybeideasgh2la3p4c3pqvwjzcjevyxr6j7wawtqqfa6rc25a6ntogk5i',
        sha256: 'df338cc3cce006d349dd3f4c4ca97bc497733906e20afb178f982e343548989d',
        name: '$2,000.00 Hodlbox'
    },{
        id: 2,
        price: 1000,
        img: 'chest/1000erg.png',
        cid: 'bafybeigkm4chflhvptckwprjmhvps5kcpuzevgjcthak5q435dv4os2x54',
        sha256: '5704bd829777b113026534fd24c8f0e89185090f6cd36b087532173ca9d26e5e',
        name: '$20,000.00 Hodlbox'
    },{
        id: 3,
        price: 10000,
        img: 'chest/10000erg.png',
        cid: 'bafybeicihtoti7v4ul5l4aisp2ccb7feoatoqyjtxw4clw6jk676gfkuhm',
        sha256: 'ed40bd94ca81b53e4fe930be0e0d81e1f3fabf336ba5c26311ec55e633542d59',
        name: '$200,000.00 Hodlbox'
    },{
        id: 4,
        price: 1.27,
        img: 'chest/1.27erg.png',
        cid: 'bafkreia4wvsv6j2ka6s6sso5vkmemmkx4risp5o5i3wk3cbbtkplzcmjpe',
        sha256: '1cb5655f274a07a5e949ddaa98463157e45127f5dd46ecad88219a9ebc898979',
        name: '$25.40 Hodlbox'
    },
]

export const selected_treasure = writable(ALL_TREASURES[0]);