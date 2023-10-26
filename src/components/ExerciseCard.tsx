import { Image, HStack, VStack, Heading, Text, Icon } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.300" alignItems="center" p={2} rounded={8} pr={4} mb={3} >
        <Image
          source={{
            uri: "https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_300x200.jpg",
          }}
          w={16}
          h={16}
          mr={4}
          rounded="md"
          resizeMode="center"
          alt="exercício de remada unilateral"
          
        />

        <VStack flex={1}>
            <Heading color="white" fontSize="lg">
            remada unilateral
            </Heading>

            <Text color="gray.200" fontSize="sm" numberOfLines={2} mt={1}>
                3 séries x 12 repetiçoes
                
            </Text>
        </VStack>
        <Icon 
        as={Entypo}
        name="chevron-thin-right"
        color="gray.200"
        />
      </HStack>
    </TouchableOpacity>
  );
}
