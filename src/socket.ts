export const SOCKET_URL = (() => {
  if (process.env.REACT_APP_SOCKET_URL) {
    return process.env.REACT_APP_SOCKET_URL;
  } else {
    return window.location.hostname === 'localhost'
      ? 'ws://127.0.0.1:4000/socket'
      : '/socket';
  }
})();

console.debug('SOCKET_URL', SOCKET_URL);
