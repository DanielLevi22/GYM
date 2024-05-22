import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


interface InputProps extends TextInputProps { }
interface InputPasswordProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

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

export function InputPassword({ value, onChangeText, secureTextEntry = false, ...rest }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={{ position: 'relative', width: '100%' }}>
      <TextInput
        className="bg-black text-white px-5 py-4 border-0 font-body rounded-lg mb-4 w-full focus:border focus:border-red-700"
        placeholderTextColor="#fff"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword && secureTextEntry}
        {...rest}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 18,
            right: 12,
            zIndex: 1,
          }}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}