import { SupportedChainId } from './chains'

export type AddressMap = { [chainId: number]: string }

export const NFT_CONTRACT_ADDRESS: AddressMap = {
  [SupportedChainId.LOCAL]: '',
  [SupportedChainId.ROPSTEN]: '0x760EAF3990ba829FA32379eBB13a6B55041DAFcC',
}
