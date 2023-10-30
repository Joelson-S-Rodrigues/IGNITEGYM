import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { VStack, ScrollView, Center, Skeleton, Text, Heading, useToast} from 'native-base';

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { UserPhoto } from '@components/UserPhoto';
import { ScreenHeader } from '@components/ScreenHeader';

const PHOTO_SIZE = 33;

export function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false );
    const [userPhoto, setUserPhoto] = useState("https://github.com/Joelson-S-Rodrigues.png")

    const toast = useToast();

   async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);
       try{
    const photoSelected =  await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            aspect: [4, 4],
            allowsEditing: true,
          });

          
    if(photoSelected.canceled) {
        return;
    }

    if(photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri)

        if(photoInfo.exists && (photoInfo.size / 1024 / 1024) > 5) {
            return toast.show(
                {
                    title: "Essa imagem é muito grande. Escolha uma de até 5MB",
                    placement: "top",
                    bgColor:"red.500"
                }

            );
            
        }

        setUserPhoto(photoSelected.assets[0].uri)
    }


}
    catch (error) {
    console.log(error)
   }
   finally {

    setPhotoIsLoading(false);

   }
}


    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />
            <ScrollView contentContainerStyle={{paddingBottom: 28}}>
              <Center mt={6} px={10}> 
                {
                    photoIsLoading ?
                <Skeleton 
                  w={PHOTO_SIZE}
                   h={PHOTO_SIZE} 
                   rounded="full" 
                   startColor="gray.600"
                   endColor="gray.350"
                    />
                   :
                <UserPhoto 
                source={{uri: userPhoto }}
                alt="Foto do usuário"
                size={PHOTO_SIZE}
                />

                }


                <TouchableOpacity onPress={handleUserPhotoSelect}>
                    <Text color="green.500" mt={2} fontWeight="bold" fontSize="md" mb={8}>
                        Alterar foto
                    </Text>
                </TouchableOpacity>



                <Input 
                placeholder="Nome"
                />
                
                <Input 
                placeholder="E-mail"
                value="E-mail"
                isDisabled
                />
                </Center>

                <VStack px={10} mt={12} mb={9}>
                    <Heading color="gray.200" fontSize="md" mb={2}>
                        Alterar senha
                    </Heading>
                <Center> 
                    <Input
                    placeholder="Senha antiga"
                    secureTextEntry
                    />

                    <Input
                    placeholder="Nova senha"
                    secureTextEntry
                    />

                    <Input
                    placeholder="Confirme a nova senha"
                    secureTextEntry
                    />

                    <Button
                    title="Atualizar"
                     />
                    </Center>
                </VStack>
            </ScrollView>
        </VStack>
    )
}