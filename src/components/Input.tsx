import { Input as NativeBaseInput, IInputProps} from 'native-base'

export function Input({...rest}: IInputProps ) {
    return (
        <NativeBaseInput
        w="85%"
        bg="gray.600"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        mb={4}
        m={4}
        placeholderTextColor="gray.300"
        _focus={{
        bg:"gray.600",
        borderWidth: 1,
        borderColor:"green.500",
        }}
        {...rest}
        />
    )
}