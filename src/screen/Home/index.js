/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import style from './style';
import {getMostRecentNews} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import Article from '../../components/Article';

const Home = ({navigation}) => {
  const state = useSelector((selector) => selector);
  const dispatch = useDispatch();

  const _refresh = () => {
    dispatch(getMostRecentNews());
  };

  useEffect(() => {
    console.log(state);
    dispatch(getMostRecentNews());
  }, []);
  return (
    <SafeAreaView style={style.wrapper}>
      <FlatList
        initialNumToRender={5}
        style={style.flatlist}
        data={state.news.articles}
        refreshing={state.news.isLoading}
        onRefresh={() => _refresh()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({item, index}) => {
          return (
            <Article
              index={index}
              key={index}
              {...item}
              navigation={navigation}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
