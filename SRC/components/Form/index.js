import { View, TextInput, Button, Text } from "react-native";
import React, {  useState } from "react"; 
import ResultImc from "./ResultImc";
export default function Form(){

  const [altura, setAltura]  = useState(null)
  const [peso, setPeso] = useState(null)
  const [messageIMC, setMessageImc] = useState("digite seu peso e altura");
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("CALCULAR IMC")

  function imcCalculator(){
    return setImc((peso/(altura*altura)).toFixed(2))

  }

 function validation(){
        if( peso != null && altura != null){
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Resultado do seu imc = ")
           setTextButton("Calcular Novamente")
           return
        }
        setImc(null)
        setTextButton("CALCULAR")
        setMessageImc("Preencha Peso E Altura")
    }


  
    return(
      <View>
        <View>
            <Text>Altura</Text>
            <TextInput
            onChangeText={setAltura}
            value={altura}
            placeholder="EX. 1.80"
            keyboardType="Numeric"
            />

        <Text>Peso</Text>
            <TextInput
            onChangeText={setPeso}
            value={peso}
            placeholder="EX. 75.5"
            keyboardType="Numeric"
            />

            <Button 
            onPress={() => validation}
            title={textButton}/>

        </View>
         <ResultImc
         messageResultImc={messageIMC}
         resultImc={imc}
         />
      </View>
    );

    }
