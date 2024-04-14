import { TextInput,TextInputProps } from "react-native";


interface InputProps extends TextInputProps {}

export function Input({ value, onChangeText, ...rest }: InputProps) {
  return (
    <TextInput
      className="bg-black text-white px-5 py-4 border-0 font-body rounded-lg mb-4 w-full focus:border focus:border-red-700"
      placeholderTextColor="#fff"
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
}

