import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  StatusBar
} from 'react-native';

const App = () => {
  const [orientation, setOrientation] = useState('portrait');
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const isPortrait = height > width;
    setOrientation(isPortrait ? 'portrait' : 'landscape');
  }, [width, height]);

  return (
    <>
      <StatusBar
        backgroundColor={orientation === 'portrait' ? 'red' : 'green'}
        barStyle="dark-content" />
      <View
        style={[styles.landscapeContentContainer, orientation ===
          'portrait' ? styles.portraitContainer : styles.landscapeContainer]}>
        <Text
          style={[styles.text, orientation ===
            'portrait' ? styles.portraitText : styles.landscapeText]}>
          Orientation by Kevin Bell
        </Text>
      </View>
      <View
        style={[styles.container, orientation ===
          'portrait' ? styles.portraitContainer : styles.landscapeContainer]}>

        <View style={[styles.box, styles.box1]}>
          <View style={styles.innerBoxSmall}></View>
        </View>
        <View style={[styles.box, styles.box2]}>
          <View style={styles.innerBox}></View>
        </View>
        <View style={[styles.box, styles.box3]}>
          <View style={styles.innerBoxSmall}></View>
        </View>
        <View style={[styles.box, styles.box4]}>
          <View style={styles.innerBox}></View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  portraitContainer: {
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  landscapeContainer: {
    backgroundColor: 'green',
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 0,
  },
  landscapeContentContainer: {
    flex: .2,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  portraitText: {
    marginTop: 40,
  },
  landscapeText: {
    marginTop: 20,
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
  },
  box1: {
    backgroundColor: 'dodgerblue',
    width: 50,
    height: 50,
  },
  box2: {
    backgroundColor: 'dodgerblue',
  },
  box3: {
    backgroundColor: 'dodgerblue',
    width: 50,
    height: 50,
  },
  box4: {
    backgroundColor: 'dodgerblue',
  },
  innerBox: {
    backgroundColor: 'yellow',
    width: 50,
    height: 50,
    margin: 25,
  },
  innerBoxSmall: {
    backgroundColor: 'yellow',
    width: 25,
    height: 25,
    margin: 13.5,
  },
});

export default App;
