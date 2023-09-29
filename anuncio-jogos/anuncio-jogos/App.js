import React, { Component, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  let eafc =
    'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2023/07/FC24_standardkeyart_16x9.jpg';
  let sv =
    'https://store-images.s-microsoft.com/image/apps.44413.65985311967005000.4f51b5e9-febf-4990-8951-33ba59b634c9.924253ef-36b2-4cc0-8bb1-9a97c88d4828';
  let bg3 =
    'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg';
  let gowr =
    'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png';
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {'\n'}Anúncios de Jogos{'\n'}
        {'\n'}
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <Image source={{ uri: eafc }} style={styles.foto} />
          <Text style={styles.texto}>EA Sports FC 24</Text>
          <Text style={styles.texto}> DE R$359,99</Text>
          <Text style={styles.texto}> POR R$323,99</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: sv }} style={styles.foto} />
          <Text style={styles.texto}>Stardew Valley</Text>
          <Text style={styles.texto}>R$24,99</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: bg3 }} style={styles.foto} />
          <Text style={styles.texto}>Baldur's Gate 3</Text>
          <Text style={styles.texto}>R$199,99</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: gowr }} style={styles.foto} />
          <Text style={styles.texto}>God of War: Ragnarok</Text>
          <Text style={styles.texto}>R$349,90</Text>
        </View>
      </ScrollView>
    </View>
  );
}
