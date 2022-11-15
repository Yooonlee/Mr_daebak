import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

// 리덕스에서 필요한 미들웨어
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

// reducer 불러오기
import Reducer from './_reducers';

// 미들웨어를 적용한 redux store를 만드는 과정
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(Reducer,
        /* 크롬 브라우저에서 디버깅 도구를 이용할 수 있도록 하는 도구 */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      )}>
        <App />
    </Provider>
  </React.StrictMode>
);


// ReactDOM.render(
//   <React.StrictMode>
//     {/* Provider를 이용해 리덕스 적용 */}
    
//   </React.StrictMode>,
//   document.getElementById('root'),
// );





