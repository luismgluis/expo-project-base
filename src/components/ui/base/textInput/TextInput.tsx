import React from "react";
import { TextInput as TextInput_ } from "react-native-paper";

type TextInputProps = {}
const TextInput: React.FC<TextInputProps> = ({ }) => {
    return <TextInput_ label="Name" placeholder="John Wick"></TextInput_>
}
export default TextInput;