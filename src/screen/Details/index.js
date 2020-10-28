import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import style from './style';
import {useSelector} from 'react-redux';
import Moment from 'moment';

const Details = ({route, navigation}) => {
  const state = useSelector((selector) => selector);
  const article = state.news.articles[route.params.id];

  const _handleClick = () => {
    Linking.canOpenURL(article.url).then((supported) => {
      if (supported) {
        Linking.openURL(article.url);
      } else {
        console.log("URL can't be opened: " + article.url);
      }
    });
  };

  return (
    <View style={style.wrapper}>
      <View style={style.detailContainer}>
        <TouchableOpacity onPress={() => _handleClick()}>
          <Text style={style.title}>{article.title}</Text>
        </TouchableOpacity>

        <View style={style.articleContainer}>
          <Text style={style.author}>{article.author}</Text>
          <Text style={style.date}>
            {`Posted At ${Moment(article.publishedAt).format(
              'MMM DD YYYY h:mm A',
            )}`}
          </Text>
        </View>
      </View>
      <Image
        defaultSource={require('../../assets/image/default.jpg')}
        source={{uri: article.urlToImage}}
        style={style.image}
      />
      <Text style={style.content}>{article.content}</Text>
    </View>
  );
};

export default Details;
