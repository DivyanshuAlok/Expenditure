import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ArkBar from '../Components/ArkBar';
import MyText from '../Components/MyText';
import Category from '../Components/Category';

const Dashboard = ({}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.summmaryHeading}>
        <MyText
          style={{
            fontSize: 16,
          }}>
          Spending Summary
        </MyText>
        <TouchableOpacity>
          <MyText
            style={{
              textDecorationLine: 'underline',
              fontSize: 16,
            }}>
            Edit
          </MyText>
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
      <View style={styles.categoryRow}>
        <View style={styles.category}>
          <Category
            type={'clothing'}
            limit={2000}
            amount={500}
            color={'#DABB4F'}
          />
          <MyText>Clothing</MyText>
        </View>
        <View style={styles.category}>
          <Category
            type={'beauty'}
            limit={2000}
            amount={500}
            color={'#5281AC'}
          />
          <MyText>Beauty</MyText>
        </View>
        <View style={styles.category}>
          <Category type={'hnf'} limit={2000} amount={500} color={'#EE9E38'} />
          <MyText>Health & Fitness</MyText>
        </View>
      </View>
      <View style={styles.categoryRow}>
        <View style={styles.category}>
          <Category type={'food'} limit={2000} amount={500} color={'#76A6D3'} />
          <MyText>Food</MyText>
        </View>
        <View style={styles.category}>
          <Category
            type={'house'}
            limit={2000}
            amount={500}
            color={'#DFA1A7'}
          />
          <MyText>Housing</MyText>
        </View>
        <View style={styles.category}>
          <Category
            type={'beauty2'}
            limit={2000}
            amount={500}
            color={'#5ACCD1'}
          />
          <MyText>Beauty</MyText>
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
    marginBottom: 20,
  },
  summaryUnit: {
    alignItems: 'center',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
  },
});
