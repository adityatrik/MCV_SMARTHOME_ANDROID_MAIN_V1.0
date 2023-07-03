import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Text, TextInput, View, LogBox, Image } from 'react-native';

export function Log({ navigation, route }) {
  const [postText, setPostText] = React.useState('');
  const [dataLog, setDataLog] = React.useState([]);
  const [timeLog, setTimeLog] = React.useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.post('http://103.123.62.36:3000/api/monitoring',
        {
          data: `{"log":"true"}`
        })
        .then(response => {
          // console.log(response.data);
          let dataHttp1 = `{"alarm":"${response.data.alarm}","h":"${response.data.h}","t":"${response.data.t}"}`
          let dataHttp2 = `{"lpg_gas":"${response.data.lpg_gas}","smoke_gas":"${response.data.smoke_gas}","pintu":"${response.data.pintu}"}`
          const timestampedData1 = {
            timestamp: new Date().toLocaleString(),
            data : dataHttp1
          };
          const timestampedData2 = {
            timestamp: new Date().toLocaleString(),
            data : dataHttp2
          };
          setDataLog(prevData => [timestampedData1, ...prevData.slice(-9)]);
          setDataLog(prevData => [timestampedData2, ...prevData.slice(-9)]);
        })
        .catch(error => {
          console.error(error);
        });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Smart Home</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subTitle}>Log Data</Text>
      </View>
      <View style={styles.body}>
        {dataLog.map((entry, index) => (
          <View style={styles.infoContainer}>
            <Text style={styles.infoItem}>{entry.timestamp}</Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{entry.data}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
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
  subHeader: {
    marginBottom: 0,
    marginHorizontal: 20,
    marginTop: 10,
    height: 60,
  },
  title: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    justifyContent: 'center',
  },
  infoContainer: {
    backgroundColor: '#4D4D5E',
    padding: 16,
    borderRadius: 8,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 20,
  },
  infoItem: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2E2E3E',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    // fontWeight: 'bold',
  },
});