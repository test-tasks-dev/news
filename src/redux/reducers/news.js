import { SET_NEWS, REMOVE, APPROVE } from '../actions/news';

const initialState = {
  news: [
    {
      title: 'Работу торговых центров по воскресеньям разрешили в Алматы',
      text: 'В ходе прямого эфира с представителями бизнеса главный санитарный врач Алматы Жандарбек Бекшин разъяснил изменения в своем последнем постановлении от 9-го ноября. В нем время работы ТРЦ и торговых центров ограничивалось до 22:00 с заполняемостью до 30%, но при этом не было указано, касается ли это выходных дней.',
      date: '10.11.2020',
      approved: true
    },
    {
      title: 'Макрон призвал реформировать Шенгенскую зону',
      text: 'Президент Франции Эммануэль Макрон заявил о необходимости реформировать Шенгенскую зону. Как сообщает РИА Новости, по его мнению, это надо сделать, чтобы она стала пространством безопасности. «Мы должны реформировать Шенген, чтобы он стал пространством безопасности», — сказал французский лидер.',
      date: '11.11.2020',
      approved: true
    },
    {
      title: 'Премьер-министр Японии: Вопрос южных Курил касается всего японского народа',
      text: 'Премьер-министр Японии высказал свое мнение относительно южных Курил. Ёсихидэ Суга уверен, что этот вопрос касается не только политиков, но и всего японского народа. В Токио считают, что спор о статусе южной части Курильских островов должны решать как правительство Японии, так и ее граждане',
      date: '09.11.2020',
      approved: true
    }
  ]
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS: {
      return {
        news: [...state.news, action.payload]
      }
    }

    case REMOVE: {
      const idx = action.payload;
      const newsClone = state.news.filter((oneNew, index) => index !== idx);
      console.log(newsClone);

      return {
        news: newsClone
      }
    }

    case APPROVE: {
      const idx = action.payload;
      state.news[idx].approved = true;

      return {
        ...state
      }
    }

    default:
      return state;
  }
};
