'use client';

import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useState } from 'react';

function PasswordIcon({ hidden }: { hidden: boolean }) {
  return hidden ? (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="m3 3 18 18" />
      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
      <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c5.2 0 8.7 4.2 9.8 6a11.8 11.8 0 0 1-3.1 3.4M6.1 6.1C3.9 7.4 2.7 9.3 2.2 10c1.1 1.8 4.6 6 9.8 6 1 0 2-.2 2.9-.5" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M2.2 12s3.3-6 9.8-6 9.8 6 9.8 6-3.3 6-9.8 6-9.8-6-9.8-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setError('');
    setSubmitting(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(payload.error || 'Login belum berhasil.');
      router.replace('/');
    } catch (reason: unknown) {
      setError(
        reason instanceof Error ? reason.message : 'Login belum berhasil.'
      );
      setSubmitting(false);
    }
  }

  return (
    <main className="login-page">
      <div className="login-shell">
        <section className="login-panel" aria-labelledby="login-title">
          <div className="login-heading">
            <h1 id="login-title">Login</h1>
          </div>
          <form className="login-form" onSubmit={submit}>
            <label className="login-field">
              <span>Username</span>
              <input
                className="input input-bordered"
                type="text"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Masukkan username"
                autoComplete="username"
                autoCapitalize="none"
                spellCheck="false"
                required
              />
            </label>
            <label className="login-field">
              <span>Password</span>
              <span className="login-password-input">
                <input
                  className="input input-bordered"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Masukkan password"
                  autoComplete="current-password"
                  required
                />
                <button
                  className="login-password-toggle"
                  type="button"
                  aria-label={
                    showPassword ? 'Sembunyikan password' : 'Tampilkan password'
                  }
                  onClick={() => setShowPassword((value) => !value)}
                >
                  <PasswordIcon hidden={!showPassword} />
                </button>
              </span>
            </label>
            {error && (
              <p className="login-error" role="alert">
                {error}
              </p>
            )}
            <button
              className="btn btn-primary login-submit"
              type="submit"
              disabled={submitting}
            >
              {submitting && (
                <span className="login-spinner" aria-hidden="true" />
              )}
              {submitting ? 'Memeriksa...' : 'Masuk'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
