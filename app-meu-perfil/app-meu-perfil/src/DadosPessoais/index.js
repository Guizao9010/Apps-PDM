import { View, Text } from 'react-native';
import {styles} from './styles';


export default function DadosPessoais() {
  return (
    <View>
      <Text style={styles.topico}>Dados Pessoais</Text>
      <Text style={styles.descricao}>📧E-mail: guilherme@gmail.com</Text>
    </View>
  );
}

