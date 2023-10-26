import { HStack, Heading, Text, VStack, Icon} from 'native-base'
import { MaterialIcons} from '@expo/vector-icons'
import { UserPhoto } from './UserPhoto'
import {  TouchableOpacity } from 'react-native'

export function HomeHeader() {
    return (
        <HStack bg="gray.600" pb={8} pt={16} px={8} alignItems="center" >

            <UserPhoto 
            source={{uri: "https://github.com/Joelson-S-Rodrigues.png"}}
            alt="Imagem do usuário"
            size={16}
            mr={4}
            />
            <VStack flex={1}> 
            <Text fontSize="md"  color="gray.100">
                Olá
            </Text>
            <Heading fontSize="md" color="gray.100">
                Joelson
            </Heading>
            </VStack>

            <TouchableOpacity>
            <Icon 
            as={MaterialIcons}
            name="logout"
            color="gray.200"
            size={7}
            />
            </TouchableOpacity>
        </HStack>
    )
}