import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{color: 'white'}}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={{color: 'white'}}>Black</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={{color: 'white'}}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{color: 'white'}}>Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',

    paddingHorizontal: 20,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {backgroundColor: '#ef5354'},
  cardTwo: {backgroundColor: 'blue'},
  cardThree: {backgroundColor: '#ef5354'},
});
