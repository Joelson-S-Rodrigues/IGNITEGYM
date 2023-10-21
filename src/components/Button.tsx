import { Button as ButtonNative, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
    title: string;
    variant?: "solid" | "outline"
}

export function Button({title, variant = "solid", ...rest}: Props) {
    return (

        <ButtonNative 
        w="85%"
        h={14}
        bg={variant === "outline" ? "transparent" : "green.700"}
        borderWidth={variant === "outline" ? 1 : 0}
        borderColor="green.500"
        rounded="sm"
        _pressed={{
            bg:variant === "outline" ? "green.500" : "green.500",
        }}
        { ...rest}>
            <Text
             color="white" 
             fontFamily="heading" 
             fontSize="sm"
             >
                {title}
            </Text>
        </ButtonNative>
    );
}