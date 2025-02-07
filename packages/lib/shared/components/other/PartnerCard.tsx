import { Box, Heading, Text, Link, Stack, VStack, Image as ChakraImage } from '@chakra-ui/react'
import { ArrowUpRight } from 'react-feather'
// import { ArrowRightIcon } from '@chakra-ui/icons'

interface PartnerCardProps {
  title: string
  description: string
  icon?: string
  iconName?: string
  backgroundImage?: string
  ctaText?: string
  ctaUrl?: string
  bgColor?: string
  externalLink?: boolean
}

export function PartnerCard({
  title,
  description,
  icon,
  iconName,
  backgroundImage,
  ctaText,
  ctaUrl,
  bgColor = 'gray.900',
  externalLink = false,
}: PartnerCardProps) {
  const iconSrc = iconName ? `/images/logos/circular-bg/${iconName}.svg` : icon

  return (
    <Link
      _hover={{ transform: 'scale(1)', transition: 'transform 0.2s var(--ease-out-cubic)' }}
      href={ctaUrl}
      role="group"
    >
      <Box
        _before={{
          content: `''`,
          position: 'absolute',
          top: 0,
          left: 0,
          width: 'full',
          height: 'full',
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: 0,

          _groupHover: {
            transform: 'scale(1.1)',
          },
          transition: 'transform 1s var(--ease-out-cubic)',
        }}
        backgroundPosition="center"
        backgroundSize="cover"
        bgColor={bgColor}
        borderRadius="xl"
        height="full"
        overflow="hidden"
        p={6}
        position="relative"
        shadow="2xl"
      >
        <VStack align="flex-start" height="full" position="relative" spacing={4} zIndex={1}>
          <VStack align="flex-start" spacing={2}>
            <Stack
              align="start"
              alignItems={{ base: 'center', sm: 'start' }}
              direction={{ base: 'row', sm: 'column' }}
              gap="5"
            >
              {iconSrc && (
                <Box
                  _groupHover={{ transform: 'scale(1.1)' }}
                  height="48px"
                  rounded="full"
                  shadow="2xl"
                  transition="all 0.3s var(--ease-out-cubic)"
                  width="48px"
                >
                  <ChakraImage alt={`${title} icon`} objectFit="contain" src={iconSrc} />
                </Box>
              )}
              <Heading color="white" mb="1" size="lg">
                {title}
              </Heading>
            </Stack>
            <Text
              color="white"
              fontSize="sm"
              fontWeight="bold"
              lineHeight="relaxed"
              sx={{ textWrap: 'balance' }}
            >
              {description}
            </Text>
          </VStack>
          {ctaText && ctaUrl && (
            <Box
              _hover={{ opacity: 0.8 }}
              alignItems="center"
              color="white"
              display="inline-flex"
              mb="2"
              mt="auto"
            >
              <Text
                _groupHover={{ textDecoration: 'underline' }}
                color="white"
                fontSize="sm"
                fontWeight="bold"
                transition="all 2s var(--ease-out-cubic)"
              >
                {ctaText}
              </Text>
              {externalLink && (
                <Box ml="0.5">
                  <ArrowUpRight size={12} />
                </Box>
              )}
            </Box>
          )}
        </VStack>
      </Box>
    </Link>
  )
}
