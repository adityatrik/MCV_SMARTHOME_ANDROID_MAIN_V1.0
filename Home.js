import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, Switch, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

export function Home({ navigation }) {
  const [data_lampu, setData] = useState([
    {
      lampu_id: 1,
      mode: false,
      dimming: 0
    },
    {
      lampu_id: 2,
      mode: true,
      dimming: 50
    },
    {
      lampu_id: 3,
      mode: true,
      dimming: 80
    },
    {
      lampu_id: 4,
      mode: false,
      dimming: 0
    },
    {
      lampu_id: 5,
      mode: true,
      dimming: 100
    },
  ]);
  const [bgNotification,setBgNotification] = useState("#79D40C");
  const [tempValue,setTempValue] = useState("25");
  const [humValue,setHumValue] = useState("50");
  const [pirValue,setPirValue] = useState("Tidak Ada");
  const [pintuValue,setPintuValue] = useState("Tertutup");
  const [gasValue,setGasValue] = useState("10");
  const [asapValue,setAsapValue] = useState("5");
  const [alarmValue,setAlarmValue] = useState("Rumah Aman");
  const toggleSwitch = (lampu_id) => {
    const updatedArray = data_lampu.map((item) => {
      if (item.lampu_id === lampu_id) {
        console.log(!item.mode);
        var stateLampu;
        if (item.mode === true) {
          stateLampu = "1";
        }else
        {
          stateLampu = "0";
        }
        axios.post('http://103.123.62.36:3000/api/monitoring', {
          data: `{"l${lampu_id}":"${stateLampu}"}`,
        })
          .then(response => {
            console.log(response.data);
            setTempValue(response.data.t);
            setHumValue(response.data.h);
            if (response.data.pintu === "1") {
              setPintuValue("Tertutup");
            }else if (response.data.pintu === "0") {
              setPintuValue("Terbuka");
            }
            if (response.data.pintu === "0") {
              setPirValue("Tidak Ada");
            }else if (response.data.pintu === "1") {
              setPirValue("Ada Orang");
            }
            setGasValue(response.data.lpg_gas);
            setAsapValue(response.data.smoke_gas)
            // setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
          });
        return { ...item, mode: !item.mode };
      }
      return item;
    });

    setData(updatedArray);
  };

  const [value, setValue] = useState(50);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (data_lampu[0].mode === true) {
        var stateLampu1 = "0";
      }else {
        var stateLampu1 = "1";
      }
      
      if (data_lampu[1].mode === true) {
        var stateLampu2 = "0";
      }else {
        var stateLampu2 = "1";
      }
      
      if (data_lampu[2].mode === true) {
        var stateLampu3 = "0";
      }else {
        var stateLampu3 = "1";
      }
      
      if (data_lampu[3].mode === true) {
        var stateLampu4 = "0";
      }else {
        var stateLampu4 = "1";
      }
      
      if (data_lampu[4].mode === true) {
        var stateLampu5 = "0";
      }else {
        var stateLampu5 = "1";
      }

      axios.post('http://103.123.62.36:3000/api/monitoring', 
      { 
        data: `{"l1":"${stateLampu1}","l2":"${stateLampu2}","l3":"${stateLampu3}","l4":"${stateLampu4}","l5":"${stateLampu5}"}` 
      })
        .then(response => {
          // console.log(response.data);
          setTempValue(response.data.t);
            setHumValue(response.data.h);
            if (response.data.pintu === "1") {
              setPintuValue("Tertutup");
            }else if (response.data.pintu === "0") {
              setPintuValue("Terbuka");
            }
            if (response.data.pir === "0") {
              setPirValue("Tidak Ada");
            }else if (response.data.pintu === "1") {
              setPirValue("Ada Orang");
            }
            setGasValue(response.data.lpg_gas);
            setAsapValue(response.data.smoke_gas)
            if (response.data.alarm === "0") {
              setAlarmValue("Rumah Aman");
              setBgNotification("#79D40C");
            }else if (response.data.alarm === "1") {
              setAlarmValue("Gas Terdeteksi !!");
              setBgNotification("#EA1F1F");
            }
            else if (response.data.alarm === "2") {
              setAlarmValue("Asap Terdeteksi !!");
              setBgNotification("#EA1F1F");
            }
            else if (response.data.alarm === "3") {
              setAlarmValue("Pintu Terbuka !!");
              setBgNotification("#EA1F1F");
            }
        })
        .catch(error => {
          console.error(error);
        });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Smart Home</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.subTitle}>Hello</Text>
          <Text style={styles.subTitle}>Rivan Wolker</Text>
        </View>
        <View style={styles.column}>
          <Image
            source={require('./assets/profile-photo.jpg')}
            style={styles.image}
          />
        </View>
      </View>
      <View>
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.group}>
                <Text style={styles.keterangan}><FontAwesome5 name="temperature-high" size={24} /> {tempValue} C</Text>
                <Text style={{ color: '#fff', fontSize: 16 }}>Temperature</Text>
              </View>
              <View style={styles.group}>
                <Text style={styles.keterangan}><Ionicons name="person" size={24} /> {pirValue}</Text>
                <Text style={{ color: '#fff', fontSize: 16 }}>PIR</Text>
              </View>
              <View>
                <Text style={styles.keterangan}><FontAwesome5 name="fire" size={24} /> {gasValue} ppm</Text>
                <Text style={{ color: '#fff', fontSize: 16 }}>Gas</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.group}>
                <Text style={styles.keterangan}><Ionicons name="ios-water" size={24} /> {humValue} %</Text>
                <Text style={{ color: '#fff', fontSize: 16 }}> Humidity</Text>
              </View>
              <View style={styles.group}>
                <Text style={styles.keterangan}><MaterialCommunityIcons name="door-open" size={24} /> {pintuValue}</Text>
                <Text style={{ color: '#fff', fontSize: 16 }}> Magnetic Switch</Text>
              </View>
              <View>
                <Text style={styles.keterangan}><MaterialCommunityIcons name="smoke" size={24} /> {asapValue} ppm</Text>
                <Text style={{ color: '#fff', fontSize: 16 }}> Asap</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: bgNotification,padding: 10,margin: 15,borderRadius: 8}}>
          <Text style={{ alignSelf: 'center', justifyContent: 'center', color: '#fff', fontSize: 26, fontWeight: 'bold', }}><AntDesign name="" size={30} />{alarmValue}</Text>
        </View>
        {data_lampu.map((data, index) => (
          <View style={styles.infoContainer}>
            <View style={styles.row} key={data.lampu_id}>
              <View style={styles.column}>
                <Text key={data.lampu_id} style={styles.keterangan}><MaterialCommunityIcons name="lightbulb-on-outline" size={34} /> Lampu {index + 1}</Text>
              </View>
              <View style={styles.column}>
                <Switch
                  key={data.lampu_id}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={data.mode ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => toggleSwitch(data.lampu_id)}
                  value={data.mode}
                />
              </View>
            </View>
            {/* <View style={styles.row}>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={data.dimming}
                onValueChange={handleChange}
              />
              <Text style={styles.valueText}>{value}%</Text>
            </View> */}
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
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    paddingStart: 16,
    paddingTop: 6,
  },
  group: {
    marginBottom: 20,
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
  subTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  keterangan: {
    color: '#fff',
    fontSize: 20,
  },
  infoContainer: {
    backgroundColor: '#3F3F54',
    padding: 10,
    margin: 15,
    borderRadius: 8,
  },
  infoNotification: {
    backgroundColor: '#79D40C',
    padding: 10,
    margin: 15,
    borderRadius: 8,
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginEnd: 15,
    alignSelf: "flex-end"
  },
  slider: {
    width: '80%',
    marginBottom: 20,
  },
  valueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});