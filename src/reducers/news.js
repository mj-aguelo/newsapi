const initialState = {
  isLoading: false,
  error: false,
  success: false,
  articles: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RECENT_NEWS':
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case 'GET_RECENT_NEWS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: false,
        articles: action.payload,
      };

    case 'GET_RECENT_NEWS_FAILED':
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};
