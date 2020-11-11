export const SET_NEWS = 'SET_NEWS';
export const REMOVE = 'REMOVE';
export const APPROVE = 'APPROVE';

export const setNews = (news) => ({
  type: SET_NEWS,
  payload: news
});

export const remove = (idx) => ({
  type: REMOVE,
  payload: idx
});

export const approve = (idx) => ({
  type: APPROVE,
  payload: idx
});
