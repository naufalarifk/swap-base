import { useMemo } from "react"
import { useAtomValue } from 'jotai'
import { loadable } from 'jotai/utils'




export function useAllTokens(): { [address: string]: ERC20Token } {
    const { chainId } = useActiveChainId()
    const tokenMap = useAtomValue(loadable(combinedTokenMapFromActiveUrlsAtom))
    const userAddedTokens = useUserAddedTokens()
    return useMemo(() => {
        if (tokenMap.state !== 'hasData') return {}
        return (
            userAddedTokens
                // reduce into all ALL_TOKENS filtered by the current chain
                .reduce<{ [address: string]: ERC20Token }>(
                    (tokenMap_, token) => {
                        tokenMap_[token.address] = token
                        return tokenMap_
                    },
                    // must make a copy because reduce modifies the map, and we do not
                    // want to make a copy in every iteration
                    mapWithoutUrls(tokenMap.data, chainId),
                )
        )
    }, [userAddedTokens, tokenMap, chainId])
}