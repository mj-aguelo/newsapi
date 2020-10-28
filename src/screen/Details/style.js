import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    height: '100%',
  },
  image: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
  },
  detailContainer: {
    width: '100%',
    padding: 5,
  },
  title: {
    paddingVertical: 15,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
  },
  articleContainer: {
    flexDirection: 'column',
    padding: 10,
  },
  author: {
    color: '#D43737',
    fontWeight: '500',
    fontSize: 14,
    textTransform: 'uppercase',
    paddingTop: 10,
  },
  date: {
    color: 'rgba(1,1,1,.4)',
    fontWeight: '300',
    paddingTop: 3,
    paddingBottom: 5,
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    lineHeight: 25,
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000',
  },
});

export default style;
