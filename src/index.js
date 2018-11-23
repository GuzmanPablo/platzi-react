import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import data from './api.json';
import Playlist from './playlist/components/main/index';
import './styles/reset.css';

render(<Playlist data={data} />, document.getElementById('root'));

registerServiceWorker();