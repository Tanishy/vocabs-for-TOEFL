import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Deck from '../components/Deck';
import ScreenHeader from '../components/ScreenHeader';
import { getCards } from '../services/CardsService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function CardsScreen() {
  return (
    <>
      <ScreenHeader />
      <SafeAreaView style={styles.container}>
        <Deck cards={getCards()} />
      </SafeAreaView>
    </>
  );
}
