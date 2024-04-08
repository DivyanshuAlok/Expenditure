import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ArkBar from '../Components/ArkBar';
import MyText from '../Components/MyText';

const Dashboard = ({}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.summmaryHeading}>
        <MyText
          style={{
            fontFamily: 'Montserrat-Regular',
          }}>
          Spending Summary
        </MyText>
        <TouchableOpacity>
          <MyText style={{textDecorationLine: 'underline'}}>Edit</MyText>
        </TouchableOpacity>
      </View>
      <View style={styles.month}>
        <TouchableOpacity>
          <MyText>Prev</MyText>
        </TouchableOpacity>
        <View>
          <MyText style={{textDecorationLine: 'underline'}}>
            Spetember 2023
          </MyText>
        </View>
        <TouchableOpacity>
          <MyText>Next</MyText>
        </TouchableOpacity>
      </View>
      <ArkBar amount={898.9} limit={4567.78} />
      <View style={styles.summary}>
        <View style={styles.summaryUnit}>
          <MyText>Spending limit</MyText>
          <MyText style={{fontWeight: 'bold'}}>AED 4567.78</MyText>
        </View>
        <View style={{height: '100%', width: 1, backgroundColor: '#909090'}} />
        <View style={styles.summaryUnit}>
          <MyText>Amount spent</MyText>
          <MyText style={{fontWeight: 'bold'}}>AED 898.90</MyText>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
  },
  summmaryHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  month: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -10,
    marginTop: 10,
  },
  summaryUnit: {
    alignItems: 'center',
  },
});
