'use client'
import { useState } from 'react'
import {
  Box,
  Card,
  Collapse,
  Stack,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
  VStack,
  Divider,
  HStack,
  Link,
} from '@chakra-ui/react'
import { useFormattedPoolAttributes } from './useFormattedPoolAttributes'
import { ArrowUpRight, ChevronDown } from 'react-feather'

export function PoolAttributes() {
  const formattedAttributes = useFormattedPoolAttributes()
  const [showECLPDropdown, setShowECLPDropdown] = useState(false)

  return (
    <Card>
      <VStack alignItems="flex-start" spacing={{ base: 'sm', md: 'md' }} width="full">
        <Heading fontSize="1.25rem" variant="h4">
          Pool attributes
        </Heading>
        <Divider />
        <VStack width="full">
          {formattedAttributes.map(attribute => {
            return (
              <Stack
                direction={{ base: 'column', md: 'row' }}
                key={`pool-attribute-${attribute.title}`}
                spacing={{ base: 'xxs', md: 'xl' }}
                width="full"
              >
                {!attribute.dropdown && (
                  <Box minWidth="160px">
                    <Text variant={{ base: 'primary', md: 'secondary' }}>{attribute.title}:</Text>
                  </Box>
                )}
                {attribute.link ? (
                  <Link href={attribute.link} target="_blank" variant="link">
                    <HStack gap="xxs">
                      <Text color="link">{attribute.value}</Text>
                      <ArrowUpRight size={12} />
                    </HStack>
                  </Link>
                ) : attribute.dropdown ? (
                  <Box>
                    <HStack
                      cursor="pointer"
                      gap="xxs"
                      onClick={() => setShowECLPDropdown(!showECLPDropdown)}
                    >
                      <Text>{attribute.title}</Text>
                      <ChevronDown
                        size={15}
                        style={{
                          transform: showECLPDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                        }}
                      />
                    </HStack>
                    <Collapse animateOpacity in={showECLPDropdown}>
                      <Box mt="4">
                        {attribute.dropdown.map(dropdownItem => (
                          <HStack justify="space-between" key={dropdownItem.title} mb="2">
                            <Popover trigger="hover">
                              <PopoverTrigger>
                                <Text
                                  className="tooltip-dashed-underline"
                                  variant={{ base: 'secondary', md: 'secondary' }}
                                >
                                  {dropdownItem.title}:
                                </Text>
                              </PopoverTrigger>
                              <PopoverContent maxW="300px" p="sm" w="auto">
                                <Text fontSize="sm" variant="secondary">
                                  {dropdownItem.tooltip}
                                </Text>
                              </PopoverContent>
                            </Popover>
                            <Text variant={{ base: 'secondary', md: 'secondary' }}>
                              {dropdownItem.value}
                            </Text>
                          </HStack>
                        ))}
                      </Box>
                    </Collapse>
                  </Box>
                ) : (
                  <Text
                    mb={{ base: 'sm', md: '0' }}
                    variant={{ base: 'secondary', md: 'secondary' }}
                  >
                    {attribute.value}
                  </Text>
                )}
              </Stack>
            )
          })}
        </VStack>
      </VStack>
    </Card>
  )
}
