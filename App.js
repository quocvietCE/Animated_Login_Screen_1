import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Navigation from './src/navigation';

class App extends React.Component {
  render() {
    return <Navigation />;
  }
}

export default App;
