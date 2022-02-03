import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
const [, setErrorMessage] = useState(null)

useEffect(() =>{
  load()
}, [])
async function load() {
  try {
    let { status } = await Location.requestBackgroundPermissionsAsync()

    if( status !=='granted') {
      setErrorMessage('Access needed')
      return
    }
    const location = await Location.getCurrentPositionAsync()

    const {latitude, longitude} = Location.coords
    alert(`Latitude : ${latitude}, Longitude: ${longitude}`)

  } catch (errror) {

  }
}
    return (
      <View style={styles.container}>

        {/* FindMe */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Find ME</Text>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => alert('Hello, world!')}
              style={{ backgroundColor: 'blue' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"

  },

  list: {

  },
});
