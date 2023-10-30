import { HStack, VStack, Heading, Text } from 'native-base';

export function HistoryCard() {
    return(
        <HStack 
         w="full"
          px={4} 
          py={4}
           mb={3}
            bg="gray.400"
             rounded="md"
              alignItems="center"
               justifyContent="space-between"
               >

                 
            <VStack mr={5} flex={1}>
                <Heading 
                color="white"
                numberOfLines={1}
                 fontSize="md" 
                 textTransform="capitalize"
                 >
                     Costas 
                     </Heading>

                <Text 
                color="gray.100"
                 fontSize="lg" 
                 numberOfLines={1}
                 >
                    Puxada frontal
                    Puxada frontal
                    Puxada frontal
                     </Text>
            </VStack>

            <Text color="gray.300" fontSize="md"> 08:56 </Text>
        </HStack>
    );
}
