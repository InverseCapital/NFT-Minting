import { useWeb3Context } from '@contexts/Web3Provider'
import { useCollectionContract } from '@hooks/useContract'
import { InjectedConnector } from '@web3-react/injected-connector'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PageWithLayout } from 'types'

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    3, // Ropsten
  ],
})

interface Metadata {
  name: string
  description: string
  image: string
}

interface Item {
  id: number
  metadata: Metadata
}

const HomePage: PageWithLayout = () => {
  const { connect, active, account, chainId } = useWeb3Context()
  const contract = useCollectionContract()

  const [items, setItems] = useState<Item[]>([])

  console.log(active)

  useEffect(() => {
    if (!contract) return

    const getItems = async () => {
      const itemIds = await contract.getItems()
      const items: Item[] = []

      for (const id of itemIds) {
        const tokenUri = await contract.tokenURI(id)
        const res = await axios.get<Metadata>(tokenUri)
        items.push({
          id: id.toNumber(),
          metadata: res.data,
        })
      }

      setItems(items)
    }

    getItems()
  }, [contract])

  return (
    <div className="m-4 text-center">
      {active ? (
        <div className="font-bold text-3xl">Connected: {account}</div>
      ) : (
        <button
          onClick={connect}
          className="bg-blue-600 py-3 px-6 rounded-full text-white"
        >
          Connect
        </button>
      )}
      {chainId !== 3 && (
        <p className="text-red-600 font-bold mt-4">
          Please switch to Ropsten network
        </p>
      )}
      <h2 className="font-bold text-3xl my-8">NFTs: </h2>
      <div className="flex flex-col gap-6 mt-20">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-200 p-4 rounded-xl">
            <h4 className="font-bold text-2xl">{item.metadata.name}</h4>
            <p>{item.metadata.description}</p>

            <Image
              src={item.metadata.image}
              alt="nft"
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
