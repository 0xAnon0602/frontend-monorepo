import { Badge, Button, HStack, Skeleton, Text, Tooltip, VStack } from '@chakra-ui/react'
import { fNum } from '@repo/lib/shared/utils/numbers'
import NextLink from 'next/link'
import { useVebalLockInfo } from '@repo/lib/modules/vebal/useVebalLockInfo'
import { useUserAccount } from '@repo/lib/modules/web3/UserAccountProvider'
import { ConnectWallet } from '@repo/lib/modules/web3/ConnectWallet'
import { useLockEndDate } from '@repo/lib/modules/vebal/lock/duration/useLockEndDate'
import { expectedTotalVeBal } from '@repo/lib/modules/vebal/lock/VebalLockProvider'
import { MyVotesStatsCard } from '@repo/lib/modules/vebal/vote/Votes/MyVotes/MyVotesStats/shared/MyVotesStatsCard'
import { MyVebalChargeTooltip } from '@repo/lib/modules/vebal/vote/Votes/MyVotes/MyVotesStats/shared/MyVebalChargeTooltip'
import { getVeBalManagePath } from '@repo/lib/modules/vebal/vebal-navigation'

interface Props {
  myVebalBalance: bigint
  loading: boolean
}

export function MyVotesStatsMyVebal({ myVebalBalance, loading }: Props) {
  const { isConnected } = useUserAccount()

  const { mainnetLockedInfo } = useVebalLockInfo()
  const lockedEndDate = mainnetLockedInfo.lockedEndDate
  const isLockExpired = mainnetLockedInfo.isExpired

  const lockedAmount = mainnetLockedInfo.hasExistingLock
    ? mainnetLockedInfo.lockedAmount
    : undefined

  const { maxLockEndDate } = useLockEndDate({
    lockedEndDate: lockedEndDate ? new Date(lockedEndDate) : undefined,
  })

  const expectedVeBalAmount = expectedTotalVeBal({
    bpt: lockedAmount ?? '0',
    lockEndDate: maxLockEndDate,
  })

  const balance = !isLockExpired ? fNum('token', myVebalBalance || 0) : '0'

  return (
    <MyVotesStatsCard
      headerText="My veBAL"
      leftContent={
        loading ? (
          <Skeleton height="28px" w="100px" />
        ) : myVebalBalance === 0n ? (
          <HStack spacing="xs">
            <Text color="font.maxContrast">&mdash;</Text>
            {isLockExpired && (
              <Tooltip
                label={
                  "You can't vote because your lock has expired. Get new veBAL to vote by extending your lock."
                }
              >
                <Badge
                  background="red.400"
                  color="font.dark"
                  fontSize="sm"
                  textTransform="unset"
                  userSelect="none"
                >
                  Expired
                </Badge>
              </Tooltip>
            )}
          </HStack>
        ) : (
          <HStack spacing="xs">
            <Text color="font.maxContrast" fontSize="lg" fontWeight={700}>
              {balance}
            </Text>

            {lockedEndDate && (
              <MyVebalChargeTooltip
                expectedVeBalAmount={expectedVeBalAmount.toNumber()}
                isLockExpired={isLockExpired}
                lockedEndDate={lockedEndDate}
              />
            )}
          </HStack>
        )
      }
      rightContent={
        loading ? (
          <Skeleton height="28px" w="100px" />
        ) : !isConnected ? (
          <VStack>
            <ConnectWallet size="sm" variant="primary" />
          </VStack>
        ) : isLockExpired ? (
          <Button
            as={NextLink}
            href={getVeBalManagePath('extend', 'vote')}
            size="sm"
            variant="primary"
          >
            Manage
          </Button>
        ) : myVebalBalance ? (
          <Button
            as={NextLink}
            href={getVeBalManagePath('extend', 'vote')}
            size="sm"
            variant="tertiary"
          >
            Extend lock
          </Button>
        ) : (
          <Button
            as={NextLink}
            href={getVeBalManagePath('lock', 'vote')}
            size="sm"
            variant="primary"
          >
            Get veBAL
          </Button>
        )
      }
      variant={isLockExpired ? 'expired' : 'default'}
    />
  )
}
