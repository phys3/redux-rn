import React from 'react';
import styled from 'styled-components/native';
import {collectReward} from '../../../redux/actions/rewards';
import {connect} from 'react-redux';

const Name = styled.Text`
  font-size: 20px;
  padding-right: 8px;
  width: 70%;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 18px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #2196f3;
`;

const Column = styled.View`
  width: 80%
  justify-content: space-between;
`;

const CollectButton = styled.Button``;

const PointsNeeded = styled.Text`
  font-size: 16px;
  padding: 8px 0px;
  color: #2196f3;
`;

class RewardItem extends React.PureComponent {
  render() {
    const {reward, collectReward} = this.props;
    return (
      <Container accessibilityLabel={`reward-${reward.id}`}>
        <Column>
          <Name>{reward.name}</Name>
          <PointsNeeded>{`Points Needed: ${reward.needed_points}`}</PointsNeeded>
        </Column>
        <CollectButton
            accessibilityLabel={`collect-button-${reward.id}`}
            title="Collect"
            onPress={() => collectReward(reward)}
          />
      </Container>
    );
  }
}

export class CollectedRewardItem extends React.PureComponent {
  render() {
    const {reward} = this.props;
    return (
      <Container accessibilityLabel={`collected-reward-${reward.id}`}>
        <Name>{reward.name}</Name>
      </Container>
    );
  }
}

export const WrappedRewardItem = connect(null, {collectReward})(RewardItem);

