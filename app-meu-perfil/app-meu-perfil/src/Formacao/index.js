import { View, Text } from 'react-native';
import { styles } from './styles';

export default function Formacao() {
  return (
    <View>
      <Text style={styles.topico}>Formação</Text>
      <Text style={styles.descricao}>
        👨‍💻Análise e Desenvolvimento de Sistemas
      </Text>
    </View>
  );
}
