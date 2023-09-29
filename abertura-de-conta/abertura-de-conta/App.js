import React, { Component, useState } from 'react';
import {
  View,
  Text,
  Switch,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

export default function App() {
  let initial_escs = [
    { id: 1, nome: 'Fundamental Incompleto' },
    { id: 2, nome: 'Médio Incompleto' },
    { id: 3, nome: 'Superior Incompleto' },
    { id: 4, nome: 'Fundamental Completo' },
    { id: 5, nome: 'Médio Completo' },
    { id: 6, nome: 'Superior Completo' },
  ];

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();
  const [esc, setEsc] = useState(0);
  const [escs, setEscs] = useState(initial_escs);
  const [lim, setLim] = useState();
  const [bra, setBra] = useState(false);
  const [exb, setExb] = useState(false);

  let escItem = escs.map((valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />;
  });

  function Dados() {
    return (
      <View>
        <Text style={styles.texto}>{exb ? nome : ''}</Text>
        <Text style={styles.texto}>{exb ? idade : ''}</Text>
        <Text style={styles.texto}>{exb ? sexo : ''}</Text>
        <Text style={styles.texto}>{exb ? escs[esc].nome : ''}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>
          {'\n'}Abertura de Conta{'\n'}
          {'\n'}
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setNome}
          placeholder="Nome"></TextInput>

        <TextInput
          style={styles.input}
          onChangeText={setIdade}
          placeholder="Idade"></TextInput>

        <Picker
          style={styles.input}
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
          <Picker.Item key={1} value={'Masculino'} label="Masculino" />
          <Picker.Item key={2} value={'Feminino'} label="Feminino" />
          <Picker.Item key={3} value={'Outro'} label="Outro" />
        </Picker>

        <Picker
          style={styles.input}
          selectedValue={esc + 1}
          onValueChange={(itemValue, itemIndex) => setEsc(itemIndex)}>
          {escItem}
        </Picker>

        <View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10000}
            onValueChange={(valorSelecionado) => setLim(valorSelecionado)}
            value={lim}
            step={100}
            minimumTrackTintColor="lightgreen"
            maximumTrackTintColor="gray"
            thumbTintColor="lightgreen"
          />
          <Text style={styles.texto}>Limite: {lim}</Text>
        </View>
        <Text style={styles.linha}>Brasileiro? {bra ? 'Sim' : 'Não'}</Text>
        <Switch
          style={styles.switch}
          value={bra}
          onValueChange={(valorSwitch) => setBra(valorSwitch)}
        />

        <View style={styles.espac}></View>

        <Button color="teal" title="Confirmar" onPress={() => setExb(true)} />

        <View style={styles.espac}></View>

        <Dados />
      </View>
    </ScrollView>
  );
}
