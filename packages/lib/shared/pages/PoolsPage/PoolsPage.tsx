import { PoolList } from '@repo/lib/modules/pool/PoolList/PoolList'
import { DefaultPageContainer } from '@repo/lib/shared/components/containers/DefaultPageContainer'
import FadeInOnView from '@repo/lib/shared/components/containers/FadeInOnView'
import { Box, Skeleton, Flex, Heading, Text, Card, SimpleGrid } from '@chakra-ui/react'
import { PropsWithChildren, Suspense } from 'react'
import Noise from '@repo/lib/shared/components/layout/Noise'
import { RadialPattern } from '@repo/lib/shared/components/zen/RadialPattern'
import { PartnerCard } from '@repo/lib/shared/components/other/PartnerCard'
import { PoolPageStats } from './PoolPageStats'
import { PROJECT_CONFIG } from '@repo/lib/config/getProjectConfig'

export async function PoolsPage({ children }: PropsWithChildren) {
  const partnerCards = PROJECT_CONFIG.partnerCards

  return (
    <>
      <Box borderBottom="1px solid" borderColor="border.base">
        <Noise
          backgroundColor="background.level0WithOpacity"
          overflow="hidden"
          position="relative"
          shadow="innerBase"
        >
          <DefaultPageContainer pb={['xl', 'xl']} pt={['xl', '40px']}>
            <Box display={{ base: 'none', md: 'block' }}>
              <RadialPattern
                circleCount={8}
                height={600}
                innerHeight={150}
                innerWidth={500}
                padding="15px"
                position="absolute"
                right={{ base: -800, lg: -700, xl: -600, '2xl': -400 }}
                top="40px"
                width={1000}
              />
              <RadialPattern
                circleCount={8}
                height={600}
                innerHeight={150}
                innerWidth={500}
                left={{ base: -800, lg: -700, xl: -600, '2xl': -400 }}
                padding="15px"
                position="absolute"
                top="40px"
                width={1000}
              />
            </Box>

            <RadialPattern
              circleCount={8}
              height={600}
              innerHeight={150}
              innerWidth={150}
              left="calc(50% - 300px)"
              position="absolute"
              top="-300px"
              width={600}
            />

            <RadialPattern
              circleCount={8}
              height={600}
              innerHeight={150}
              innerWidth={150}
              left="calc(50% - 300px)"
              position="absolute"
              top="300px"
              width={600}
            />

            <FadeInOnView animateOnce={false}>
              <Flex
                align={{ base: 'start', md: 'start' }}
                direction={{ base: 'column', md: 'row' }}
                gap="4"
                justify={{ base: 'start', md: 'space-between' }}
                mb="8"
              >
                <Box>
                  <Heading mb="3" sx={{ textWrap: 'balance' }} variant="special">
                    Earn passively on {PROJECT_CONFIG.projectName}
                  </Heading>
                  <Text sx={{ textWrap: 'balance' }} variant="secondary">
                    Join 230k+ Liquidity Providers in yield-bearing pools
                  </Text>
                </Box>
                <PoolPageStats />
              </Flex>
            </FadeInOnView>

            <FadeInOnView animateOnce={false}>
              <Box pb="3">
                {/* <BeetsPromoBanner /> */}
                {children}
              </Box>
            </FadeInOnView>
            {/* <FadeInOnView animateOnce={false}>
            <Box pt="20" pb="4">
              <FeaturedPools featuredPools={featuredPools} />
            </Box>
          </FadeInOnView> */}
          </DefaultPageContainer>
        </Noise>
      </Box>
      <DefaultPageContainer noVerticalPadding pb={['xl', '2xl']} pt={['lg', '54px']}>
        <FadeInOnView animateOnce={false}>
          <Suspense fallback={<Skeleton h="500px" w="full" />}>
            <PoolList />
          </Suspense>
        </FadeInOnView>
      </DefaultPageContainer>
      <DefaultPageContainer mb="3xl" py="0" rounded="2xl">
        <Card mb="md">
          <Noise
            backgroundColor="background.level0WithOpacity"
            overflow="hidden"
            position="relative"
            shadow="innerBase"
          >
            <Box opacity="0.6">
              <RadialPattern
                circleCount={20}
                height={1500}
                innerHeight={150}
                innerWidth={150}
                left="calc(50% - 750px)"
                position="absolute"
                top="calc(50% - 750px)"
                width={1500}
              />
            </Box>
            {partnerCards?.length && (
              <FadeInOnView animateOnce={false}>
                <Box p={{ base: 'sm', md: 'xl', lg: '2xl' }}>
                  <Box maxW="7xl" mx="auto">
                    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                      {partnerCards.map(partnerCard => (
                        <PartnerCard key={partnerCard.title} {...partnerCard} />
                      ))}
                    </SimpleGrid>
                  </Box>
                </Box>
              </FadeInOnView>
            )}
          </Noise>
        </Card>
      </DefaultPageContainer>
    </>
  )
}
