import { Image, View, ViewBase } from "react-native";

export function Avatar() {
  const imageUrl = 'https://mighty.tools/mockmind-api/content/human/44.jpg';

  return (
      <Image source={{ uri: imageUrl }}  className="w-14 h-14 rounded-full "/>

  );
}

