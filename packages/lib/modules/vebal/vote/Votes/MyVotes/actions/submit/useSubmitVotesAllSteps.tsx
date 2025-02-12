import { useSubmitVotesSteps } from '@repo/lib/modules/vebal/vote/Votes/MyVotes/actions/submit/useSubmitVotesSteps'
import mainnetNetworkConfig from '@repo/lib/config/networks/mainnet'
import { SubmittingVote } from '@repo/lib/modules/vebal/vote/Votes/MyVotes/MyVotesProvider'

type Params = {
  votes: SubmittingVote[]
}

export function useSubmitVotesAllSteps({ votes }: Params) {
  const { steps, isLoading } = useSubmitVotesSteps(mainnetNetworkConfig.chainId, votes)

  return {
    isLoadingSteps: isLoading,
    steps,
  }
}
