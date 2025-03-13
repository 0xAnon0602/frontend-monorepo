// Do not edit this file. It was auto-generated by saveApiMocks.ts

import { Pool } from '../../pool.types'

export const aGNO_sDAIMock = {
  id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522',
  address: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522',
  name: 'Balancer aGNO/sDAI',
  version: 1,
  owner: '0x0000000000000000000000000000000000000000',
  swapFeeManager: '0x0000000000000000000000000000000000000000',
  pauseManager: '0x0000000000000000000000000000000000000000',
  poolCreator: '0x0000000000000000000000000000000000000000',
  decimals: 18,
  factory: '0xeb1eeabf0126d813589c3d2cfeffe410d9ae3863',
  symbol: 'aGNO/sDAI',
  createTime: 1733511670,
  type: 'WEIGHTED',
  chain: 'GNOSIS',
  protocolVersion: 3,
  tags: ['BOOSTED_AAVE', 'BOOSTED'],
  hasErc4626: true,
  hasNestedErc4626: false,
  liquidityManagement: {
    disableUnbalancedLiquidity: false,
  },
  hook: null,
  dynamicData: {
    poolId: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522',
    swapEnabled: true,
    totalLiquidity: '1505363.63',
    totalShares: '58563.096840580460725733',
    fees24h: '274.05',
    surplus24h: '0.00',
    swapFee: '0.0025',
    volume24h: '109619.69',
    holdersCount: '8',
    isInRecoveryMode: false,
    isPaused: false,
    aprItems: [
      {
        id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522-0x7c16f0185a26db0ae7a9377f23bc18ea7ce5d644-yield-apr',
        title: 'waGnoGNO APR',
        apr: 0.001528042915122804,
        type: 'IB_YIELD',
        rewardTokenSymbol: 'waGnoGNO',
        rewardTokenAddress: '0x7c16f0185a26db0ae7a9377f23bc18ea7ce5d644',
      },
      {
        id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522-swap-apr-24h',
        title: 'Swap fees APR (24h)',
        apr: 0.03444988161380703,
        type: 'SWAP_FEE_24H',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522-swap-apr',
        title: 'Swap fees APR',
        apr: 0.03444988161380703,
        type: 'SWAP_FEE',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522-swap-apr-30d',
        title: 'Swap fees APR (30d)',
        apr: 0.05454725546187647,
        type: 'SWAP_FEE_30D',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522-swap-apr-7d',
        title: 'Swap fees APR (7d)',
        apr: 0.5066613989051562,
        type: 'SWAP_FEE_7D',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522-0xaf204776c7245bf4147c2612bf6e5972ee483701-yield-apr',
        title: 'sDAI APR',
        apr: 0.0372639917517088,
        type: 'IB_YIELD',
        rewardTokenSymbol: 'sDAI',
        rewardTokenAddress: '0xaf204776c7245bf4147c2612bf6e5972ee483701',
      },
    ],
  },
  allTokens: [
    {
      id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522-0x7c16f0185a26db0ae7a9377f23bc18ea7ce5d644',
      address: '0x7c16f0185a26db0ae7a9377f23bc18ea7ce5d644',
      name: 'Wrapped Aave Gnosis GNO',
      symbol: 'waGnoGNO',
      decimals: 18,
      isNested: false,
      isPhantomBpt: false,
      isMainToken: true,
    },
    {
      id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522-0xaf204776c7245bf4147c2612bf6e5972ee483701',
      address: '0xaf204776c7245bf4147c2612bf6e5972ee483701',
      name: 'Savings xDAI',
      symbol: 'sDAI',
      decimals: 18,
      isNested: false,
      isPhantomBpt: false,
      isMainToken: true,
    },
  ],
  staking: {
    id: '0xa76ed5da09209d6f2198d8d793005393327b736e',
    type: 'GAUGE',
    chain: 'GNOSIS',
    address: '0xa76ed5da09209d6f2198d8d793005393327b736e',
    gauge: {
      id: '0xa76ed5da09209d6f2198d8d793005393327b736e',
      gaugeAddress: '0xa76ed5da09209d6f2198d8d793005393327b736e',
      version: 2,
      status: 'PREFERRED',
      workingSupply: '23425.127383271464208685',
      otherGauges: [],
      rewards: [
        {
          id: '0xa76ed5da09209d6f2198d8d793005393327b736e-0x7ef541e2a22058048904fe5744f9c7e4c57af717-balgauge',
          rewardPerSecond: '0',
          tokenAddress: '0x7ef541e2a22058048904fe5744f9c7e4c57af717',
        },
        {
          id: '0xa76ed5da09209d6f2198d8d793005393327b736e-0x2a22f9c3b484c3629090feed35f17ff8f88f76f0-reward',
          rewardPerSecond: '0.0',
          tokenAddress: '0x2a22f9c3b484c3629090feed35f17ff8f88f76f0',
        },
      ],
    },
    aura: null,
  },
  userBalance: {
    totalBalance: '0',
    totalBalanceUsd: 0,
    walletBalance: '0',
    walletBalanceUsd: 0,
    stakedBalances: [],
  },
  nestingType: 'NO_NESTING',
  poolTokens: [
    {
      id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522-0x7c16f0185a26db0ae7a9377f23bc18ea7ce5d644',
      chain: 'GNOSIS',
      chainId: 100,
      address: '0x7c16f0185a26db0ae7a9377f23bc18ea7ce5d644',
      decimals: 18,
      name: 'Wrapped Aave Gnosis GNO',
      symbol: 'waGnoGNO',
      priority: 0,
      tradable: true,
      canUseBufferForSwaps: true,
      useWrappedForAddRemove: true,
      useUnderlyingForAddRemove: true,
      index: 0,
      balance: '4734.913433772825',
      balanceUSD: '753792.3761176984',
      priceRate: '1.001124438534159233',
      weight: '0.5',
      hasNestedPool: false,
      isAllowed: true,
      priceRateProvider: '0xbbb4966335677ea24f7b86dc19a423412390e1fb',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x7c16f0185a26db0ae7a9377f23bc18ea7ce5d644.png',
      priceRateProviderData: {
        address: '0xbbb4966335677ea24f7b86dc19a423412390e1fb',
        name: 'ERC4626RateProvider',
        summary: 'safe',
        reviewed: true,
        warnings: [''],
        upgradeableComponents: [
          {
            entryPoint: '0x7c16F0185A26Db0AE7a9377f23BC18ea7ce5d644',
            implementationReviewed: '0x7CB7fdeEB5E71f322F8E39Be67959C32a6A3aAA3',
          },
          {
            entryPoint: '0xb50201558B00496A145fE76f7424749556E326D8',
            implementationReviewed: '0xF2C312BfAF4CF0429DB4DA15a0cf5F770Ea3E770',
          },
        ],
        reviewFile: './statATokenv2RateProvider.md',
        factory: null,
      },
      nestedPool: null,
      isErc4626: true,
      underlyingToken: {
        chain: 'GNOSIS',
        chainId: 100,
        address: '0x9c58bacc331c9aa871afd802db6379a98e80cedb',
        decimals: 18,
        name: 'Gnosis Token on xDai',
        symbol: 'GNO',
        priority: 0,
        tradable: true,
        isErc4626: false,
        logoURI:
          'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x9c58bacc331c9aa871afd802db6379a98e80cedb.png',
      },
      erc4626ReviewData: {
        reviewFile: './StatATokenV2Review.md',
        summary: 'safe',
        warnings: [''],
      },
    },
    {
      id: '0xd1d7fa8871d84d0e77020fc28b7cd5718c446522-0xaf204776c7245bf4147c2612bf6e5972ee483701',
      chain: 'GNOSIS',
      chainId: 100,
      address: '0xaf204776c7245bf4147c2612bf6e5972ee483701',
      decimals: 18,
      name: 'Savings xDAI',
      symbol: 'sDAI',
      priority: 0,
      tradable: true,
      canUseBufferForSwaps: true,
      useWrappedForAddRemove: false,
      useUnderlyingForAddRemove: false,
      index: 1,
      balance: '645492.8752072765',
      balanceUSD: '751571.25190847',
      priceRate: '1.162016679158520843',
      weight: '0.5',
      hasNestedPool: false,
      isAllowed: true,
      priceRateProvider: '0x89c80a4540a00b5270347e02e2e144c71da2eced',
      logoURI:
        'https://assets.coingecko.com/coins/images/32066/large/sDAI_Logo_%281%29.png?1696292026',
      priceRateProviderData: {
        address: '0x89c80a4540a00b5270347e02e2e144c71da2eced',
        name: 'ERC4626RateProvider',
        summary: 'safe',
        reviewed: true,
        warnings: ['donation', 'only18decimals'],
        upgradeableComponents: [],
        reviewFile: './SavingsDAIRateProviderGnosis.md',
        factory: null,
      },
      nestedPool: null,
      isErc4626: true,
      isBufferAllowed: false,
      underlyingToken: {
        chain: 'GNOSIS',
        chainId: 100,
        address: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
        decimals: 18,
        name: 'Wrapped XDAI',
        symbol: 'WXDAI',
        priority: 0,
        tradable: true,
        isErc4626: false,
        isBufferAllowed: true,
        logoURI:
          'https://assets.coingecko.com/coins/images/14584/large/wrapped-xdai-logo.png?1696514264',
      },
      erc4626ReviewData: {
        reviewFile: './sDaiReview.md',
        summary: 'safe',
        warnings: ['buffer'],
      },
    },
  ],
} as unknown as Pool
