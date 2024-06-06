import React from 'react';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../src/amplifyconfiguration.json';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: '3ed5na1eho8ke14ca4bv719v0f',
      userPoolId: 'us-east-1_mZdSgPw2D',
      // loginWith: { // Optional
      //   oauth: {
      //     domain: 'abcdefghij1234567890-29051e27.auth.us-east-1.amazoncognito.com',
      //     scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
      //     redirectSignIn: ['http://localhost:3000/','https://example.com/'],
      //     redirectSignOut: ['http://localhost:3000/','https://example.com/'],
      //     responseType: 'code',
      //   }
        // username: true,
        // email: 'false', // Optional
        // phone: 'false', // Optional
      }
    }
  });

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {JSON.stringify(user)}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}