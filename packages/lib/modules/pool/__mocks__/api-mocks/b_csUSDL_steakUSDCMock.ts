// Do not edit this file. It was auto-generated by saveApiMocks.ts

import { Pool } from '../../pool.types'

export const b_csUSDL_steakUSDCMock = {
  id: '0x5dd88b3aa3143173eb26552923922bdf33f50949',
  address: '0x5dd88b3aa3143173eb26552923922bdf33f50949',
  name: 'Balancer csUSDL/steakUSDC',
  version: 1,
  owner: '0xd1449cc1fdd0a55773c462a9dddd2dd705d44a9f',
  swapFeeManager: '0xd1449cc1fdd0a55773c462a9dddd2dd705d44a9f',
  pauseManager: '0x0000000000000000000000000000000000000000',
  poolCreator: '0x0000000000000000000000000000000000000000',
  decimals: 18,
  factory: '0xb9d01ca61b9c181da1051bfdd28e1097e920ab14',
  symbol: 'B-csUSDL-steakUSDC',
  createTime: 1733884067,
  type: 'STABLE',
  chain: 'MAINNET',
  protocolVersion: 3,
  tags: ['BOOSTED_MORPHO', 'BOOSTED'],
  hasErc4626: true,
  hasNestedErc4626: false,
  hasAnyAllowedBuffer: true,
  liquidityManagement: {
    disableUnbalancedLiquidity: false,
  },
  hook: null,
  dynamicData: {
    poolId: '0x5dd88b3aa3143173eb26552923922bdf33f50949',
    swapEnabled: true,
    totalLiquidity: '119.54',
    totalShares: '118.908858017586541723',
    fees24h: '0.00',
    surplus24h: '0.00',
    swapFee: '0.0001',
    volume24h: '0.00',
    holdersCount: '2',
    isInRecoveryMode: false,
    isPaused: false,
    aprItems: [
      {
        id: '0x5dd88b3aa3143173eb26552923922bdf33f50949-morpho',
        title: 'MORPHO APR',
        apr: 0.03352086766328337,
        type: 'IB_YIELD',
        rewardTokenSymbol: 'MORPHO',
        rewardTokenAddress: '0x58d97b57bb95320f9a05dc918aef65434969c2b2',
      },
      {
        id: '0x5dd88b3aa3143173eb26552923922bdf33f50949-csUSDL-yield-apr',
        title: 'csUSDL APR',
        apr: 0.0140515497157453,
        type: 'IB_YIELD',
        rewardTokenSymbol: 'csUSDL',
        rewardTokenAddress: '0xbeefc01767ed5086f35decb6c00e6c12bc7476c1',
      },
      {
        id: '0x5dd88b3aa3143173eb26552923922bdf33f50949-steakUSDC-yield-apr',
        title: 'steakUSDC APR',
        apr: 0.04861047933126661,
        type: 'IB_YIELD',
        rewardTokenSymbol: 'steakUSDC',
        rewardTokenAddress: '0xbeef01735c132ada46aa9aa4c54623caa92a64cb',
      },
    ],
  },
  allTokens: [
    {
      id: '0x5dd88b3aa3143173eb26552923922bdf33f50949-0xbeef01735c132ada46aa9aa4c54623caa92a64cb',
      address: '0xbeef01735c132ada46aa9aa4c54623caa92a64cb',
      name: 'Steakhouse USDC',
      symbol: 'steakUSDC',
      decimals: 18,
      isNested: false,
      isPhantomBpt: false,
      isMainToken: true,
    },
    {
      id: '0x5dd88b3aa3143173eb26552923922bdf33f50949-0xbeefc01767ed5086f35decb6c00e6c12bc7476c1',
      address: '0xbeefc01767ed5086f35decb6c00e6c12bc7476c1',
      name: 'Coinshift USDL',
      symbol: 'csUSDL',
      decimals: 18,
      isNested: false,
      isPhantomBpt: false,
      isMainToken: true,
    },
  ],
  staking: {
    id: '0x23791083c29d41fac9c8a4e3ba5df257fc250aaa',
    type: 'GAUGE',
    chain: 'MAINNET',
    address: '0x23791083c29d41fac9c8a4e3ba5df257fc250aaa',
    gauge: {
      id: '0x23791083c29d41fac9c8a4e3ba5df257fc250aaa',
      gaugeAddress: '0x23791083c29d41fac9c8a4e3ba5df257fc250aaa',
      version: 1,
      status: 'ACTIVE',
      workingSupply: '0.0',
      otherGauges: [],
      rewards: [
        {
          id: '0x23791083c29d41fac9c8a4e3ba5df257fc250aaa-0xba100000625a3754423978a60c9317c58a424e3d-balgauge',
          rewardPerSecond: '0',
          tokenAddress: '0xba100000625a3754423978a60c9317c58a424e3d',
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
  amp: '200',
  poolTokens: [
    {
      id: '0x5dd88b3aa3143173eb26552923922bdf33f50949-0xbeef01735c132ada46aa9aa4c54623caa92a64cb',
      chain: 'MAINNET',
      chainId: 1,
      address: '0xbeef01735c132ada46aa9aa4c54623caa92a64cb',
      decimals: 18,
      name: 'Steakhouse USDC',
      symbol: 'steakUSDC',
      priority: 0,
      tradable: true,
      isErc4626: true,
      index: 0,
      balance: '65.31696118492115',
      balanceUSD: '69.7339142359339',
      priceRate: '1.062278389711774733',
      weight: null,
      hasNestedPool: false,
      isAllowed: true,
      priceRateProvider: '0xc81d60e39e065146c6de186ffc5b39e4ca2189cf',
      logoURI:
        'https://coin-images.coingecko.com/coins/images/51473/large/steakUSDC.png?1731396462',
      priceRateProviderData: {
        address: '0xc81d60e39e065146c6de186ffc5b39e4ca2189cf',
        name: 'ERC4626RateProvider',
        summary: 'unsafe',
        reviewed: true,
        warnings: ['eoaUpgradeable'],
        upgradeableComponents: [
          {
            entryPoint: '0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB',
            implementationReviewed: '0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB',
          },
        ],
        reviewFile: './MorphoERC4626RateProviders.md',
        factory: null,
      },
      nestedPool: null,
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
        reviewFile: './MorphoVaults/V1-incompatible-Steakhouse.md',
        summary: 'unsafe',
        warnings: [''],
      },
    },
    {
      id: '0x5dd88b3aa3143173eb26552923922bdf33f50949-0xbeefc01767ed5086f35decb6c00e6c12bc7476c1',
      chain: 'MAINNET',
      chainId: 1,
      address: '0xbeefc01767ed5086f35decb6c00e6c12bc7476c1',
      decimals: 18,
      name: 'Coinshift USDL',
      symbol: 'csUSDL',
      priority: 0,
      tradable: true,
      isErc4626: true,
      index: 1,
      balance: '49.32821670590632',
      balanceUSD: '49.80121076035594',
      priceRate: '1.009610996999246241',
      weight: null,
      hasNestedPool: false,
      isAllowed: true,
      priceRateProvider: '0x9cc54cb63e61c7d5231c506e4206eb459250d2a7',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xbeefc01767ed5086f35decb6c00e6c12bc7476c1.png',
      priceRateProviderData: {
        address: '0x9cc54cb63e61c7d5231c506e4206eb459250d2a7',
        name: 'ERC4626RateProvider',
        summary: 'safe',
        reviewed: true,
        warnings: [''],
        upgradeableComponents: [
          {
            entryPoint: '0x7751E2F4b8ae93EF6B79d86419d42FE3295A4559',
            implementationReviewed: '0x2954c85e7e2b841d0e9a9fdcc09dac1274057d71',
          },
          {
            entryPoint: '0xbdC7c08592Ee4aa51D06C27Ee23D5087D65aDbcD',
            implementationReviewed: '0x752d55d62a94658eac08eae42deda902b69b0e76',
          },
        ],
        reviewFile: './MarketRateTransformerRateProviders.md',
        factory: null,
      },
      nestedPool: null,
      isBufferAllowed: true,
      underlyingToken: {
        chain: 'MAINNET',
        chainId: 1,
        address: '0x7751e2f4b8ae93ef6b79d86419d42fe3295a4559',
        decimals: 18,
        name: 'Wrapped USDL',
        symbol: 'wUSDL',
        priority: 0,
        tradable: true,
        isErc4626: true,
        isBufferAllowed: true,
        logoURI:
          'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x7751e2f4b8ae93ef6b79d86419d42fe3295a4559.png',
      },
      erc4626ReviewData: {
        reviewFile: './MorphoVaults/V1-incompatible-Steakhouse.md',
        summary: 'unsafe',
        warnings: [''],
      },
    },
  ],
} as unknown as Pool
