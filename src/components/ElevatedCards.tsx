import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white'}}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white'}}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white'}}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white'}}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white'}}>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😀</Text>
        </View>
      </ScrollView>
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
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: 'grey',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowRadius: 2,
  },
});
