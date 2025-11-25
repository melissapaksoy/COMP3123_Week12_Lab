export function fakeLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        const fakeJwt = 'eyFake.JWT.token.string';

        const user = {
          id: 1,
          username: 'admin',
          role: 'admin',
        };

        resolve({ token: fakeJwt, user });
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 800);
  });
}

export function fakeProtectedRequest(token) {
  console.log('Calling protected endpoint with Authorization: Bearer ' + token);
}
