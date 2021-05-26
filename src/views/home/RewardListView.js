import React, {useEffect, useCallback} from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import {getRewards} from '../../redux/actions/rewards';
import {FlatList} from 'react-native';
import {AvailableRewardItem, CollectedRewardItem} from './components/RewardListItem';

const Title = styled.Text`
  font-size: 40px;
`;
const Card = styled.View`
  flex: 1;
`;
const Container = styled.SafeAreaView`
  flex: 1;
  margin: 10px 10px;
`;

const RewardListView = ({rewards, getRewards}) => {
  useEffect(() => {
    getRewards();
  }, []);

  const renderAvailable = useCallback(
    ({item}) => <AvailableRewardItem reward={item} />,
    [],
  );
  const renderCollected = useCallback(
    ({item}) => <CollectedRewardItem reward={item} />,
    [],
  );
  const keyExtractor = useCallback(item => item.id, []);

  return (
    <Container>
      <Card>
        <Title>Available</Title>
        <FlatList
          data={rewards.available}
          renderItem={renderAvailable}
          keyExtractor={keyExtractor}
          accessibilityLabel="available_rewards"
        />
      </Card>
      <Card>
        <Title>Collected</Title>
        <FlatList
          data={rewards.collected}
          renderItem={renderCollected}
          keyExtractor={keyExtractor}
          accessibilityLabel="collected_rewards"
        />
      </Card>
    </Container>
  );
};

const mapStateToProps = state => {
  const {rewards} = state;
  return {rewards};
};

export default connect(mapStateToProps, {getRewards})(RewardListView);
