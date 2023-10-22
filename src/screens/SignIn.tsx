import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignIn() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();
 
  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          alt="Pessoas treinando na academia"
          position="absolute"
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
            Acesse a sua conta
          </Heading>

          <Input
            keyboardType="email-address"
            placeholder="E-mail"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda nao tem acesso?
          </Text>
          <Button
            onPress={handleNewAccount}
            title="Criar conta"
            variant="outline"
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
