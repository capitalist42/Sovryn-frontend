import { ABI } from '@drizzle/store/types/IContract';
import { Asset } from '../../types/asset';

interface ContractInterface {
  address: string;
  abi: ABI[] | any;
}

interface MinMax {
  min: number;
  max: number;
}

export class AssetDetails {
  constructor(
    public asset: Asset,
    public symbol: string,
    public name: string,
    public decimals: number,
    public tokenContract: ContractInterface,
    public lendingContract: ContractInterface,
    public logoSvg: string,
    public lendingLimits: MinMax,
  ) {}

  public getTokenContractName(): string {
    return this.name + '_token';
  }

  public getLendingContractName(): string {
    return this.name + '_lending';
  }

  public getTokenContractAddress(): string {
    return this.tokenContract.address;
  }

  public getLendingContractAddress(): string {
    return this.lendingContract.address;
  }
}