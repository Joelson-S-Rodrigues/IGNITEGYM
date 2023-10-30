import { TouchableOpacity } from "react-native";
import { VStack, Text, Icon, Heading, HStack, Image, Box, ScrollView } from "native-base";

import { Feather } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";


import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'

import { Button } from "@components/Button";

export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity  onPress={handleGoBack} >
                    <Icon
                     as={Feather}
                     name="arrow-left"
                     color="green.500"
                     size={6}
                     />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={5} mb={5} alignItems="center">
                    <Heading color="gray.100" fontSize="md" flexShrink={1}>
                        Puxada frontal
                    </Heading>
                    <HStack alignItems="center">
                        <BodySvg />
                        <Text color="gray.200" ml={1} textTransform="capitalize">
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
       <ScrollView>
            <VStack p={8}>
        <Image
        w="full"
        h={80}
        source={{uri:"https://williamcarvalhoamaral.files.wordpress.com/2020/01/dorsal-blog.jpg?w=640"}}
        alt="Puxada frontal"
        rounded="lg"
        mb={3}
        resizeMode="cover"
        />
        <Box bg="gray.600" rounded="md" pb={4} px={4}>
                <HStack justifyContent="space-around" alignItems="center" mt={5} mb={6}> 
                <HStack>
                    <SeriesSvg />
                    <Text ml={2} color="gray.100">
                    3 séries 
                    </Text>
                </HStack> 

                <HStack >
                    <RepetitionsSvg />
                    <Text ml={2} color="gray.100">
                   12 repetições
                    </Text>
                </HStack> 
                </HStack>
                <Button 
                title="Marcar como realizado"
                 />
        </Box>
         </VStack>
        </ScrollView>
        </VStack>
    )
}