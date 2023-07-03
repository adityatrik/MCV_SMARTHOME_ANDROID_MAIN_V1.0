import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';


export function Server() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Smart Home</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.infoContainer}>
            <View style={styles.action}>
                <TextInput 
                    placeholder="IP Server"
                    placeholderTextColor="#666666"
                    autoCapitalize="none"
                    style={{color: 'white'}}
                    // onChangeText={(val) => setIP(val)}
                />
            </View>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Username"
                    placeholderTextColor="#666666"
                    autoCapitalize="none"
                    style={{color: 'white'}}
                    // onChangeText={(val) => setUsername(val)}
                />
            </View>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#666666"
                    autoCapitalize="none"
                    style={{color: 'white'}}
                    // onChangeText={(val) => setPassword(val)}
                />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2E2E3E',
    },
    header: {
      marginTop: 30,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 38,
      fontWeight: 'bold',
    },
    body: {
      justifyContent: 'center',
    },
    infoContainer: {
        backgroundColor: '#4D4D5E',
        padding: 16,
        borderRadius: 8,
        margin:20,
    },
    infoItem: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    button: {
      marginTop: 20,
      backgroundColor: '#79D40C',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
  });