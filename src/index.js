import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { pdfjs } from 'react-pdf';
import Modal from 'react-modal';

Modal.setAppElement('#root')

ReactDOM.render(<App />, document.getElementById('root'));
