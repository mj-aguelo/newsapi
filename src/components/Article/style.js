import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#D43737',
    borderBottomWidth: 1.5,
    paddingVertical: 5,
    margin: 5,
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
    paddingTop: 10,
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  articleContainer: {
    flexDirection: 'row',
  },
  author: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
    textTransform: 'uppercase',
    paddingTop: 10,
    paddingRight: 5,
  },
  date: {
    color: 'rgba(1,1,1,.4)',
    fontWeight: '300',
    paddingTop: 10,
  },
  content: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    lineHeight: 20,
    fontWeight: 'normal',
    color: 'rgba(1,1,1,.6)',
  },
});

export default style;
