import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text,TextInput, View,LogBox,Image } from 'react-native';


export function Setting({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Smart Home</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoItem}>IP Server: 103.163.392.234</Text>
            <Text style={styles.infoItem}>Username: admin</Text>
            <Text style={styles.infoItem}>Password: ******</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('server')}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoItem}>ID Device: 1</Text>
            <Text style={styles.infoItem}>Interval Pengiriman: 1 Detik</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('interval')}>
              <Text style={styles.buttonText}>Edit</Text>
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
  });