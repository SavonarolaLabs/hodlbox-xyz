import { fetchContractBoxes } from "$lib/api-explorer/explorer.js";
import { CONTRACT_HODL, CONTRACT_HODLERG3, CONTRACT_MEME } from "$lib/contract/compile.js";
import { BITMASKS_DEV_UI_PK, ERDOGE_DEV_UI_PK, ERDOGE_TARGET_PRICE, ERDOGE_TOKEN_ID, HODLBOX_DEV_UI_PK, HODLBOX_TARGET_PRICE, HODLERG3_TOKEN_ID, WALRUS_DEV_UI_PK } from "$lib/contract/settings.js";
import { ErgoAddress, SGroupElement, SSigmaProp } from "@fleet-sdk/core";
import { writable, type Writable } from "svelte/store";
import { first } from "@fleet-sdk/common"


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

export type Treasure = {
    id: number,
    price: number,
    priceCurrency?: string,
    targetRateInNanoErg?: bigint,
    img: string,
    cid: string,
    sha256: string,
    name: string,
    unlockRate?: string,
    unlockDate?: string,
    unlockHeight?: number,
}

export const selected_wallet_ergo = writable('');
export const utxos = writable([]);
export const assets = writable([]);

export const offers = writable([]);

export const unconfirmed_mints: Writable<Array<UnconfirmedSale>> = writable([]);

export function loadStoreFromLocalStorage() {
    const ergo_bay_unconfirmed_mints = localStorage.getItem('ergo_bay_unconfirmed_mints')
    if (ergo_bay_unconfirmed_mints) {
        unconfirmed_mints.set(JSON.parse(ergo_bay_unconfirmed_mints))
    }
}

async function loadERGOffers() {
    const boxes = await fetchContractBoxes(CONTRACT_HODL);
    boxes.forEach(b => {
        let project = null;
        if(b.additionalRegisters.R7.serializedValue == SSigmaProp(SGroupElement(first(ErgoAddress.fromBase58(HODLBOX_DEV_UI_PK).getPublicKeys()))).toHex()){
            project = 'hodlbox'
        }
        if(b.additionalRegisters.R7.serializedValue == SSigmaProp(SGroupElement(first(ErgoAddress.fromBase58(BITMASKS_DEV_UI_PK).getPublicKeys()))).toHex()){
            project = 'bitmasks'
        }
        if(b.additionalRegisters.R7.serializedValue == SSigmaProp(SGroupElement(first(ErgoAddress.fromBase58(WALRUS_DEV_UI_PK).getPublicKeys()))).toHex()){
            project = 'walrus'
        }
        if(project == 'hodlbox'){
            if (b.assets?.length > 0 && b.assets[0].tokenId == HODLERG3_TOKEN_ID) {
                b.treasure = HODLBOX_TREASURES.find(t => b.assets[0].amount == t.price * 10 ** 9)
                b.currency = 'hodlERG3';
            } else {
                if (b.value > 1 * 10 ** 9) {
                    b.treasure = HODLBOX_TREASURES.find(t => b.value == t.price * 10 ** 9)
                    b.currency = 'ERG';
                }
            }
            b.hodler = ErgoAddress.fromPublicKey(b.additionalRegisters.R6.serializedValue.substring(4)).toString()
        }
        if(project == 'bitmasks'){
            if (b.assets?.length > 0 && b.assets[0].tokenId == HODLERG3_TOKEN_ID) {
                b.treasure = BITMASKS_TREASURES.find(t => b.assets[0].amount == t.price * 10 ** 9)
                b.currency = 'hodlERG3';
            } else {
                if (b.value > 1 * 10 ** 9) {
                    b.treasure = BITMASKS_TREASURES.find(t => b.value == t.price * 10 ** 9)
                    b.currency = 'ERG';
                }
            }
            b.hodler = ErgoAddress.fromPublicKey(b.additionalRegisters.R6.serializedValue.substring(4)).toString()
        }
        if(project == 'walrus'){
            if (b.assets?.length > 0 && b.assets[0].tokenId == HODLERG3_TOKEN_ID) {
                b.treasure = WALRUS_TREASURES.find(t => b.assets[0].amount == t.price * 10 ** 9)
                b.currency = 'hodlERG3';
            } else {
                if (b.value > 1 * 10 ** 9) {
                    b.treasure = WALRUS_TREASURES.find(t => b.value == t.price * 10 ** 9)
                    b.currency = 'ERG';
                }
            }
            b.hodler = ErgoAddress.fromPublicKey(b.additionalRegisters.R6.serializedValue.substring(4)).toString()
        }
    })

    offers.update(arr => {
        return [...boxes, ...arr]
    });
    removeConfirmedBoxes(boxes);
}

async function loadHodlERG3Offers() {
    const boxes = await fetchContractBoxes(CONTRACT_HODLERG3);
    boxes.forEach(b => {
        let project = null;
        if(b.additionalRegisters.R7.serializedValue == SSigmaProp(SGroupElement(first(ErgoAddress.fromBase58(HODLBOX_DEV_UI_PK).getPublicKeys()))).toHex()){
            project = 'hodlbox'
        }
        if(b.additionalRegisters.R7.serializedValue == SSigmaProp(SGroupElement(first(ErgoAddress.fromBase58(BITMASKS_DEV_UI_PK).getPublicKeys()))).toHex()){
            project = 'bitmasks'
        }
        if(b.additionalRegisters.R7.serializedValue == SSigmaProp(SGroupElement(first(ErgoAddress.fromBase58(WALRUS_DEV_UI_PK).getPublicKeys()))).toHex()){
            project = 'walrus'
        }
        if(project == 'hodlbox'){
            if (b.assets?.length > 0 && b.assets[0].tokenId == HODLERG3_TOKEN_ID) {
                b.treasure = HODLBOX_TREASURES.find(t => b.assets[0].amount == t.price * 10 ** 9)
                b.currency = 'hodlERG3';
            } else {
                if (b.value > 1 * 10 ** 9) {
                    b.treasure = HODLBOX_TREASURES.find(t => b.value == t.price * 10 ** 9)
                    b.currency = 'ERG';
                }
            }
            b.hodler = ErgoAddress.fromPublicKey(b.additionalRegisters.R6.serializedValue.substring(4)).toString()
        }
        if(project == 'bitmasks'){
            if (b.assets?.length > 0 && b.assets[0].tokenId == HODLERG3_TOKEN_ID) {
                b.treasure = BITMASKS_TREASURES.find(t => b.assets[0].amount == t.price * 10 ** 9)
                b.currency = 'hodlERG3';
            } else {
                if (b.value > 1 * 10 ** 9) {
                    b.treasure = BITMASKS_TREASURES.find(t => b.value == t.price * 10 ** 9)
                    b.currency = 'ERG';
                }
            }
            b.hodler = ErgoAddress.fromPublicKey(b.additionalRegisters.R6.serializedValue.substring(4)).toString()
        }
        if(project == 'walrus'){
            if (b.assets?.length > 0 && b.assets[0].tokenId == HODLERG3_TOKEN_ID) {
                b.treasure = WALRUS_TREASURES.find(t => b.assets[0].amount == t.price * 10 ** 9)
                b.currency = 'hodlERG3';
            } else {
                if (b.value > 1 * 10 ** 9) {
                    b.treasure = WALRUS_TREASURES.find(t => b.value == t.price * 10 ** 9)
                    b.currency = 'ERG';
                }
            }
            b.hodler = ErgoAddress.fromPublicKey(b.additionalRegisters.R6.serializedValue.substring(4)).toString()
        }
        
    })

    offers.set(boxes);
    removeConfirmedBoxes(boxes);
}

async function loadMemeOffers() {
    const boxes = await fetchContractBoxes(CONTRACT_MEME);
    boxes.forEach(b => {
        let project = null;
        if(b.assets[0]?.tokenId == ERDOGE_TOKEN_ID){
            project = 'erdoge'
        }
        if(project == 'erdoge'){
                b.treasure = ERDOGE_TREASURES[0];
                b.currency = 'Erdoge';
                b.hodler = ErgoAddress.fromPublicKey(b.additionalRegisters.R6.serializedValue.substring(4)).toString()
        }
    })

    offers.update(arr => {
        return [...boxes, ...arr]
    });
    removeConfirmedBoxes(boxes);
}

export async function loadOffers() {
    await loadHodlERG3Offers();
    await loadERGOffers();
    await loadMemeOffers();
}

function removeConfirmedBoxes(confirmedBoxes) {
    unconfirmed_mints.update(a => {
        return a.filter(x => !confirmedBoxes.some(box => box.transactionId == x.transactionId))
    })
}

export const WALRUS_TREASURES = [
    {
        id: 0,
        price: 10,
        img: 'chest/walrus/10erg.png',
        cid: 'bafybeiafladhfnbmt242kookpyvuvaemaimpuak5qb7unff5e3b57kmkhi',
        sha256: '61d1c1d07543bd8908bcb35ff0f57b6d03e7e4109d64cb16607f6ec5c88b7550',
        name: '$300.00 Walrus Chest'
    }, {
        id: 1,
        price: 100,
        img: 'chest/walrus/100erg.png',
        cid: 'bafybeifdavbqmkn6hkznr7lwgwyk4i73uysskzc3slpqjvcznluteerxeq',
        sha256: 'f52ef55eb5962b3e13fccc715ec83d00fcb4c7b653eb31a0d61ad1a583c594c9',
        name: '$3,000.00 Walrus Chest'
    }, {
        id: 2,
        price: 1000,
        img: 'chest/walrus/1000erg.png',
        cid: 'bafybeie7hbpqbzl7trvfc2cupiouzxkhkibzhbbvq47iaw4qr5gmm4dqmq',
        sha256: 'b59dc966c57f20776e6492547b1fb5f6aaaaaa4116af61f42a4993909d40c8b1',
        name: '$30,000.00 Walrus Chest'
    }, {
        id: 3,
        price: 10000,
        img: 'chest/walrus/10000erg.png',
        cid: 'bafybeibab375c27tp62jxgbbwvfnz5uhgzknyyrda2tpzmz6gxc6sznsgi',
        sha256: '74a0982116b6a946b5f5430d19f8ae77521fe7c7ce8337214c4df25b3b838088',
        name: '$300,000.00 Walrus Chest'
    }
]

export const BITMASKS_TREASURES = [
    {
        id: 0,
        price: 10,
        img: 'chest/bitmasks/10erg.png',
        cid: 'bafybeigqt6lkj54j7yefwhnlvf3zxu4u6stb2ekqeqw4edsn5tp7ojrjje',
        sha256: 'd6681a167927bbe307c4720b7714f2af0faa235fef2cb8d749b3ce6b20de83cc',
        name: '$600.00 Bitbox'
    }, {
        id: 1,
        price: 100,
        img: 'chest/bitmasks/100erg.png',
        cid: 'bafybeidpmf2y446z2eoc2hwpb7fdvihvlyszrasqsd5vm6f2i5vtydpbem',
        sha256: '988799f887981277f1ad6bd6069fdd942d8399099124fb04535f7fe586bb5791',
        name: '$6,000.00 Bitbox'
    }, {
        id: 2,
        price: 1000,
        img: 'chest/bitmasks/1000erg.png',
        cid: 'bafybeihtnoq4lzvklzoacz2sgoporvl5tf42prpnpkf2ue22krpezesxkq',
        sha256: 'a6bd98171412dc07e52a46d32b2064f7c65ed3a0dce4b824b7cfafced7790ef6',
        name: '$60,000.00 Bitbox'
    }, {
        id: 3,
        price: 10000,
        img: 'chest/bitmasks/10000erg.png',
        cid: 'bafybeiemvri47zknjmtzjfxd3cxlu6pxyhsnxrwsx6wq72w72gmq52qkgm',
        sha256: '77443821d856013b7d6bb60c638131ff7324b82f2864e659434c7c0a7967ef13',
        name: '$600,000.00 Bitbox'
    }
]

export const HODLBOX_TREASURES = [
    {
        id: 0,
        price: 10,
        img: 'chest/10erg.png',
        cid: 'bafybeihui4r6ylwy2u7crtvhllwy4rnorop3icpgvks5edkyb47f3guziq',
        sha256: 'e8f26588981063e0bd9fd3f4b05b2f42aac53a0c17fd1e265b3f1eef27466b44',
        name: '$200.00 Hodlbox'
    }, {
        id: 1,
        price: 100,
        img: 'chest/100erg.png',
        cid: 'bafybeideasgh2la3p4c3pqvwjzcjevyxr6j7wawtqqfa6rc25a6ntogk5i',
        sha256: 'df338cc3cce006d349dd3f4c4ca97bc497733906e20afb178f982e343548989d',
        name: '$2,000.00 Hodlbox'
    }, {
        id: 2,
        price: 1000,
        img: 'chest/1000erg.png',
        cid: 'bafybeigkm4chflhvptckwprjmhvps5kcpuzevgjcthak5q435dv4os2x54',
        sha256: '5704bd829777b113026534fd24c8f0e89185090f6cd36b087532173ca9d26e5e',
        name: '$20,000.00 Hodlbox'
    }, {
        id: 3,
        price: 10000,
        img: 'chest/10000erg.png',
        cid: 'bafybeicihtoti7v4ul5l4aisp2ccb7feoatoqyjtxw4clw6jk676gfkuhm',
        sha256: 'ed40bd94ca81b53e4fe930be0e0d81e1f3fabf336ba5c26311ec55e633542d59',
        name: '$200,000.00 Hodlbox'
    }, {
        id: 4,
        price: 1.27,
        img: 'chest/1.27erg.png',
        cid: 'bafkreia4wvsv6j2ka6s6sso5vkmemmkx4risp5o5i3wk3cbbtkplzcmjpe',
        sha256: '1cb5655f274a07a5e949ddaa98463157e45127f5dd46ecad88219a9ebc898979',
        name: '$25.40 Hodlbox'
    },
]

export const ERDOGE_TREASURES = [
    {
        id: 0,
        price: 1000,
        priceCurrency: "Erdoge",
        targetRateInNanoErg: 5_000_000_000n,
        img: 'chest/erdoge/5000erg.png',
        cid: 'bafybeihui4r6ylwy2u7crtvhllwy4rnorop3icpgvks5edkyb47f3guziq',
        sha256: '4142a557cf9905610c69a6defa14be6d09495090e8f65db9aeda3a0dd236f009',
        name: '5,000.00 ERG Hodlbox',
        unlockRate: '5 ERG/Erdoge',
        unlockDate: '2028-04-21',
        unlockHeight: 2299152,
    }
]


export const all_treasures = writable(ERDOGE_TREASURES)
export const dev_ui_pk = writable(ERDOGE_DEV_UI_PK)
export const target_price = writable(ERDOGE_TARGET_PRICE)

const CURRENCIES = [
    'ERG',
    'hodlERG3'
]

export const selected_treasure: Writable<Treasure> = writable(ERDOGE_TREASURES[0]);
export const selected_currency: Writable<string> = writable(CURRENCIES[0]);