/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  NFTCollection,
  NFTCollectionInterface,
} from "../../contracts/NFTCollection";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseTokenURI",
        type: "string",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getItems",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f4e4654436f6c6c656374696f6e000000000000000000000000000000000000008152506040518060400160405280600381526020017f49544d0000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000b8565b508060019080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000197565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001b057607f821691505b60208210811415620001c757620001c662000168565b5b50919050565b612a6f80620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636352211e11610097578063b6a46b3b11610066578063b6a46b3b14610284578063b88d4fde146102b4578063c87b56dd146102d0578063e985e9c514610300576100f5565b80636352211e146101ea57806370a082311461021a57806395d89b411461024a578063a22cb46514610268576100f5565b8063095ea7b3116100d3578063095ea7b31461017857806323b872dd14610194578063410d59cc146101b057806342842e0e146101ce576100f5565b806301ffc9a7146100fa57806306fdde031461012a578063081812fc14610148575b600080fd5b610114600480360381019061010f9190611972565b610330565b60405161012191906119ba565b60405180910390f35b610132610412565b60405161013f9190611a6e565b60405180910390f35b610162600480360381019061015d9190611ac6565b6104a4565b60405161016f9190611b34565b60405180910390f35b610192600480360381019061018d9190611b7b565b6104ea565b005b6101ae60048036038101906101a99190611bbb565b610602565b005b6101b8610662565b6040516101c59190611ccc565b60405180910390f35b6101e860048036038101906101e39190611bbb565b610706565b005b61020460048036038101906101ff9190611ac6565b610726565b6040516102119190611b34565b60405180910390f35b610234600480360381019061022f9190611cee565b6107d8565b6040516102419190611d2a565b60405180910390f35b610252610890565b60405161025f9190611a6e565b60405180910390f35b610282600480360381019061027d9190611d71565b610922565b005b61029e60048036038101906102999190611ee6565b610938565b6040516102ab9190611d2a565b60405180910390f35b6102ce60048036038101906102c99190611fd0565b61099d565b005b6102ea60048036038101906102e59190611ac6565b6109ff565b6040516102f79190611a6e565b60405180910390f35b61031a60048036038101906103159190612053565b610b12565b60405161032791906119ba565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103fb57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061040b575061040a82610ba6565b5b9050919050565b606060008054610421906120c2565b80601f016020809104026020016040519081016040528092919081815260200182805461044d906120c2565b801561049a5780601f1061046f5761010080835404028352916020019161049a565b820191906000526020600020905b81548152906001019060200180831161047d57829003601f168201915b5050505050905090565b60006104af82610c10565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104f582610726565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055d90612166565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610585610c5b565b73ffffffffffffffffffffffffffffffffffffffff1614806105b457506105b3816105ae610c5b565b610b12565b5b6105f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ea906121f8565b60405180910390fd5b6105fd8383610c63565b505050565b61061361060d610c5b565b82610d1c565b610652576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106499061228a565b60405180910390fd5b61065d838383610db1565b505050565b606060006106706007611018565b905060008167ffffffffffffffff81111561068e5761068d611dbb565b5b6040519080825280602002602001820160405280156106bc5781602001602082028036833780820191505090505b50905060005b828110156106fd57808282815181106106de576106dd6122aa565b5b60200260200101818152505080806106f590612308565b9150506106c2565b50809250505090565b6107218383836040518060200160405280600081525061099d565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c69061239d565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610849576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108409061242f565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461089f906120c2565b80601f01602080910402602001604051908101604052809291908181526020018280546108cb906120c2565b80156109185780601f106108ed57610100808354040283529160200191610918565b820191906000526020600020905b8154815290600101906020018083116108fb57829003601f168201915b5050505050905090565b61093461092d610c5b565b8383611026565b5050565b6000806109456007611018565b905060008361095383611193565b60405160200161096492919061248b565b604051602081830303815290604052905061097f33836112f4565b61098982826114ce565b6109936007611542565b8192505050919050565b6109ae6109a8610c5b565b83610d1c565b6109ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e49061228a565b60405180910390fd5b6109f984848484611558565b50505050565b6060610a0a82610c10565b6000600660008481526020019081526020016000208054610a2a906120c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610a56906120c2565b8015610aa35780601f10610a7857610100808354040283529160200191610aa3565b820191906000526020600020905b815481529060010190602001808311610a8657829003601f168201915b505050505090506000610ab46115b4565b9050600081511415610aca578192505050610b0d565b600082511115610aff578082604051602001610ae792919061248b565b60405160208183030381529060405292505050610b0d565b610b08846115cb565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610c1981611633565b610c58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4f9061239d565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cd683610726565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d2883610726565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d6a5750610d698185610b12565b5b80610da857508373ffffffffffffffffffffffffffffffffffffffff16610d90846104a4565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dd182610726565b73ffffffffffffffffffffffffffffffffffffffff1614610e27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1e90612521565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8e906125b3565b60405180910390fd5b610ea283838361169f565b610ead600082610c63565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610efd91906125d3565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f549190612607565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110138383836116a4565b505050565b600081600001549050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611095576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108c906126a9565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161118691906119ba565b60405180910390a3505050565b606060008214156111db576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506112ef565b600082905060005b6000821461120d5780806111f690612308565b915050600a8261120691906126f8565b91506111e3565b60008167ffffffffffffffff81111561122957611228611dbb565b5b6040519080825280601f01601f19166020018201604052801561125b5781602001600182028036833780820191505090505b5090505b600085146112e85760018261127491906125d3565b9150600a856112839190612729565b603061128f9190612607565b60f81b8183815181106112a5576112a46122aa565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856112e191906126f8565b945061125f565b8093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135b906127a6565b60405180910390fd5b61136d81611633565b156113ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a490612812565b60405180910390fd5b6113b96000838361169f565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114099190612607565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46114ca600083836116a4565b5050565b6114d782611633565b611516576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150d906128a4565b60405180910390fd5b8060066000848152602001908152602001600020908051906020019061153d929190611863565b505050565b6001816000016000828254019250508190555050565b611563848484610db1565b61156f848484846116a9565b6115ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a590612936565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606115d682610c10565b60006115e06115b4565b90506000815111611600576040518060200160405280600081525061162b565b8061160a84611193565b60405160200161161b92919061248b565b6040516020818303038152906040525b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006116ca8473ffffffffffffffffffffffffffffffffffffffff16611840565b15611833578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026116f3610c5b565b8786866040518563ffffffff1660e01b815260040161171594939291906129ab565b602060405180830381600087803b15801561172f57600080fd5b505af192505050801561176057506040513d601f19601f8201168201806040525081019061175d9190612a0c565b60015b6117e3573d8060008114611790576040519150601f19603f3d011682016040523d82523d6000602084013e611795565b606091505b506000815114156117db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d290612936565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611838565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b82805461186f906120c2565b90600052602060002090601f01602090048101928261189157600085556118d8565b82601f106118aa57805160ff19168380011785556118d8565b828001600101855582156118d8579182015b828111156118d75782518255916020019190600101906118bc565b5b5090506118e591906118e9565b5090565b5b808211156119025760008160009055506001016118ea565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61194f8161191a565b811461195a57600080fd5b50565b60008135905061196c81611946565b92915050565b60006020828403121561198857611987611910565b5b60006119968482850161195d565b91505092915050565b60008115159050919050565b6119b48161199f565b82525050565b60006020820190506119cf60008301846119ab565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611a0f5780820151818401526020810190506119f4565b83811115611a1e576000848401525b50505050565b6000601f19601f8301169050919050565b6000611a40826119d5565b611a4a81856119e0565b9350611a5a8185602086016119f1565b611a6381611a24565b840191505092915050565b60006020820190508181036000830152611a888184611a35565b905092915050565b6000819050919050565b611aa381611a90565b8114611aae57600080fd5b50565b600081359050611ac081611a9a565b92915050565b600060208284031215611adc57611adb611910565b5b6000611aea84828501611ab1565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b1e82611af3565b9050919050565b611b2e81611b13565b82525050565b6000602082019050611b496000830184611b25565b92915050565b611b5881611b13565b8114611b6357600080fd5b50565b600081359050611b7581611b4f565b92915050565b60008060408385031215611b9257611b91611910565b5b6000611ba085828601611b66565b9250506020611bb185828601611ab1565b9150509250929050565b600080600060608486031215611bd457611bd3611910565b5b6000611be286828701611b66565b9350506020611bf386828701611b66565b9250506040611c0486828701611ab1565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611c4381611a90565b82525050565b6000611c558383611c3a565b60208301905092915050565b6000602082019050919050565b6000611c7982611c0e565b611c838185611c19565b9350611c8e83611c2a565b8060005b83811015611cbf578151611ca68882611c49565b9750611cb183611c61565b925050600181019050611c92565b5085935050505092915050565b60006020820190508181036000830152611ce68184611c6e565b905092915050565b600060208284031215611d0457611d03611910565b5b6000611d1284828501611b66565b91505092915050565b611d2481611a90565b82525050565b6000602082019050611d3f6000830184611d1b565b92915050565b611d4e8161199f565b8114611d5957600080fd5b50565b600081359050611d6b81611d45565b92915050565b60008060408385031215611d8857611d87611910565b5b6000611d9685828601611b66565b9250506020611da785828601611d5c565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611df382611a24565b810181811067ffffffffffffffff82111715611e1257611e11611dbb565b5b80604052505050565b6000611e25611906565b9050611e318282611dea565b919050565b600067ffffffffffffffff821115611e5157611e50611dbb565b5b611e5a82611a24565b9050602081019050919050565b82818337600083830152505050565b6000611e89611e8484611e36565b611e1b565b905082815260208101848484011115611ea557611ea4611db6565b5b611eb0848285611e67565b509392505050565b600082601f830112611ecd57611ecc611db1565b5b8135611edd848260208601611e76565b91505092915050565b600060208284031215611efc57611efb611910565b5b600082013567ffffffffffffffff811115611f1a57611f19611915565b5b611f2684828501611eb8565b91505092915050565b600067ffffffffffffffff821115611f4a57611f49611dbb565b5b611f5382611a24565b9050602081019050919050565b6000611f73611f6e84611f2f565b611e1b565b905082815260208101848484011115611f8f57611f8e611db6565b5b611f9a848285611e67565b509392505050565b600082601f830112611fb757611fb6611db1565b5b8135611fc7848260208601611f60565b91505092915050565b60008060008060808587031215611fea57611fe9611910565b5b6000611ff887828801611b66565b945050602061200987828801611b66565b935050604061201a87828801611ab1565b925050606085013567ffffffffffffffff81111561203b5761203a611915565b5b61204787828801611fa2565b91505092959194509250565b6000806040838503121561206a57612069611910565b5b600061207885828601611b66565b925050602061208985828601611b66565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806120da57607f821691505b602082108114156120ee576120ed612093565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006121506021836119e0565b915061215b826120f4565b604082019050919050565b6000602082019050818103600083015261217f81612143565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006121e2603e836119e0565b91506121ed82612186565b604082019050919050565b60006020820190508181036000830152612211816121d5565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612274602e836119e0565b915061227f82612218565b604082019050919050565b600060208201905081810360008301526122a381612267565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061231382611a90565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612346576123456122d9565b5b600182019050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006123876018836119e0565b915061239282612351565b602082019050919050565b600060208201905081810360008301526123b68161237a565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006124196029836119e0565b9150612424826123bd565b604082019050919050565b600060208201905081810360008301526124488161240c565b9050919050565b600081905092915050565b6000612465826119d5565b61246f818561244f565b935061247f8185602086016119f1565b80840191505092915050565b6000612497828561245a565b91506124a3828461245a565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061250b6025836119e0565b9150612516826124af565b604082019050919050565b6000602082019050818103600083015261253a816124fe565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061259d6024836119e0565b91506125a882612541565b604082019050919050565b600060208201905081810360008301526125cc81612590565b9050919050565b60006125de82611a90565b91506125e983611a90565b9250828210156125fc576125fb6122d9565b5b828203905092915050565b600061261282611a90565b915061261d83611a90565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612652576126516122d9565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006126936019836119e0565b915061269e8261265d565b602082019050919050565b600060208201905081810360008301526126c281612686565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061270382611a90565b915061270e83611a90565b92508261271e5761271d6126c9565b5b828204905092915050565b600061273482611a90565b915061273f83611a90565b92508261274f5761274e6126c9565b5b828206905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006127906020836119e0565b915061279b8261275a565b602082019050919050565b600060208201905081810360008301526127bf81612783565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006127fc601c836119e0565b9150612807826127c6565b602082019050919050565b6000602082019050818103600083015261282b816127ef565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b600061288e602e836119e0565b915061289982612832565b604082019050919050565b600060208201905081810360008301526128bd81612881565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006129206032836119e0565b915061292b826128c4565b604082019050919050565b6000602082019050818103600083015261294f81612913565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061297d82612956565b6129878185612961565b93506129978185602086016119f1565b6129a081611a24565b840191505092915050565b60006080820190506129c06000830187611b25565b6129cd6020830186611b25565b6129da6040830185611d1b565b81810360608301526129ec8184612972565b905095945050505050565b600081519050612a0681611946565b92915050565b600060208284031215612a2257612a21611910565b5b6000612a30848285016129f7565b9150509291505056fea2646970667358221220d8cf8d8c2842486cafb33f88b90699915a23eed7a0eb8f9982ffc8756e6a395b64736f6c63430008090033";

type NFTCollectionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTCollectionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTCollection__factory extends ContractFactory {
  constructor(...args: NFTCollectionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTCollection> {
    return super.deploy(overrides || {}) as Promise<NFTCollection>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTCollection {
    return super.attach(address) as NFTCollection;
  }
  override connect(signer: Signer): NFTCollection__factory {
    return super.connect(signer) as NFTCollection__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTCollectionInterface {
    return new utils.Interface(_abi) as NFTCollectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTCollection {
    return new Contract(address, _abi, signerOrProvider) as NFTCollection;
  }
}