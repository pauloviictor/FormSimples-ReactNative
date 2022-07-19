import React, { Component } from "react";
import { View, Text, TextInput, Switch, StyleSheet, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      name: '',
      age: '',
      gender: 0,
      genders: [
        {genderName: 'Male', val: 1},
        {genderName: 'Female', val: 2},
        {genderName: 'Others', val: 3},
      ],
      money: 50,
      student: false

    }
  }
  
  render(){

    let genderItems = this.state.genders.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.genderName}/>
    })

    return(
      <View style={styles.main}>

        <View style={styles.logo}>
          <Text style={styles.logoText}>Form about me</Text>
        </View>

        <View style={styles.inputArea}>
          <View style={styles.inputTextArea}>
            <Text style={styles.inputText}>Name</Text>
          </View>
          <TextInput style={styles.input}
          placeholder = 'Your name'
          onChangeText={(value) => this.setState({name: value})}
          />          
        </View>

        <View style={styles.inputArea}>
          <View style={styles.inputTextArea}>
            <Text style={styles.inputText}>Age</Text>
          </View>
          <TextInput style={styles.input}
          placeholder = 'Your age'
          onChangeText={(value) => this.setState({age: value})}
          keyboardType={'number-pad'}
          />          
        </View>

        <View style={styles.inputTextArea}>
            <Text style={styles.pickerText}>Gender</Text>
          </View>
        
        <View style={styles.pickerGender}>
            <Picker
            selectedValue={this.state.gender}
            onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}
            mode={'dropdown'}
            >
                {genderItems}
            </Picker>
        </View>

        <View style={styles.inputArea}>

          <Text style={styles.sliderText}>Balance: $ {this.state.money.toFixed(2)}</Text>

          <Slider
          style={styles.sliderArea}
          minimumValue={50}
          maximumValue={5000}
          value={this.state.money}
          onValueChange={(money) => this.setState({money: money})}
          />
        </View>

        <View style={styles.switchArea}>
          <Text style={styles.inputText}>Student: </Text>
          <Switch
          value={this.state.student}
          onValueChange={ (valueSwitch) => this.setState({student: valueSwitch})} 
          />        
        </View>

        <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btnSend} 
        onPress={() => alert("Nome: " + this.state.name + '\n' +"idade: " + this.state.age + '\n' +
        "Gênero: " + this.state.gender + '\n' + (this.state.student ? "É estudante" : "Não é estudante"))}>
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>

        </View>
        

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: '#F4FFEF',
    justifyContent: 'center',
  },
  logo:{
    alignItems: 'center', 
    margin: 15
  },
  logoText:{
    fontSize: 25,
    fontFamily: 'Verdana',
    color: '#6B8F6A',
    fontWeight: 'bold'
  },
  inputTextArea:{
    width: '100%',
    justifyContent: 'flex-start',
    marginLeft: 110,
    marginBottom: -10
  },
  inputText:{
    fontSize: 16,
    fontWeight: '700',
    alignItems: 'flex-start',
    color: '#0D7008'
  },
  inputArea:{
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  input:{
    width: 300,
    height: 40,
    backgroundColor: '#C9FFB0',
    margin: 10,
    borderRadius: 15,
    fontSize: 15,
    padding: 10
  },
  pickerGender:{
    borderRadius: 15,
    marginLeft: 55,
    backgroundColor: '#C9FFB0',
    width: 300,
    margin: 10
  },
  pickerText:{
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
    fontWeight: '700',
    alignItems: 'flex-start',
    marginLeft: -45,
    color: '#0D7008'
  },
  switchArea:{
    marginLeft: 70,
    flexDirection: 'row'
  },
  sliderArea:{
    width: 300,
    margin: 10
  },
  sliderText:{
    fontSize:22,
    color: '#0D7008',
    fontWeight:'700',
    margin: 20
  },
  btnArea:{
    alignItems: 'center',
  },
  btnSend:{
    width: 150,
    height: 40,
    backgroundColor: '#32CF57',
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