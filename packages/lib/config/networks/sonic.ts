import { GqlChain } from '@repo/lib/shared/services/api/generated/graphql'
import { NetworkConfig } from '../config.types'
import { zeroAddress } from 'viem'
import { convertHexToLowerCase } from '@repo/lib/shared/utils/objects'
import { emptyAddress } from '@repo/lib/modules/web3/contracts/wagmi-helpers'

const networkConfig: NetworkConfig = {
  chainId: 146,
  name: 'Sonic',
  shortName: 'Sonic',
  chain: GqlChain.Fantom, // TODO: change to Sonic
  iconPath: '/images/chains/SONIC.svg',
  blockExplorer: {
    baseUrl: 'https://sonicscan.org',
    name: 'SonicScan',
  },
  tokens: {
    addresses: {
      bal: emptyAddress,
      wNativeAsset: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
    },
    nativeAsset: {
      name: 'Sonic',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      symbol: 'S',
      decimals: 18,
    },
    stakedAsset: {
      name: 'Beets Staked Sonic',
      address: '0xf4fa7f3308a1543e7d89950519341c7ce479400b',
      symbol: 'stS',
      decimals: 18,
    },
    defaultSwapTokens: {
      tokenIn: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    },
  },
  contracts: {
    multicall2: '0x66335d7ad8011f6aa3f48aadcb523b62b38ed961',
    balancer: {
      vaultV2: '0x20dd72Ed959b6147912C2e529F0a0C651c33c9ce',
      relayerV6: '0x0faa25293a36241c214f3760c6ff443e1b731981',
      minter: zeroAddress,
    },
    beets: {
      lstStaking: '0xbf46aef3c4c119495245e6b1911a4a961859038d',
      lstStakingProxy: '0xf4fa7f3308a1543e7d89950519341c7ce479400b',
    },
  },
  pools: convertHexToLowerCase({ issues: {} }),
}

export default networkConfig
