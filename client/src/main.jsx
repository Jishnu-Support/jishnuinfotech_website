import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Jishnu Infotech caught application error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-900 text-white font-sans text-center">
          <div className="max-w-md w-full p-8 rounded-3xl bg-slate-800 border border-slate-700 shadow-2xl">
            <h2 className="text-2xl font-black text-brand-orange mb-3">Jishnu Infotech</h2>
            <p className="text-sm text-slate-300 mb-4">A temporary display error occurred. Please tap below to reload the application.</p>
            {this.state.error && (
              <p className="text-[11px] font-mono text-red-400 bg-red-950/40 p-2.5 rounded-xl border border-red-500/30 mb-6 text-left break-all">
                {String(this.state.error?.message || this.state.error)}
              </p>
            )}
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 shadow-lg cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
