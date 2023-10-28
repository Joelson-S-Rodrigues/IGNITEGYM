import { useState } from 'react'; 
import { VStack, Heading, SectionList, Text } from 'native-base';

import {ScreenHeader } from '@components/ScreenHeader';
import {HistoryCard } from '@components/HistoryCard';

export function History() {
    const [exercises, setExercises] = useState([
            {
              title: "26.08.23",
              data: ["Puxada frontal", "Remada unilateral"],
            },
            {
              title: "27.08.23",
              data: ["Puxada frontal"],
            },
        
        ]);

    return (
        <VStack flex={1} bg="gray.600" >
            <ScreenHeader title="Histórico de Exercícios" />

           <SectionList
           sections={exercises}
           keyExtractor={item => item}
           renderItem={({ item}) => (
            <HistoryCard />
           )}
           renderSectionHeader={({ section }) => (
            <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
                {section.title}
            </Heading>
           )}
           px={8}
           contentContainerStyle={exercises.length === 0 && {flex: 1, justifyContent: "center"}}
           ListEmptyComponent={() => (
            <Text color="white" textAlign="center" >
             Não há exercícios registrados. {'\n'}
             Vamos fazer exercícios hoje?
             </Text>
           )}
           showsVerticalScrollIndicator={false}
            />
        </VStack>
    )
}