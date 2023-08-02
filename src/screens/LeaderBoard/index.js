import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from './Table';
import SearchBox from './HomeSearchBox'
import Poster from '../../components/Poster';
import Container from '../../components/Container';
import { useThemeAwareObject } from '../../theme';
import Table from './Table';
import createStyles from './styles';
import TopContainer from './TopContainer';

function LeaderBoard(props) {
  const dispatch = useDispatch();

  const styles = useThemeAwareObject(createStyles);

  useEffect(() => {
 
  }, []);

  return (
    <Container style={{alignItems:'center'}}>
    <TopContainer/>
    <Table data={leaderboard}/>
    </Container>
  );
}

export default LeaderBoard;


const leaderboard = [
  {
    name: "Hasnain Raza",
    invites: "101"
  },
  {
    name: "Hasnain",
    invites: "90"
  },{
    name: "Hasnain Raza j",
    invites: "72"
  },{
    name: "Raza",
    invites: "70"
  },{
    name: "Hasnain Raza",
    invites: "70"
  },{
    name: "Hasnain Raza",
    invites: "55"
  },{
    name: "Hasnain Raza",
    invites: "40"
  },{
    name: "Hasnain Raza",
    invites: "101"
  },{
    name: "Hasnain Raza",
    invites: "101"
  },{
    name: "Hasnain Raza",
    invites: "101"
  }
];