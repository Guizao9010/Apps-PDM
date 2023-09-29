import { useState } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [numUser, setNumUser] = useState();
  const [res, setRes] = useState();

  function calc() {
      num = Math.floor(Math.random() * 11);
      if(numUser == num){
        setRes('Acertou! Parabéns! O número era ' + num + '!')
      }
      else{
        setRes('Você errou, que pena! O número era ' + num + '!')
      }
  }

  return (
    <View>
      <Text style={styles.titulo}>
        {'\n'}Jogo do Nº Aleatório{'\n'}
        {'\n'}
      </Text>
      <Image
        source={{
          uri: 'https://steamuserimages-a.akamaihd.net/ugc/443951430750011014/96C8346C6F303189987541949FC86D703DA0C01F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        }}
        style={styles.foto}
      />
      <Text style={styles.texto}>{'\n'}Digite um nº de 1 a 10</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNumUser}
      />
      <Text>{'\n'}</Text>
      <Button color="#4CBD2E" title="Descobrir" onPress={calc} />
      <Text style={styles.texto}>Resultado: {res}</Text>
    </View>
  )
}

