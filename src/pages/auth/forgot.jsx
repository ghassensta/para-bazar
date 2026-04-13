import React from 'react';
import { Link } from 'react-router-dom';

export default function Forgot() {
  return (
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
        Reset your password
      </h2>
      
      <p className="text-gray-600 text-center mb-6">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-brand-herb focus:border-brand-herb sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-herb hover:bg-brand-herb-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-herb"
          >
            Send reset link
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/auth"
            className="font-medium text-brand-herb hover:text-brand-herb-dark"
          >
            Back to sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
