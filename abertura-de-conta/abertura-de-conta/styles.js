import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  titulo: {
    fontSize: 20,
    fontFamily: 'cursive',
    fontWeight: 'normal',
    textAlign: 'center',
    marginLeft: 60,
    marginRight: 50,
    color: 'red',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 18,
    padding: 10,
  },
  texto: {
    margin: 0,
    fontSize: 20,
    fontFamily: 'cursive',
    textAlign: 'center',
  },
  linha: {
    margin: 15,
    fontSize: 20,
    fontFamily: 'cursive',
  },
  switch: {
    marginLeft: 15,
  },
  slider: {
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  },
    espac: {
    margin: 10,
  },
});

export { styles };
