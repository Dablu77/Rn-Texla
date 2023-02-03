import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import store from '../redux/store';
import {decrement, increment} from '../redux/actions';

export default function MySpace({dispatch, subscribe, getState}) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      let value = getState().num;
      setNumber(value);
      console.log('store value', value);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const onADD = () => {
    dispatch(increment(number));
  };
  const onDEC = () => {
    dispatch(decrement(number));
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#defff7',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button title="INCREMENT" onPress={onADD} />
      <Text style={{color: 'red', fontSize: 30}}>{number}</Text>
      <Button title="Decrement" onPress={onDEC} />
    </SafeAreaView>
  );
}
