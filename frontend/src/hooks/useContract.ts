import { useMemo } from 'react'
import { ContractInterface, ethers, providers } from 'ethers'
import { Contract } from '@ethersproject/contracts'

import { NFTCollection } from '@abis/types'
import NFTCollectionAbi from '@abis/contracts/NFTCollection.json'
import { AddressMap, NFT_CONTRACT_ADDRESS } from '@constants/addresses'
import { useWeb3React } from '@web3-react/core'

const useContract = <T extends Contract = Contract>(
  addressOrAddressMap: string | AddressMap,
  abi: ContractInterface,
  withSigner = true,
): T | null => {
  const {
    library: provider,
    account,
    chainId,
  } = useWeb3React<providers.Web3Provider>()

  const contract = useMemo(() => {
    if (!provider || !chainId) return null

    const address =
      typeof addressOrAddressMap === 'string'
        ? addressOrAddressMap
        : addressOrAddressMap[chainId]

    const providerOrSigner =
      withSigner && account ? provider.getSigner() : provider

    try {
      return new ethers.Contract(address, abi, providerOrSigner) as T
    } catch (error) {
      return null
    }
  }, [addressOrAddressMap, abi, provider, withSigner, account, chainId])

  return contract
}

export default useContract

export const useCollectionContract = (withSigner = true) => {
  return useContract<NFTCollection>(
    NFT_CONTRACT_ADDRESS,
    NFTCollectionAbi.abi,
    withSigner,
  )
}
