import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [valor, setValor] = useState(0);

  function adicionar() {
    setValor(valor + 1);
  }

  function reduzir() {
    if (valor > 0) {
      setValor(valor - 1);
    } else {
      alert('O número mínimo de pessoas foi atingido');
    }
  }

  return (
    <View>
      <Text style={styles.titulo}>
        {'\n'}
        Contador de Pessoas
      </Text>
      <Text style={styles.valor}>{valor}</Text>
      <Button color="green" title="+" onPress={adicionar} />
      <Text>{'\n'}</Text>
      <Button color="red" title="-" onPress={reduzir} />
    </View>
  );
}
