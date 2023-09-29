import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box:{
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "lightgray",
    borderRadius: 5
  },
  titulo: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'normal',
    textAlign: 'center',
    marginLeft: 60,
    marginRight: 50,
    marginTop: 20,
    color: 'darkred'
  },
  textot: {
    fontSize: 15,
    margin: 30,
    color: 'darkblue',
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 15,
    margin: 15,
    fontWeight: 'bold'
  },
})

export { styles };
