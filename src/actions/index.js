import Api from '../api';

export const getMostRecentNews = () => {
  return async (dispatch) => {
    dispatch({type: 'GET_RECENT_NEWS'});
    const news = await Api.News.getMostRecent();

    if (news.error) {
      dispatch({type: 'GET_RECENT_NEWS_FAILED'});
    } else {
      dispatch({
        type: 'GET_RECENT_NEWS_SUCCESS',
        payload: news.articles,
      });
    }
  };
};
