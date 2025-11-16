import { useState, FormEvent } from 'react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Simple password - change this to your desired password
  const CORRECT_PASSWORD = 'dev2024';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a small delay for better UX
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        // Store login state in sessionStorage (clears when browser closes)
        sessionStorage.setItem('isAuthenticated', 'true');
        onLogin();
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="300" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.4" />
          <circle cx="150" cy="150" r="120" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
          <circle cx="650" cy="200" r="100" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img
              src="/trans_background.png"
              alt="Maira Kearns"
              className="w-full max-w-[200px] sm:max-w-[240px] h-auto"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gold-600 mb-6 font-script">
            Whispered Musings
          </h1>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border-2 border-gold-200">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 focus:border-gold-600 focus:ring-2 focus:ring-gold-200 focus:outline-none transition-colors bg-white text-sm"
              placeholder="Password"
              autoFocus
              disabled={isLoading}
            />

            {error && (
              <div className="text-red-600 text-xs bg-red-50 border-2 border-red-200 rounded-lg p-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full bg-gold-600 text-white px-4 py-2.5 rounded-full hover:bg-gold-700 transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Checking...' : 'Enter'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

