import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box:{
    height: 300,
    width: 180,
    marginLeft: 2.5,
    marginRight: 2.5,
    backgroundColor: "lightyellow"
  },
  titulo: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'normal',
    textAlign: 'center',
    marginLeft: 60,
    marginRight: 50,
    marginTop: 100,
    color: 'darkblue'
  },
  foto: {
    width: 180,
    height: 180, 
    borderRadius: 5
  },
  texto: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 15,
    color: 'darkblue',
    fontWeight: 'bold'
  },
})

export { styles };
