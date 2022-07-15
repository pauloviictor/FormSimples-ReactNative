import React, { Component } from "react";
import { View, Text, TextInput, Switch, StyleSheet, TouchableOpacity } from 'react-native';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      name: '',
      age: '',
      gender: 0,
      money: 0,
      student: false

    }
  }
  
  render(){
    return(
      <View>

        <View style={styles.logo}>
          <Text style={styles.logoText}>Form about me</Text>
        </View>

        <View style={styles.inputArea}>
        <Text>Nome: </Text>
        <TextInput style={styles.input}
        placeholder = 'Digite seu nome'
        onChangeText={(value) => this.setState({name: value})}
        />          
        </View>

        <View style={styles.inputArea}>
          <Text>Idade: </Text>
          <TextInput style={styles.input}
          placeholder = 'Digite sua idade'
          onChangeText={(value) => this.setState({age: value})}
          />          
        </View>
        
        <View style={styles.inputArea}>
          <Text>Sexo: </Text> 
          <TextInput style={styles.input}
          placeholder = 'Trocar para Picker'
          />   
        </View>

        <View style={styles.inputArea}>
          <Text>Saldo: </Text>
          <TextInput style={styles.input}
          placeholder = 'Trocar para Slider'
          />          
        </View>

        <View style={styles.inputArea}>
          <Text>Estudante: </Text>
          <Switch
          value={this.state.student}
          onValueChange={ (valueSwitch) => this.setState({student: valueSwitch})} 
          />        
        </View>

        <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btnSend} 
        onPress={() => alert("Nome: " + this.state.name + '\n' +"idade: " + this.state.age + '\n' 
        + (this.state.student ? "É estudante" : "Não é estudante"))}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>

        </View>
        

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1
  },
  logo:{
    alignItems: 'center', 
    margin: 15
  },
  logoText:{
    fontSize: 25,
    color: '#6B8F6A',
    fontWeight: 'bold'
  },
  inputArea:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10
  },
  input:{
    width: 300,
    height: 40,
    backgroundColor: '#DBCED5',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 15,
    padding: 5
  },
  btnArea:{
    alignItems: 'center',
  },
  btnSend:{
    width: 150,
    height: 40,
    backgroundColor: '#2F64A8',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 70,
    borderRadius: 20,
  },
  btnText:{
    fontWeight: 'bold',
    color:'white'
  }
})

export default App;