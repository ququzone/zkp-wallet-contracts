/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  EmailGuardian,
  EmailGuardianInterface,
} from "../../src/EmailGuardian";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IDkimVerifier",
        name: "dkimVerifier",
        type: "address",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "email",
        type: "bytes32",
      },
    ],
    name: "EmailBinded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "email",
        type: "bytes32",
      },
    ],
    name: "EmailUnbinded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "SignerChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "email",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "bind",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "changeSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "emails",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "email",
        type: "bytes32",
      },
    ],
    name: "getHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nullifierHashes",
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
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "typ",
        type: "string",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "pubkey",
        type: "bytes",
      },
    ],
    name: "subjectHex",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unbind",
    outputs: [
      {
        internalType: "bytes32",
        name: "email",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "server",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "pubkey",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyingSigner",
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
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001c5938038062001c598339810160408190526200003491620000fd565b6200003f3362000094565b6001600160a01b03828116608052600180546001600160a01b03191691831691821790556040517f5719a5656c5cfdaafa148ecf366fd3b0a7fae06449ce2a46225977fb7417e29d90600090a250506200013c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620000fa57600080fd5b50565b600080604083850312156200011157600080fd5b82516200011e81620000e4565b60208401519092506200013181620000e4565b809150509250929050565b608051611af362000166600039600081816108690152818161098e0152610a980152611af36000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80637ecebe001161008c578063b6b2574211610066578063b6b2574214610210578063ba075e0c14610218578063cb2da07c1461022b578063f2fde38b1461024b57600080fd5b80637ecebe00146101bf5780638da5cb5b146101df578063aad2b723146101fd57600080fd5b806323d9ac9b116100bd57806323d9ac9b1461015d578063333b6fb3146101a2578063715018a6146101b757600080fd5b8063060f919b146100e457806317cc915c1461010a5780631fe8c6b61461013d575b600080fd5b6100f76100f2366004611466565b61025e565b6040519081526020015b60405180910390f35b61012d610118366004611490565b60046020526000908152604090205460ff1681565b6040519015158152602001610101565b61015061014b36600461156f565b6102c1565b6040516101019190611632565b60015461017d9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610101565b6101b56101b03660046116a7565b61050a565b005b6101b561066f565b6100f76101cd3660046116f3565b60036020526000908152604090205481565b60005473ffffffffffffffffffffffffffffffffffffffff1661017d565b6101b561020b3660046116f3565b610683565b6100f76106fa565b61012d61022636600461170e565b6107a9565b6100f76102393660046116f3565b60026020526000908152604090205481565b6101b56102593660046116f3565b610c32565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260036020908152604091829020548251468184015280840194909452606084015260808084018590528251808503909101815260a090930190915281519101205b92915050565b60606000825160026102d391906117f1565b67ffffffffffffffff8111156102eb576102eb6114a9565b6040519080825280601f01601f191660200182016040528015610315576020820181803683370190505b5060408051808201909152601081527f3031323334353637383961626364656600000000000000000000000000000000602082015290915060005b84518110156104c85781825186838151811061036e5761036e611808565b0160200151610380919060f81c611866565b8151811061039057610390611808565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016836103c38360026117f1565b815181106103d3576103d3611808565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535081825186838151811061041757610417611808565b0160200151610429919060f81c61187a565b8151811061043957610439611808565b01602001517fff00000000000000000000000000000000000000000000000000000000000000168361046c8360026117f1565b61047790600161188e565b8151811061048757610487611808565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350806104c0816118a1565b915050610350565b50856104d346610ccf565b6104dc87610d8d565b846040516020016104f094939291906118d9565b604051602081830303815290604052925050509392505050565b600061054c610519338661025e565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c91909152603c902090565b905061058e8184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610db092505050565b60015473ffffffffffffffffffffffffffffffffffffffff9081169116146105fd5760405162461bcd60e51b815260206004820152600f60248201527f6572726f72207369676e6174757265000000000000000000000000000000000060448201526064015b60405180910390fd5b336000908152600360205260408120805491610618836118a1565b90915550503360008181526002602052604090819020869055517fcbe6f129c479e90eae19ad4df47cdf0d8edcfe3d9caf30b5e5943efa3004b515906106619087815260200190565b60405180910390a250505050565b610677610dd4565b6106816000610e3b565b565b61068b610dd4565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f5719a5656c5cfdaafa148ecf366fd3b0a7fae06449ce2a46225977fb7417e29d90600090a250565b336000908152600260205260408120549081900361075a5760405162461bcd60e51b815260206004820152601260248201527f656d61696c206e6f742062696e6420796574000000000000000000000000000060448201526064016105f4565b3360008181526002602052604080822091909155517f3e9a4081cf69725b7f0c26855e0b79a6c96a5bb433f3ab6db0cf03aff56aa2649061079e9084815260200190565b60405180910390a290565b60008087876040516107bc929190611930565b604080519182900390912060008181526004602052919091205490915060ff16156108295760405162461bcd60e51b815260206004820152600f60248201527f7573656420656d61696c2064617461000000000000000000000000000000000060448201526064016105f4565b6040517f391c87c800000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063391c87c8906108a0908c908c9060040161196b565b600060405180830381865afa1580156108bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108e59190810190611987565b80516020808301919091203360009081526002909252604090912054919250146109515760405162461bcd60e51b815260206004820152601160248201527f6572726f7220656d61696c206f776e657200000000000000000000000000000060448201526064016105f4565b6040517f5bf48e3a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635bf48e3a906109cb908e908d908d908d908d906004016119fe565b602060405180830381865afa1580156109e8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0c9190611a37565b610a585760405162461bcd60e51b815260206004820152601460248201527f6572726f7220646b696d207369676e617475726500000000000000000000000060448201526064016105f4565b6040517fa3364fd900000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063a3364fd990610acf908d908d9060040161196b565b600060405180830381865afa158015610aec573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b149190810190611987565b9050610b8c6040518060400160405280600281526020017f30310000000000000000000000000000000000000000000000000000000000008152508c88888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506102c192505050565b80519060200120818051906020012014610be85760405162461bcd60e51b815260206004820152601a60248201527f6572726f7220656d61696c2074797065206f72207075626b657900000000000060448201526064016105f4565b5050600090815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155905098975050505050505050565b610c3a610dd4565b73ffffffffffffffffffffffffffffffffffffffff8116610cc35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105f4565b610ccc81610e3b565b50565b60606000610cdc83610eb0565b600101905060008167ffffffffffffffff811115610cfc57610cfc6114a9565b6040519080825280601f01601f191660200182016040528015610d26576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084610d3057509392505050565b60606102bb73ffffffffffffffffffffffffffffffffffffffff83166014610f92565b6000806000610dbf85856111c2565b91509150610dcc81611207565b509392505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106815760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105f4565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610ef9577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310610f25576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610f4357662386f26fc10000830492506010015b6305f5e1008310610f5b576305f5e100830492506008015b6127108310610f6f57612710830492506004015b60648310610f81576064830492506002015b600a83106102bb5760010192915050565b60606000610fa18360026117f1565b610fac90600261188e565b67ffffffffffffffff811115610fc457610fc46114a9565b6040519080825280601f01601f191660200182016040528015610fee576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061102557611025611808565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061108857611088611808565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006110c48460026117f1565b6110cf90600161188e565b90505b600181111561116c577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061111057611110611808565b1a60f81b82828151811061112657611126611808565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c9361116581611a59565b90506110d2565b5083156111bb5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105f4565b9392505050565b60008082516041036111f85760208301516040840151606085015160001a6111ec8782858561136c565b94509450505050611200565b506000905060025b9250929050565b600081600481111561121b5761121b611a8e565b036112235750565b600181600481111561123757611237611a8e565b036112845760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105f4565b600281600481111561129857611298611a8e565b036112e55760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105f4565b60038160048111156112f9576112f9611a8e565b03610ccc5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016105f4565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156113a35750600090506003611434565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156113f7573d6000803e3d6000fd5b5050604051601f19015191505073ffffffffffffffffffffffffffffffffffffffff811661142d57600060019250925050611434565b9150600090505b94509492505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461146157600080fd5b919050565b6000806040838503121561147957600080fd5b6114828361143d565b946020939093013593505050565b6000602082840312156114a257600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611501576115016114a9565b604052919050565b600067ffffffffffffffff821115611523576115236114a9565b50601f01601f191660200190565b600061154461153f84611509565b6114d8565b905082815283838301111561155857600080fd5b828260208301376000602084830101529392505050565b60008060006060848603121561158457600080fd5b833567ffffffffffffffff8082111561159c57600080fd5b818601915086601f8301126115b057600080fd5b6115bf87833560208501611531565b94506115cd6020870161143d565b935060408601359150808211156115e357600080fd5b508401601f810186136115f557600080fd5b61160486823560208401611531565b9150509250925092565b60005b83811015611629578181015183820152602001611611565b50506000910152565b602081526000825180602084015261165181604085016020870161160e565b601f01601f19169190910160400192915050565b60008083601f84011261167757600080fd5b50813567ffffffffffffffff81111561168f57600080fd5b60208301915083602082850101111561120057600080fd5b6000806000604084860312156116bc57600080fd5b83359250602084013567ffffffffffffffff8111156116da57600080fd5b6116e686828701611665565b9497909650939450505050565b60006020828403121561170557600080fd5b6111bb8261143d565b60008060008060008060008060a0898b03121561172a57600080fd5b8835975061173a60208a0161143d565b9650604089013567ffffffffffffffff8082111561175757600080fd5b6117638c838d01611665565b909850965060608b013591508082111561177c57600080fd5b6117888c838d01611665565b909650945060808b01359150808211156117a157600080fd5b506117ae8b828c01611665565b999c989b5096995094979396929594505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820281158282048414176102bb576102bb6117c2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008261187557611875611837565b500490565b60008261188957611889611837565b500690565b808201808211156102bb576102bb6117c2565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036118d2576118d26117c2565b5060010190565b600085516118eb818460208a0161160e565b8551908301906118ff818360208a0161160e565b855191019061191281836020890161160e565b845191019061192581836020880161160e565b019695505050505050565b8183823760009101908152919050565b818352818160208501375060006020828401015260006020601f19601f840116840101905092915050565b60208152600061197f602083018486611940565b949350505050565b60006020828403121561199957600080fd5b815167ffffffffffffffff8111156119b057600080fd5b8201601f810184136119c157600080fd5b80516119cf61153f82611509565b8181528560208385010111156119e457600080fd5b6119f582602083016020860161160e565b95945050505050565b858152606060208201526000611a18606083018688611940565b8281036040840152611a2b818587611940565b98975050505050505050565b600060208284031215611a4957600080fd5b815180151581146111bb57600080fd5b600081611a6857611a686117c2565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220266144d996d1b6338791e8391dc99528165281967ad54b8b61f67ba078d8e6c864736f6c63430008110033";

type EmailGuardianConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmailGuardianConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EmailGuardian__factory extends ContractFactory {
  constructor(...args: EmailGuardianConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    dkimVerifier: PromiseOrValue<string>,
    signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EmailGuardian> {
    return super.deploy(
      dkimVerifier,
      signer,
      overrides || {}
    ) as Promise<EmailGuardian>;
  }
  override getDeployTransaction(
    dkimVerifier: PromiseOrValue<string>,
    signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(dkimVerifier, signer, overrides || {});
  }
  override attach(address: string): EmailGuardian {
    return super.attach(address) as EmailGuardian;
  }
  override connect(signer: Signer): EmailGuardian__factory {
    return super.connect(signer) as EmailGuardian__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmailGuardianInterface {
    return new utils.Interface(_abi) as EmailGuardianInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EmailGuardian {
    return new Contract(address, _abi, signerOrProvider) as EmailGuardian;
  }
}
