import { defineChain } from "viem";
export const beoneToken = defineChain({
    id: 97,
    name: 'Beone',
    nativeCurrency: {
        decimals: 18,
        name: 'Wrapped BOC',
        symbol: 'WBOC'
    },
    rpcUrls: {
        default: {
            http: ['https://beone.com']
        }
    }
})