import { getChainId } from '@/lib/config/app.config'
import { SwapHandler } from './Swap.handler'
import { GetSorSwapsDocument, GqlSorSwapType } from '@/lib/shared/services/api/generated/graphql'
import { ApolloClient } from '@apollo/client'
import { Path, Slippage, Swap, SwapKind } from '@balancer/sdk'
import { formatUnits } from 'viem'
import { TransactionConfig } from '../../web3/contracts/contract.types'
import { SdkBuildSwapInputs, SdkSimulateSwapResponse, SimulateSwapInputs } from '../swap.types'
import { getDefaultRpcUrl } from '../../web3/Web3Provider'

export class DefaultSwapHandler implements SwapHandler {
  constructor(public apolloClient: ApolloClient<object>) {}

  async simulate({ ...variables }: SimulateSwapInputs): Promise<SdkSimulateSwapResponse> {
    const { chain, swapType } = variables
    const rpcUrl = getDefaultRpcUrl(getChainId(chain))

    const { data } = await this.apolloClient.query({
      query: GetSorSwapsDocument,
      variables: { ...variables, queryBatchSwap: false }, // We don't need the API to do a query because we're doing that via the SDK below.
      fetchPolicy: 'no-cache',
      notifyOnNetworkStatusChange: true,
    })

    const swap = new Swap({
      chainId: getChainId(chain),
      paths: data.swaps.paths as unknown as Path[],
      swapKind: this.swapTypeToKind(swapType),
    })

    // Get accurate return amount with onchain call
    const onchainReturnAmount = await swap.query(rpcUrl)

    // Format return amount to human readable
    const returnAmount = formatUnits(onchainReturnAmount.amount, onchainReturnAmount.token.decimals)

    return {
      ...data.swaps,
      returnAmount,
      swap,
      onchainReturnAmount,
    }
  }

  build({
    simulateResponse: { swap, onchainReturnAmount },
    slippagePercent,
    account,
    selectedChain,
    isNativeAssetIn,
  }: SdkBuildSwapInputs): TransactionConfig {
    const tx = swap.buildCall({
      slippage: Slippage.fromPercentage(slippagePercent as `${number}`),
      deadline: BigInt(Number.MAX_SAFE_INTEGER),
      expectedAmountOut: onchainReturnAmount,
      sender: account,
      recipient: account,
      wethIsEth: isNativeAssetIn,
    })

    return {
      account,
      chainId: getChainId(selectedChain),
      data: tx.callData,
      value: tx.value,
      to: tx.to,
    }
  }

  private swapTypeToKind(swapType: GqlSorSwapType): SwapKind {
    switch (swapType) {
      case GqlSorSwapType.ExactIn:
        return SwapKind.GivenIn
      case GqlSorSwapType.ExactOut:
        return SwapKind.GivenOut
      default:
        throw new Error('Invalid swap type')
    }
  }
}
