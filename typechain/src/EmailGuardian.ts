/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface EmailGuardianInterface extends utils.Interface {
  functions: {
    "bind(bytes32,bytes)": FunctionFragment;
    "changeSigner(address)": FunctionFragment;
    "emails(address)": FunctionFragment;
    "getHash(address,bytes32)": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "nullifierHashes(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "subjectHex(string,address,bytes)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unbind()": FunctionFragment;
    "verify(bytes32,address,bytes,bytes,bytes)": FunctionFragment;
    "verifyingSigner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bind"
      | "changeSigner"
      | "emails"
      | "getHash"
      | "nonces"
      | "nullifierHashes"
      | "owner"
      | "renounceOwnership"
      | "subjectHex"
      | "transferOwnership"
      | "unbind"
      | "verify"
      | "verifyingSigner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bind",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "emails",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getHash",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "nonces",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "nullifierHashes",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "subjectHex",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unbind", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyingSigner",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "bind", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "emails", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nullifierHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "subjectHex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unbind", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyingSigner",
    data: BytesLike
  ): Result;

  events: {
    "EmailBinded(address,bytes32)": EventFragment;
    "EmailUnbinded(address,bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SignerChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EmailBinded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmailUnbinded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerChanged"): EventFragment;
}

export interface EmailBindedEventObject {
  account: string;
  email: string;
}
export type EmailBindedEvent = TypedEvent<
  [string, string],
  EmailBindedEventObject
>;

export type EmailBindedEventFilter = TypedEventFilter<EmailBindedEvent>;

export interface EmailUnbindedEventObject {
  account: string;
  email: string;
}
export type EmailUnbindedEvent = TypedEvent<
  [string, string],
  EmailUnbindedEventObject
>;

export type EmailUnbindedEventFilter = TypedEventFilter<EmailUnbindedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SignerChangedEventObject {
  signer: string;
}
export type SignerChangedEvent = TypedEvent<[string], SignerChangedEventObject>;

export type SignerChangedEventFilter = TypedEventFilter<SignerChangedEvent>;

export interface EmailGuardian extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EmailGuardianInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bind(
      email: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emails(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getHash(
      account: PromiseOrValue<string>,
      email: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nullifierHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    subjectHex(
      typ: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      pubkey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unbind(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verify(
      server: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      pubkey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyingSigner(overrides?: CallOverrides): Promise<[string]>;
  };

  bind(
    email: PromiseOrValue<BytesLike>,
    signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeSigner(
    signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emails(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getHash(
    account: PromiseOrValue<string>,
    email: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  nonces(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nullifierHashes(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  subjectHex(
    typ: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    pubkey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unbind(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verify(
    server: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    signature: PromiseOrValue<BytesLike>,
    pubkey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyingSigner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    bind(
      email: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeSigner(
      signer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    emails(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getHash(
      account: PromiseOrValue<string>,
      email: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nullifierHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    subjectHex(
      typ: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      pubkey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unbind(overrides?: CallOverrides): Promise<string>;

    verify(
      server: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      pubkey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyingSigner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "EmailBinded(address,bytes32)"(
      account?: PromiseOrValue<string> | null,
      email?: null
    ): EmailBindedEventFilter;
    EmailBinded(
      account?: PromiseOrValue<string> | null,
      email?: null
    ): EmailBindedEventFilter;

    "EmailUnbinded(address,bytes32)"(
      account?: PromiseOrValue<string> | null,
      email?: null
    ): EmailUnbindedEventFilter;
    EmailUnbinded(
      account?: PromiseOrValue<string> | null,
      email?: null
    ): EmailUnbindedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SignerChanged(address)"(
      signer?: PromiseOrValue<string> | null
    ): SignerChangedEventFilter;
    SignerChanged(
      signer?: PromiseOrValue<string> | null
    ): SignerChangedEventFilter;
  };

  estimateGas: {
    bind(
      email: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emails(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHash(
      account: PromiseOrValue<string>,
      email: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nullifierHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    subjectHex(
      typ: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      pubkey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unbind(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verify(
      server: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      pubkey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyingSigner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bind(
      email: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emails(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHash(
      account: PromiseOrValue<string>,
      email: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nullifierHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    subjectHex(
      typ: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      pubkey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unbind(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verify(
      server: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      pubkey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyingSigner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
