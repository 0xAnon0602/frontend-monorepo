import { wETHAddress, wjAuraAddress } from '@/lib/debug-helpers'
import {
  GetTokenPricesQuery,
  GetTokensQuery,
  GetTokensQueryVariables,
  GqlChain,
  GqlPoolTokenExpanded,
  GqlTokenPrice,
} from '@/lib/shared/services/api/generated/graphql'
import { allFakeGqlTokens, fakeTokenBySymbol } from '@/test/data/all-gql-tokens.fake'
import { mock } from 'vitest-mock-extended'
import { TokenAmountToApprove } from '../approvals/approval-rules'
import { TokenAllowances } from '../../web3/useTokenAllowances'
import { TokenAmount, TokenBase } from '../token.types'
import { MswTokenList } from './token.test.types'
import { emptyAddress } from '../../web3/contracts/wagmi-helpers'
import { MinimalToken } from '@balancer/sdk'
import { Address, parseUnits } from 'viem'
import { MAX_BIGINT } from '@/lib/shared/utils/numbers'

export const defaultTokenMock = aTokenMock({ symbol: 'TEST-TOKEN' })
export const defaultTokenListMock: MswTokenList = allFakeGqlTokens

export const defaultTokenPriceMock = aTokenPriceMock()
export const defaultTokenPriceListMock = [defaultTokenPriceMock]

export const defaultGetTokensQueryMock: GetTokensQuery = {
  __typename: 'Query',
  tokens: defaultTokenListMock,
}

export const defaultGetTokensQueryVariablesMock: GetTokensQueryVariables =
  mock<GetTokensQueryVariables>()
export const defaultGetTokenPricesQueryMock: GetTokenPricesQuery = {
  __typename: 'Query',
  tokenPrices: defaultTokenPriceListMock,
}

export function aTokenAmountMock(options?: Partial<TokenAmount>): TokenAmount {
  const defaultTokenAmount: TokenAmount = {
    address: '0xc67b12049c2d0cf6e476bc64c7f82fc6c63cffc5',
    amount: 0n,
    chainId: 1,
    decimals: 8,
    formatted: '0',
  }
  return Object.assign({}, defaultTokenAmount, options)
}

export function someTokenAmountsMock(addresses: string[]) {
  return addresses.map(address => aTokenAmountMock({ address }))
}

export function aTokenMock(...options: Partial<TokenBase>[]): TokenBase {
  const defaultToken: TokenBase = fakeTokenBySymbol('BAL')
  return Object.assign({}, defaultToken, ...options)
}

export function someMinimalTokensMock(addresses?: Address[]): MinimalToken[] {
  const defaultTokens: MinimalToken[] = [
    {
      address: wETHAddress,
      decimals: 18,
      index: 0,
    },
  ]
  if (!addresses) return defaultTokens
  return addresses.map((address, index) => ({ address, decimals: 18, index }))
}

export function aTokenExpandedMock(
  ...options: Partial<GqlPoolTokenExpanded>[]
): GqlPoolTokenExpanded {
  const defaultToken: TokenBase = fakeTokenBySymbol('BAL')
  return Object.assign({}, defaultToken, ...options)
}

export function aTokenPriceMock(...options: Partial<GqlTokenPrice>[]): GqlTokenPrice {
  const defaultPrice: GqlTokenPrice = {
    __typename: 'GqlTokenPrice',
    address: emptyAddress,
    chain: GqlChain.Mainnet,
    price: 10,
  }
  return Object.assign({}, defaultPrice, ...options)
}

export const someTokenAllowancesMock: TokenAllowances = {
  [wETHAddress]: MAX_BIGINT,
  [wjAuraAddress]: MAX_BIGINT,
}

export function anAmountToApproveMock(
  options: Partial<TokenAmountToApprove>
): TokenAmountToApprove {
  const defaultAmount = {
    tokenAddress: wETHAddress,
    rawAmount: parseUnits('1', 18),
    humanAmount: '1',
    tokenSymbol: 'Test token symbol',
  }
  return Object.assign({}, defaultAmount, options)
}
