import { Text, TouchableOpacity ,TouchableOpacityProps} from "react-native";
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
export  function Button({title,...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}

      className="w-full py-3 bg-red-600 rounded-lg items-center"
    >
      <Text className="font-heading text-lg">{title}</Text>
    </TouchableOpacity>
  )
}
