import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import Moment from 'moment';

const Article = (props) => {
  const _handleClick = () => {
    props.navigation.navigate('Details', {id: props.index});
  };

  return (
    <TouchableOpacity style={style.wrapper} onPress={() => _handleClick()}>
      <Image
        defaultSource={require('../../assets/image/default.jpg')}
        source={{uri: props.urlToImage}}
        style={style.image}
      />
      <View style={style.detailContainer}>
        <Text style={style.title}>{props.title}</Text>
        <View style={style.articleContainer}>
          <Text style={style.author} numberOfLines={1}>
            {props.author}
          </Text>
          <Text style={style.date}>{Moment(props.publishedAt).calendar()}</Text>
        </View>
      </View>
      <Text style={style.content} numberOfLines={2}>
        {props.content}
      </Text>
    </TouchableOpacity>
  );
};

export default Article;
