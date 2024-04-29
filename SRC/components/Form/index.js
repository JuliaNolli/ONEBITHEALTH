import React from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function Form(){
    return(
      <View>
        <View>
            <Text>Altura</Text>
            <TextInput
            placeholder="EX. 1.80"
            keyboardType="Numeric"
            />

        <Text>Peso</Text>
            <TextInput
            placeholder="EX. 75.5"
            keyboardType="Numeric"
            />

            <Button title="Calcular"/>

        </View>
      </View>
    );
}