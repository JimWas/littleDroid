import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import BB8Monitor from './BB8Monitor';

createRoot(document.getElementById('root')!).render(<StrictMode><BB8Monitor /></StrictMode>);
