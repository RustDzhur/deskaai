import React, {Suspense} from 'react';
import {
  RouteComponentProps,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {useAuth} from './components/auth/AuthProvider';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import EmailVerification from './components/auth/EmailVerification';
import PasswordReset from './components/auth/PasswordReset';
import RequestPasswordReset from './components/auth/RequestPasswordReset';
import PasswordResetRequested from './components/auth/PasswordResetRequested';
import Demo from './components/demo/Demo';
import BotDemo from './components/demo/BotDemo';
import Dashboard from './components/Dashboard';
import Sandbox from './components/Sandbox';
import SharedConversation from './components/conversations/SharedConversation';
import 'antd/dist/reset.css';
import './App.css';
// import "./theme.less"
import './tailwind-rep.css';
import {SideBar} from './components/misc/side-bar';
// @ts-ignore
import process from 'process/browser.js';
import {TestChatPage} from './components/test-chat-page/test-chat-page';
import {KnowledgeBase} from './components/knowledge-base';
if ((process as any)?.env?.NODE_ENV === 'development') {
  // remove iframe by adding display: none to iframe
  // this is a hack
  const style = document.createElement('style');
  style.id = 'deskaai-iframe-hack';
  style.innerHTML = `
        #webpack-dev-server-client-overlay {
            display: none;
            }
    `;
  document.head.appendChild(style);
}

const App = () => {
  const auth = useAuth();

  if (auth.loading) {
    return null; // FIXME: show loading icon
  }

  if (!auth.isAuthenticated) {
    // Public routes
    return (
      <Router>
        <Switch>
          <Route path="/demo" component={Demo} />
          <Route path="/bot/demo" component={BotDemo} />
          <Route path="/login" component={Login} />
          <Route path="/register/:invite" component={Register} />
          <Route path="/register" component={Register} />
          <Route path="/verify" component={EmailVerification} />
          <Route path="/reset-password" component={RequestPasswordReset} />
          <Route path="/reset" component={PasswordReset} />
          <Route
            path="/reset-password-requested"
            component={PasswordResetRequested}
          />
          <Route path="/sandbox" component={Sandbox} />
          <Route path="/share" component={SharedConversation} />
          <Route path="/test-chat-page" component={TestChatPage} />

          <Route
            path="*"
            render={(props: RouteComponentProps<{}>) => (
              <Redirect to={`/login?redirect=${props.location.pathname}`} />
            )}
          />
        </Switch>
      </Router>
    );
  }

  // Private routes
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register/:invite" component={Register} />
        <Route path="/register" component={Register} />
        <Route path="/verify" component={EmailVerification} />
        <Route path="/reset-password" component={RequestPasswordReset} />
        <Route path="/reset" component={PasswordReset} />
        <Route
          path="/reset-password-requested"
          component={PasswordResetRequested}
        />
        <Route path="/demo" component={Demo} />
        <Route path="/bot/demo" component={BotDemo} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/share" component={SharedConversation} />
        <Route path="/test/side-bar" component={SideBar} />
        <Route path="/test-chat-page" component={TestChatPage} />
        <Route path="/" component={Dashboard} />
        {/* <Route path="*" render={() => <Redirect to="/conversations" />} /> */}
      </Switch>
    </Router>
  );
};

export default App;
