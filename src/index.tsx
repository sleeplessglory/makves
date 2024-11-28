import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import Sidebar from './components/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <Sidebar />
    </StrictMode>,
);