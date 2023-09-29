import React, { Component, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {'\n'}Vagas de Emprego{'\n'}
        {'\n'}
      </Text>
      <ScrollView showsScrollIndicator={false}>
        <View style={styles.box}>
          <Text style={styles.textot}>Desenvolvedor Backend Júnior</Text>
          <Text style={styles.texto}>
          Salário: R$3000,00 {'\n'}{'\n'}
          Descrição: Os devs backend devem ter a habilidade de implementar algoritmos e resolver problemas relacionados ao sistema.
          {'\n'}Contato: (13) 4002-8922
          </Text>
        </View>
        <View style={styles.box}>
         
          <Text style={styles.textot}>Analista de Suporte</Text>
          <Text style={styles.texto}>
          Salário: R$2150,00 {'\n'}{'\n'}
          Descrição: O analista de suporte é um profissional de tecnologia da informação especialista em tecnologias, constantemente atualizado com novidades mercadológicas de hardware e software
          {'\n'}Contato: (13) 93466-9673
          </Text>
        </View>
        <View style={styles.box}>
         
          <Text style={styles.textot}>Analista de Banco de Dados</Text>
          <Text style={styles.texto}>
          Salário: R$7000,00 {'\n'}{'\n'}
          Descrição: Os analistas de banco de dados organizam e dão sentido às coletas de informações para compilar em sistemas de banco de dados funcionais.
          {'\n'}Contato: (11) 3561-7727
          </Text>
        </View>
        <View style={styles.box}>
          
          <Text style={styles.textot}>Designer de Interface (UX)</Text>
          <Text style={styles.texto}>
          Salário: R$4500,00 {'\n'}{'\n'}
          Descrição: Os designers de interface são responsáveis pela aparência de um produto digital, criando aspectos visuais de um site ou aplicativo
          {'\n'}Contato: (12) 98858-8550
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
