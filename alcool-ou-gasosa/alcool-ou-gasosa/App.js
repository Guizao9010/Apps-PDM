import { useState } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [alc, setAlc] = useState(0);
  const [gal, setGal] = useState(0);
  const [ans, setAns] = useState();

  function resultado() {
    if ((alc/gal) < 0.7) {
      setAns('Reabasteça com etanol!');
    } else {
      setAns('Reabasteça com gasolina!');
    }
  }

  return (
    <View>
      <Text style={styles.titulo}>{'\n'}Álcool ou Gasolina{'\n'}{'\n'}</Text>
      <Image 
        source={{uri:'https://blog.thinkseg.com/wp-content/uploads/2020/06/62b9f8c4-alcool-gasolina.jpg'}}
        style={styles.foto}
      />
      <Text>{'\n'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do litro do etanol"
        onChangeText={setAlc}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do litro da gasolina"
        onChangeText={setGal}
      />
      <Text>{'\n'}</Text>
      <Button color="#4CBD2E" title="Calcular" onPress={resultado} />
      <Text style={styles.texto}>Resultado: {ans}</Text>
    </View>
  );
}
