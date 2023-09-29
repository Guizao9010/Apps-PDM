import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [result, setResult] = useState();

  function multiply() {
    setResult(valor1 * valor2);
  }

  return (
    <View>
      <Text style={styles.titulo}>Multiplicador de Números</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        onChangeText={setValor1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        onChangeText={setValor2}
      />
      <Text>{'\n'}</Text>
      <Button color="#00BFFF" title="Calcular" onPress={multiply} />
      <Text style={styles.texto}>Resultado: {result} </Text>
    </View>
  );
}
