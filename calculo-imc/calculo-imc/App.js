import { useState } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [res, setRes] = useState();

  function resultado() {
      imc = (weight / (height * height))
    if (imc < 18.5) {
      setRes('Abaixo do Peso');
    } else if (imc < 25) {
      setRes('Peso Normal');
    } else if (imc < 30) {
      setRes('Sobrepeso');
    } else if (imc < 35) {
      setRes('Obesidade Grau I');
    } else if (imc < 40) {
      setRes('Obesidade Grau II');
    } else if (imc >= 40) {
      setRes('Obesidade Grau III ou Mórbida');
    }
  }

  return (
    <View>
      <Text style={styles.titulo}>
        {'\n'}Cálculo do IMC{'\n'}
        {'\n'}
      </Text>
      <Image
        source={{
          uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk',
        }}
        style={styles.foto}
      />
      <Text>{'\n'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu peso em quilos"
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura em metros"
        onChangeText={setHeight}
      />
      <Text>{'\n'}</Text>
      <Button color="#4CBD2E" title="Calcular" onPress={resultado} />
      <Text style={styles.texto}>Resultado: {res}</Text>
    </View>
  );
}
