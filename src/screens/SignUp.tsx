import { useNavigation } from '@react-navigation/native';
import { Center,
    Image,
    Text,
    VStack,
    Heading,
    ScrollView
} 
from 'native-base';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { WIDTH } from './SignIn';

export function SignUp() {
    const navigation = useNavigation();

    function handleGoBack() {
      navigation.goBack();
    }

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}> 
        <VStack flex={1} >
            <Image 
            alt="Pessoas treinando na academia"
            position="absolute"
          defaultSource={BackgroundImg}
            source={BackgroundImg}
            resizeMode="contain"
            />

            <Center my={24}> 
            <LogoSvg />
                <Text color="gray.100" fontSize="sm">
                    Treine a sua mente e o seu corpo
                </Text>
            </Center>
            <Center>

            <Heading color="gray.100" fontFamily="heading" fontSize="xl" mb={6}>
            Crie a sua conta
            </Heading>  

            <Input 
            placeholder="Nome"
            w={WIDTH}
             />   

            <Input 
            keyboardType="email-address"
            placeholder="E-mail"
            autoCapitalize="none"
            w={WIDTH}
             />   
             
            <Input 
            placeholder="Senha"
            secureTextEntry
            w={WIDTH}
            />   
                <Button
                w={WIDTH}
                title="Criar e acessar"/>

            </Center>
           
           <Center mt={24}>
                
                
            <Button
             w={WIDTH} 
              onPress={handleGoBack}
               title="Voltar para o login" 
               variant="outline"
               />

           </Center>


        </VStack>
        </ScrollView>
    )
}