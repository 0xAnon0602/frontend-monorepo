// Do not edit this file. It was auto-generated by saveApiMocks.ts

import { Pool } from '../../pool.types'

export const aave_USDC_USDTMock = {
  id: '0x89bb794097234e5e930446c0cec0ea66b35d7570',
  address: '0x89bb794097234e5e930446c0cec0ea66b35d7570',
  name: 'Balancer Aave USDC-USDT',
  version: 1,
  owner: '0x0000000000000000000000000000000000000000',
  swapFeeManager: '0x0000000000000000000000000000000000000000',
  pauseManager: '0x0000000000000000000000000000000000000000',
  poolCreator: '0x0000000000000000000000000000000000000000',
  decimals: 18,
  factory: '0xb9d01ca61b9c181da1051bfdd28e1097e920ab14',
  symbol: 'Aave USDC-USDT',
  createTime: 1733870999,
  type: 'STABLE',
  chain: 'MAINNET',
  protocolVersion: 3,
  tags: ['BOOSTED_AAVE', 'BOOSTED', 'INCENTIVIZED'],
  hasErc4626: true,
  hasNestedErc4626: false,
  liquidityManagement: {
    disableUnbalancedLiquidity: false,
  },
  hook: null,
  dynamicData: {
    poolId: '0x89bb794097234e5e930446c0cec0ea66b35d7570',
    swapEnabled: true,
    totalLiquidity: '370547.56',
    totalShares: '365511.157805591857080946',
    fees24h: '3.70',
    surplus24h: '0.00',
    swapFee: '0.00001',
    volume24h: '370053.00',
    holdersCount: '25',
    isInRecoveryMode: false,
    isPaused: false,
    aprItems: [
      {
        id: '0x89bb794097234e5e930446c0cec0ea66b35d7570-swap-apr-30d',
        title: 'Swap fees APR (30d)',
        apr: 0.001730327195313551,
        type: 'SWAP_FEE_30D',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0x89bb794097234e5e930446c0cec0ea66b35d7570-swap-apr-7d',
        title: 'Swap fees APR (7d)',
        apr: 0.02013152731930452,
        type: 'SWAP_FEE_7D',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0xeec405b834c90b59122bcc2357f27110b2adb4b7-0xba100000625a3754423978a60c9317c58a424e3d-balgauge-BAL-apr',
        title: 'BAL reward APR',
        apr: 0.04130746293274293,
        type: 'VEBAL_EMISSIONS',
        rewardTokenSymbol: 'BAL',
        rewardTokenAddress: '0xba100000625a3754423978a60c9317c58a424e3d',
      },
      {
        id: '0xeec405b834c90b59122bcc2357f27110b2adb4b7-0xba100000625a3754423978a60c9317c58a424e3d-balgauge-BAL-apr-boost',
        title: 'BAL reward APR',
        apr: 0.06196119439911438,
        type: 'STAKING_BOOST',
        rewardTokenSymbol: 'BAL',
        rewardTokenAddress: '0xba100000625a3754423978a60c9317c58a424e3d',
      },
      {
        id: '0x89bb794097234e5e930446c0cec0ea66b35d7570-0xd4fa2d31b7968e448877f69a96de69f5de8cd23e-yield-apr',
        title: 'waEthUSDC APR',
        apr: 0.007525768996983174,
        type: 'IB_YIELD',
        rewardTokenSymbol: 'waEthUSDC',
        rewardTokenAddress: '0xd4fa2d31b7968e448877f69a96de69f5de8cd23e',
      },
      {
        id: '0x89bb794097234e5e930446c0cec0ea66b35d7570-0x7bc3485026ac48b6cf9baf0a377477fff5703af8-yield-apr',
        title: 'waEthUSDT APR',
        apr: 0.02638362903301768,
        type: 'IB_YIELD',
        rewardTokenSymbol: 'waEthUSDT',
        rewardTokenAddress: '0x7bc3485026ac48b6cf9baf0a377477fff5703af8',
      },
      {
        id: '0x89bb794097234e5e930446c0cec0ea66b35d7570-swap-apr-24h',
        title: 'Swap fees APR (24h)',
        apr: 0.001822554799241444,
        type: 'SWAP_FEE_24H',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0x89bb794097234e5e930446c0cec0ea66b35d7570-swap-apr',
        title: 'Swap fees APR',
        apr: 0.001822554799241444,
        type: 'SWAP_FEE',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
    ],
  },
  staking: {
    id: '0xeec405b834c90b59122bcc2357f27110b2adb4b7',
    type: 'GAUGE',
    chain: 'MAINNET',
    address: '0xeec405b834c90b59122bcc2357f27110b2adb4b7',
    gauge: {
      id: '0xeec405b834c90b59122bcc2357f27110b2adb4b7',
      gaugeAddress: '0xeec405b834c90b59122bcc2357f27110b2adb4b7',
      version: 1,
      status: 'PREFERRED',
      workingSupply: '142308.20467507755380314',
      otherGauges: [],
      rewards: [
        {
          id: '0xeec405b834c90b59122bcc2357f27110b2adb4b7-0xba100000625a3754423978a60c9317c58a424e3d-balgauge',
          rewardPerSecond: '0.000265408712423670',
          tokenAddress: '0xba100000625a3754423978a60c9317c58a424e3d',
        },
        {
          id: '0xeec405b834c90b59122bcc2357f27110b2adb4b7-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48-reward',
          rewardPerSecond: '0.0',
          tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        },
        {
          id: '0xeec405b834c90b59122bcc2357f27110b2adb4b7-0xba100000625a3754423978a60c9317c58a424e3d-reward',
          rewardPerSecond: '0.0',
          tokenAddress: '0xba100000625a3754423978a60c9317c58a424e3d',
        },
      ],
    },
    aura: {
      id: '0xa68646458d5591e53d1eb8f2ccbaac58a33fb27b',
      apr: 0.0357,
      auraPoolAddress: '0xa68646458d5591e53d1eb8f2ccbaac58a33fb27b',
      auraPoolId: '242',
      isShutdown: false,
    },
  },
  userBalance: {
    totalBalance: '0',
    totalBalanceUsd: 0,
    walletBalance: '0',
    walletBalanceUsd: 0,
    stakedBalances: [],
  },
  amp: '5000',
  poolTokens: [
    {
      id: '0x89bb794097234e5e930446c0cec0ea66b35d7570-0x7bc3485026ac48b6cf9baf0a377477fff5703af8',
      chain: 'MAINNET',
      chainId: 1,
      address: '0x7bc3485026ac48b6cf9baf0a377477fff5703af8',
      decimals: 6,
      name: 'Wrapped Aave Ethereum USDT',
      symbol: 'waEthUSDT',
      priority: 0,
      tradable: true,
      canUseBufferForSwaps: true,
      useWrappedForAddRemove: true,
      useUnderlyingForAddRemove: true,
      index: 0,
      balance: '273438.13606',
      balanceUSD: '304998.9886434757',
      priceRate: '1.116390505874927814',
      weight: null,
      hasNestedPool: false,
      isAllowed: true,
      priceRateProvider: '0xedf63cce4ba70cbe74064b7687882e71ebb0e988',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x7bc3485026ac48b6cf9baf0a377477fff5703af8.png',
      priceRateProviderData: {
        address: '0xedf63cce4ba70cbe74064b7687882e71ebb0e988',
        name: 'ERC4626RateProvider',
        summary: 'safe',
        reviewed: true,
        warnings: [''],
        upgradeableComponents: [
          {
            entryPoint: '0x7Bc3485026Ac48b6cf9BaF0A377477Fff5703Af8',
            implementationReviewed: '0x487c2C53c0866F0A73ae317bD1A28F63ADcD9aD1',
          },
          {
            entryPoint: '0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2',
            implementationReviewed: '0xeF434E4573b90b6ECd4a00f4888381e4D0CC5Ccd',
          },
        ],
        reviewFile: './statATokenv2RateProvider.md',
        factory: null,
      },
      nestedPool: null,
      isErc4626: true,
      underlyingToken: {
        chain: 'MAINNET',
        chainId: 1,
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
        name: 'Tether USD',
        symbol: 'USDT',
        priority: 0,
        tradable: true,
        isErc4626: false,
        logoURI:
          'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      erc4626ReviewData: {
        reviewFile: './StatATokenV2Review.md',
        summary: 'safe',
        warnings: [''],
      },
    },
    {
      id: '0x89bb794097234e5e930446c0cec0ea66b35d7570-0xd4fa2d31b7968e448877f69a96de69f5de8cd23e',
      chain: 'MAINNET',
      chainId: 1,
      address: '0xd4fa2d31b7968e448877f69a96de69f5de8cd23e',
      decimals: 6,
      name: 'Wrapped Aave Ethereum USDC',
      symbol: 'waEthUSDC',
      priority: 0,
      tradable: true,
      canUseBufferForSwaps: true,
      useWrappedForAddRemove: true,
      useUnderlyingForAddRemove: true,
      index: 1,
      balance: '58435.581621',
      balanceUSD: '65548.56734287017',
      priceRate: '1.121932640878272159',
      weight: null,
      hasNestedPool: false,
      isAllowed: true,
      priceRateProvider: '0x8f4e8439b970363648421c692dd897fb9c0bd1d9',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xd4fa2d31b7968e448877f69a96de69f5de8cd23e.png',
      priceRateProviderData: {
        address: '0x8f4e8439b970363648421c692dd897fb9c0bd1d9',
        name: 'ERC4626RateProvider',
        summary: 'safe',
        reviewed: true,
        warnings: [''],
        upgradeableComponents: [
          {
            entryPoint: '0xD4fa2D31b7968E448877f69A96DE69f5de8cD23E',
            implementationReviewed: '0x487c2C53c0866F0A73ae317bD1A28F63ADcD9aD1',
          },
          {
            entryPoint: '0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2',
            implementationReviewed: '0xeF434E4573b90b6ECd4a00f4888381e4D0CC5Ccd',
          },
        ],
        reviewFile: './statATokenv2RateProvider.md',
        factory: null,
      },
      nestedPool: null,
      isErc4626: true,
      isBufferAllowed: true,
      underlyingToken: {
        chain: 'MAINNET',
        chainId: 1,
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
        name: 'USD Coin',
        symbol: 'USDC',
        priority: 0,
        tradable: true,
        isErc4626: false,
        isBufferAllowed: true,
        logoURI:
          'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      erc4626ReviewData: {
        reviewFile: './StatATokenV2Review.md',
        summary: 'safe',
        warnings: [''],
      },
    },
  ],
} as unknown as Pool
