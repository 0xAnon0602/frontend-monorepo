import { CircularProgress, CircularProgressLabel, HStack, Text, VStack } from '@chakra-ui/react'
import { StepProps, getStepSettings } from './getStepSettings'
import { Check } from 'react-feather'
import { useSignRelayerApproval } from '@/lib/modules/relayer/signRelayerApproval.hooks'
import { signRelayerStepTitle } from '../SignRelayerButton'

export function Step(props: StepProps) {
  const { color, isActive, title } = getStepSettings(props)

  return (
    <HStack alignItems="center">
      <StepIndicator {...props}></StepIndicator>
      <VStack spacing="0" alignItems="start">
        <Text mt={isActive ? -0.3 : 0} color={color}>
          {title}
        </Text>
      </VStack>
    </HStack>
  )
}

export function StepIndicator(props: StepProps) {
  const { color, isActiveLoading, status, stepNumber, title } = getStepSettings(props)
  const { isLoading } = useSignRelayerApproval()
  const isSignRelayerStepLoading = isLoading && title === signRelayerStepTitle

  if (status === 'complete') {
    return (
      <CircularProgress
        value={100}
        trackColor="border.base"
        thickness="8"
        size="7"
        color="font.highlight"
      >
        <CircularProgressLabel fontSize="md" color="font.highlight" pl={1.5}>
          <Check size={15} strokeWidth={4} />
        </CircularProgressLabel>
      </CircularProgress>
    )
  }

  return (
    <CircularProgress
      value={100}
      isIndeterminate={isActiveLoading || isSignRelayerStepLoading}
      trackColor="border.base"
      thickness="8"
      size="7"
      color={color}
    >
      <CircularProgressLabel fontSize="sm" fontWeight="bold" color={color}>
        {stepNumber}
      </CircularProgressLabel>
    </CircularProgress>
  )
}
