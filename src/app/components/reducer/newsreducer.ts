import { createSlice }  from '@reduxjs/toolkit';
import { newslist }     from '../Lists/newslist';
import { v4 as uuidv4 } from 'uuid';
import { RootState }    from '../../store';

const newsSlicer = createSlice({
  name         : 'news',
  initialState : newslist,
  reducers: {
    editNews(state, action) {
      return [...state.map(news => {
        if (news.id === action.payload.id) {
          return action.payload;
        }
        return news;
      })];
  },
  addNews(state, action) {
    return [{...action.payload, id: uuidv4()
    }, ...state];
},
  deleteNews(state, action) {
    return [...state.filter(news => news.id !== action.payload)]
  }
}
});

export const { editNews, addNews, deleteNews } = newsSlicer.actions;

export const newsReducer = newsSlicer.reducer;

export const getNews = (state: RootState) => state.news;

