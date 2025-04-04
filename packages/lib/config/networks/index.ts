import { GqlChain } from '@repo/lib/shared/services/api/generated/graphql'
import arbitrum from './arbitrum'
import avalanche from './avalanche'
import gnosis from './gnosis'
import mainnet from './mainnet'
import polygon from './polygon'
import zkevm from './zkevm'
import fantom from './fantom'
import optimism from './optimism'
import base from './base'
import sepolia from './sepolia'
import mode from './mode'
import fraxtal from './fraxtal'
import sonic from './sonic'

const networkConfigs = {
  [GqlChain.Arbitrum]: arbitrum,
  [GqlChain.Avalanche]: avalanche,
  [GqlChain.Base]: base,
  [GqlChain.Gnosis]: gnosis,
  [GqlChain.Mainnet]: mainnet,
  [GqlChain.Polygon]: polygon,
  [GqlChain.Zkevm]: zkevm,
  [GqlChain.Optimism]: optimism,
  [GqlChain.Sepolia]: sepolia,
  [GqlChain.Mode]: mode,
  [GqlChain.Fraxtal]: fraxtal,
  [GqlChain.Fantom]: fantom,
  [GqlChain.Sonic]: sonic,
}

export default networkConfigs
