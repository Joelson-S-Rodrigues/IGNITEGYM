import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Center, Image, Text, VStack, Heading, ScrollView } from 'native-base';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { WIDTH } from './SignIn';

type FormDataProps = {
    name: string,
    email: string,
    password: string,
    password_confirm: string
}


export function SignUp() {

    const navigation = useNavigation();

    const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>();

    function handleGoBack() {
      navigation.goBack();
    }

    function handleSignUp({name, email, password, password_confirm}:FormDataProps) {
        console.log({name, email, password, password_confirm});
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

        <Controller 
            control={control}
            name="name"
            rules={{
                required: 'Informe o nome'
            }}
            render={({field: {onChange, value}})=> (
                <Input 
                w={WIDTH}
                placeholder="Nome"
                onChangeText={onChange}
                errorMessage={errors.name?.message}
                value={value}
                />   
            )}
            />
        <Controller 
                control={control}
                name="email"
                rules={{
                    required: 'Informe o e-mail',
                    pattern: {
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido'
                    }
                }}
                render={({field: {onChange, value}})=> (
                    <Input 
                    w={WIDTH}
                    keyboardType="email-address"
                    placeholder="E-mail"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    errorMessage={errors.email?.message}
                    value={value}
                    />   
                )}
                />
              
        <Controller 
                control={control}
                name="password"
                render={({field: {onChange, value}})=> (
                    <Input 
                    w={WIDTH}
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
                    />   
                )}
                />

          
        <Controller 
                control={control}
                name="password_confirm"
                render={({field: {onChange, value}})=> (
                    <Input 
                    w={WIDTH}
                    placeholder="Confirme a senha"
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(handleSignUp)}
                    />   
                )}

                />
        
                <Button
                w={WIDTH}
                title="Criar e acessar"
                onPress={handleSubmit(handleSignUp)}
                />

            </Center>
           
           <Center mt={24}>
                
                
            <Button
             w={WIDTH} 
             title="Voltar para o login" 
             variant="outline"
               />

           </Center>


        </VStack>
        </ScrollView>
    )
}