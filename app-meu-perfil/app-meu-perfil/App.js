import { View } from 'react-native';
import NomeTitulo from './src/NomeTitulo';
import Imagem from './src/Imagem';
import DadosPessoais from './src/DadosPessoais';
import Formacao from './src/Formacao';
import Experiencia from './src/Experiencia';
import Projetos from './src/Projetos';

export default function App() {
  return (
    <View>
      <NomeTitulo />
      <Imagem />
      <DadosPessoais />
      <Formacao />
      <Experiencia />
      <Projetos />
    </View>
  );
}
