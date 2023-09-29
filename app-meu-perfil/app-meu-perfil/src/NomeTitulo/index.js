import { View, Text } from 'react-native';
import { styles } from './styles';

export default function NomeTitulo() {
  let nome = 'Guilherme Dias Nacari Eduardo';
  return (
    <View>
      <Text style={styles.titulo}>
        {'\n'}
        {'\n'}
        {nome}
      </Text>
    </View>
  );
}
