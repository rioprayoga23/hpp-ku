import React from 'react';
import { createRoot } from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import './styles.css';
import App from './App.jsx';
class ErrorBoundary extends React.Component {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() { return this.state.error ? <main className="fatal"><h1>HPP-Ku belum dapat ditampilkan</h1><p>Muat ulang halaman untuk mencoba lagi. Data resep tetap tersimpan di browser.</p><button onClick={() => location.reload()}>Muat ulang</button></main> : this.props.children; }
}
createRoot(document.getElementById('root')).render(<ErrorBoundary><App /></ErrorBoundary>);
