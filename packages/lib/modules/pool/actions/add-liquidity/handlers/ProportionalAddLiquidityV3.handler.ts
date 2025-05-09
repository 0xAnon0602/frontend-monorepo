import { TransactionConfig } from '@repo/lib/modules/web3/contracts/contract.types'
import { AddLiquidity, AddLiquidityV3BuildCallInput } from '@balancer/sdk'
import { SdkBuildAddLiquidityInput } from '../add-liquidity.types'
import { BaseProportionalAddLiquidityHandler } from './BaseProportionalAddLiquidity.handler'
import { constructBaseBuildCallInput } from './add-liquidity.utils'

export class ProportionalAddLiquidityHandlerV3 extends BaseProportionalAddLiquidityHandler {
  public async buildCallData({
    humanAmountsIn,
    slippagePercent,
    queryOutput,
    account,
    permit2,
  }: SdkBuildAddLiquidityInput): Promise<TransactionConfig> {
    const addLiquidity = new AddLiquidity()

    const buildCallParams: AddLiquidityV3BuildCallInput = {
      ...constructBaseBuildCallInput({
        humanAmountsIn,
        sdkQueryOutput: queryOutput.sdkQueryOutput,
        slippagePercent: slippagePercent,
        pool: this.helpers.pool,
      }),
      userData: '0x',
    }

    const { callData, to, value } = permit2
      ? addLiquidity.buildCallWithPermit2(buildCallParams, permit2)
      : addLiquidity.buildCall(buildCallParams)

    return {
      account,
      chainId: this.helpers.chainId,
      data: callData,
      to,
      value,
    }
  }
}
