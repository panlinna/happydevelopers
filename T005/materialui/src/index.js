import React from 'react';
import { render } from 'react-dom';
import App from './App';

//material-ui 点击效果必备插件，只需写在组件的顶部
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<App />, document.getElementById('root'));
