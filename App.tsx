import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCard from './src/components/FancyCard';
import ActionCard from './src/components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard
          headingText="Trending"
          cardTitle="Ocean Cliff"
          cardImage="https://images.unsplash.com/photo-1629116625164-f9a5d2c8a4f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          cardLabel="Explore Life's Wonder"
          cardDescription="Get out and explore the unknown, live life to the fullest"
          cardFooter="20 miles away"
        />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
