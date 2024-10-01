import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type FancyCardProps = {
  headingText?: string;
  cardTitle?: string;
  cardImage?: string;
  cardLabel?: string;
  cardDescription?: string;
  cardFooter?: string;
};

export default function FancyCard({
  headingText,
  cardTitle,
  cardImage,
  cardLabel,
  cardDescription,
  cardFooter,
}: FancyCardProps) {
  return (
    <View>
      <Text style={styles.headingText}>{headingText}</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{uri: cardImage}} style={styles.cardImage} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{cardTitle}</Text>
          <Text style={styles.cardLabel}>{cardLabel}</Text>
          <Text style={styles.cardDescription}>{cardDescription}</Text>
          <Text style={styles.cardFooter}>{cardFooter}</Text>
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
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    borderTopRightRadius: 70,
  },
  cardElevated: {
    backgroundColor: 'grey',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    width: '100%',
    height: 180,
    marginBottom: 8,
    borderTopRightRadius: 70,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardLabel: {
    color: '#FFFFFF',
    marginVertical: 6,
  },
  cardDescription: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  cardFooter: {
    color: '#FFFFFF',
    marginTop: 10,
  },
});
