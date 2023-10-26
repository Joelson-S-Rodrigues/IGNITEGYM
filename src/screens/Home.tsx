import { useState } from 'react'

import { Group } from '@components/Group';
import { FlatList,  HStack,  Heading,  Text,  VStack } from 'native-base';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
  const [groups, setGroups ] = useState(['Costas', 'Biceps', 'Triceps', 'Ombro']);
  const [groupSelected, setGroupSelected ] = useState("ombro");

    return (
        <VStack flex={1}>
          <HomeHeader />
         <FlatList
         horizontal
         data={groups}
         keyExtractor={(item) => item}
         renderItem={({ item })=>(
          <Group 
          name={item} 
         isActive={groupSelected === item}
         onPress={() => setGroupSelected(item)}
          />
         )}
         showsVerticalScrollIndicator={false}
         _contentContainerStyle={{ px: 8}}
         my={10}
         maxH={10}
         />
          <HStack>
            <Heading>
              Exercicios
            </Heading>

            <Text>
              4
            </Text>
          </HStack>
      
        </VStack>
    )
}