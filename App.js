import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import RewardListView from './src/views/home/RewardListView';

const App = () => {
  return (
    <Provider store={store}>
      <RewardListView />
    </Provider>
  );
};

export default App;
