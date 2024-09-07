'use client';

import React, { useState } from 'react';
import SigninForm from '@/Components/SigninForm';
import SignupForm from '@/Components/SignupForm';

export default function Home() {
  const [showSignin, setShowSignin] = useState(false);

  const toggleForm = () => {
    setShowSignin(prev => !prev);
  };

  return (
    <main className="h-screen overflow-hidden">
      <div 
        className={`transition-transform duration-1000 ease-in-out transform ${showSignin ? '-translate-y-1/2' : 'translate-y-0'}`}
        style={{ height: '200%' }}
      >
        <div className="h-1/2">
          <SignupForm onSignInClick={toggleForm} />
        </div>
        <div className="h-1/2">
          <SigninForm onSignUpClick={toggleForm} />
        </div>
      </div>
    </main>
  );
}