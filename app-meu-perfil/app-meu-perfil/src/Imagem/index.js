import { Image } from 'react-native';
import { styles } from './styles';

export default function Imagem() {
  let img =
    'https://i.kym-cdn.com/entries/icons/medium/000/045/846/oppsmile.jpg';
  return (
    <Image
      source={{ uri: img }}
      style={styles.fotoperfil}
    />
  );
}
