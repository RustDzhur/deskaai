import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import analytics from './analytics';
import {AuthProvider} from './components/auth/AuthProvider';
import * as serviceWorker from './serviceWorker';
import {ConfigProvider} from 'antd';
import {Toaster} from 'react-hot-toast';
import {ModalsProvider} from './components/common/modal-manager/modal-provider';
analytics.init();

ReactDOM.render(
  <AuthProvider>
    <ConfigProvider theme={{hashed: false}}>
      <ModalsProvider>
        <App />
        <Toaster
          toastOptions={{
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </ModalsProvider>
    </ConfigProvider>
  </AuthProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
