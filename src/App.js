import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './router';
import store from './store';

// import AppContent from '@/components/app-content';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

export default memo(function App() {
  return (
    // 共享store
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
          {renderRoutes(routes)}
        <AppFooter />
      </HashRouter>
    </Provider>
  )
})
