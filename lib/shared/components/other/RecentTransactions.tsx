import React from 'react'
import {
  Button,
  HStack,
  Heading,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react'
import {
  TrackedTransaction,
  useRecentTransactions,
} from '@/lib/modules/transactions/RecentTransactionsProvider'
import { isEmpty, orderBy } from 'lodash'
import { FiActivity } from 'react-icons/fi'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useBlockExplorer } from '@/lib/shared/hooks/useBlockExplorer'

function Transactions({ transactions }: { transactions: Record<string, TrackedTransaction> }) {
  const orderedRecentTransactions = orderBy(Object.values(transactions), 'timestamp', 'desc')

  return (
    <VStack p="4" rounded="md" align="start">
      {orderedRecentTransactions.map(tx => {
        // TODO? Add another description so it would always fit in the default width of 320px (ln 71) without truncation (ln 46)
        const label =
          tx.description && tx.init && tx.description?.length > tx.init.length
            ? tx.description
            : tx.init

        const { getBlockExplorerTxUrl } = useBlockExplorer(tx.chain)

        return (
          <HStack key={tx.hash}>
            <Tooltip label={label} fontSize="sm">
              <Text isTruncated maxW="85%">
                {tx.init}
              </Text>
            </Tooltip>
            <Link href={getBlockExplorerTxUrl(tx.hash)} target="_blank">
              <ExternalLinkIcon color="gray.400" width="1rem" height="1rem" />
            </Link>
          </HStack>
        )
      })}
    </VStack>
  )
}

export default function RecentTransactions() {
  const { transactions, clearTransactions } = useRecentTransactions()
  const hasTransactions = !isEmpty(transactions)

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="tertiary">
          <FiActivity />
        </Button>
      </PopoverTrigger>
      <PopoverContent w="330px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Heading size="md">Recent transactions</Heading>
        </PopoverHeader>
        <PopoverBody maxH="180px" overflowY="auto">
          {hasTransactions ? (
            <Transactions transactions={transactions} />
          ) : (
            <Text>No transactions...</Text>
          )}
        </PopoverBody>
        <PopoverFooter>
          <Button isDisabled={!hasTransactions} onClick={() => clearTransactions()}>
            Clear transactions
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}
