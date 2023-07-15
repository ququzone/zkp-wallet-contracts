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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IEmailGuardianInterface extends utils.Interface {
  functions: {
    "validateDKIM(bytes32,bytes32,bytes,bytes,bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "validateDKIM"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "validateDKIM",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "validateDKIM",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IEmailGuardian extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IEmailGuardianInterface;

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
    validateDKIM(
      server: PromiseOrValue<BytesLike>,
      email: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  validateDKIM(
    server: PromiseOrValue<BytesLike>,
    email: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    signature: PromiseOrValue<BytesLike>,
    target: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    validateDKIM(
      server: PromiseOrValue<BytesLike>,
      email: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    validateDKIM(
      server: PromiseOrValue<BytesLike>,
      email: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    validateDKIM(
      server: PromiseOrValue<BytesLike>,
      email: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}