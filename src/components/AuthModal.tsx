import React, { useState } from 'react';
import { X, LogIn, UserPlus, KeyRound, AlertCircle, CheckCircle2, User, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext.tsx';

export const AuthModal: React.FC = () => {
  const {
    user,
    isAuthModalOpen,
    authModalMode,
    openAuthModal,
    closeAuthModal,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    sendPasswordReset,
    logOut,
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isAuthModalOpen) return null;

  const resetFields = () => {
    setEmail('');
    setPassword('');
    setDisplayName('');
    setConfirmPassword('');
    setError(null);
    setSuccessMsg(null);
  };

  const handleClose = () => {
    resetFields();
    closeAuthModal();
  };

  const parseFirebaseError = (err: any): string => {
    const code = err?.code || '';
    if (code === 'auth/wrong-password' || code === 'auth/invalid-credential' || code === 'auth/user-not-found') {
      return 'Incorrect email or password. Please verify and try again.';
    }
    if (code === 'auth/email-already-in-use') {
      return 'An account with this email address already exists.';
    }
    if (code === 'auth/weak-password') {
      return 'Password should be at least 6 characters long.';
    }
    if (code === 'auth/invalid-email') {
      return 'Please enter a valid email address.';
    }
    if (code === 'auth/popup-closed-by-user') {
      return 'Google sign-in popup was closed before completing.';
    }
    if (code === 'auth/popup-blocked') {
      return 'Sign-in popup was blocked by browser. Please allow popups for this site.';
    }
    return err?.message || 'Authentication failed. Please try again.';
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      await signInWithGoogle();
      handleClose();
    } catch (err: any) {
      setError(parseFirebaseError(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (authModalMode === 'reset') {
      if (!email.trim()) {
        setError('Please enter your registered email address.');
        return;
      }
      setIsSubmitting(true);
      try {
        await sendPasswordReset(email.trim());
        setSuccessMsg('Password reset link sent! Check your email inbox.');
      } catch (err: any) {
        setError(parseFirebaseError(err));
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    if (authModalMode === 'signup') {
      if (!email.trim() || !password) {
        setError('Please fill in all required fields.');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      setIsSubmitting(true);
      try {
        await signUpWithEmail(email.trim(), password, displayName.trim() || undefined);
        handleClose();
      } catch (err: any) {
        setError(parseFirebaseError(err));
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // Default: 'signin'
    if (!email.trim() || !password) {
      setError('Please provide your email and password.');
      return;
    }

    setIsSubmitting(true);
    try {
      await signInWithEmail(email.trim(), password);
      handleClose();
    } catch (err: any) {
      setError(parseFirebaseError(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close authentication modal"
        >
          <X className="w-5 h-5" />
        </button>

        {user ? (
          /* User Profile View when already signed in */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4 border-2 border-amber-300">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'User'}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-8 h-8 text-amber-700" />
              )}
            </div>

            <h3 id="auth-modal-title" className="font-serif text-2xl font-bold text-stone-900 mb-1">
              {user.displayName || 'WBYEF Member'}
            </h3>
            <p className="text-xs text-stone-500 mb-4">{user.email}</p>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 text-left mb-6 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-stone-500">Account status:</span>
                <span className="font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Authenticated
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Provider:</span>
                <span className="font-medium text-stone-800 capitalize">
                  {user.providerData[0]?.providerId.replace('.com', '') || 'Firebase Auth'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">WBYEF ID:</span>
                <span className="font-mono text-stone-600 text-[11px] truncate max-w-[180px]">
                  {user.uid}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 py-2.5 rounded-lg border border-stone-300 hover:bg-stone-100 text-stone-700 font-medium text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={async () => {
                  await logOut();
                  handleClose();
                }}
                className="flex-1 py-2.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-medium text-xs transition-colors cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          /* Sign In / Sign Up / Reset Password Forms */
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>West Bengal Youth Empowerment Foundation</span>
            </div>

            <h3 id="auth-modal-title" className="font-serif text-2xl font-bold text-stone-900 mb-2">
              {authModalMode === 'signin' && 'Welcome Back'}
              {authModalMode === 'signup' && 'Create an Account'}
              {authModalMode === 'reset' && 'Reset Your Password'}
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              {authModalMode === 'signin' && 'Sign in to access your youth career resources, volunteer dashboard & applications.'}
              {authModalMode === 'signup' && 'Join WBYEF as a student, mentor, volunteer, or partner across West Bengal.'}
              {authModalMode === 'reset' && 'Enter your email address and we will send you a password reset link.'}
            </p>

            {/* Mode Switcher Tabs */}
            {authModalMode !== 'reset' && (
              <div className="flex border-b border-stone-200 mb-6">
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setSuccessMsg(null);
                    openAuthModal('signin');
                  }}
                  className={`flex-1 pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer text-center ${
                    authModalMode === 'signin'
                      ? 'border-amber-600 text-amber-700'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <LogIn className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setSuccessMsg(null);
                    openAuthModal('signup');
                  }}
                  className={`flex-1 pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer text-center ${
                    authModalMode === 'signup'
                      ? 'border-amber-600 text-amber-700'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <UserPlus className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                  Sign Up
                </button>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <span className="leading-snug">{error}</span>
              </div>
            )}

            {/* Success Message */}
            {successMsg && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                <span className="leading-snug">{successMsg}</span>
              </div>
            )}

            {/* Google Quick Sign-In Button */}
            {authModalMode !== 'reset' && (
              <div className="mb-5">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-medium transition-colors shadow-xs cursor-pointer disabled:opacity-60"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-stone-200" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-3 text-stone-500 font-medium">Or continue with email</span>
                  </div>
                </div>
              </div>
            )}

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {authModalMode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Full Name <span className="text-stone-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="e.g. Sourav Mukherjee"
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-stone-800"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Email Address <span className="text-amber-700">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-stone-800"
                />
              </div>

              {authModalMode !== 'reset' && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-stone-700">
                      Password <span className="text-amber-700">*</span>
                    </label>
                    {authModalMode === 'signin' && (
                      <button
                        type="button"
                        onClick={() => {
                          setError(null);
                          setSuccessMsg(null);
                          openAuthModal('reset');
                        }}
                        className="text-[11px] text-amber-700 hover:text-amber-800 font-medium transition-colors cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-stone-800"
                  />
                </div>
              )}

              {authModalMode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Confirm Password <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm text-stone-800"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    {authModalMode === 'signin' && (
                      <>
                        <LogIn className="w-4 h-4" />
                        <span>Sign In</span>
                      </>
                    )}
                    {authModalMode === 'signup' && (
                      <>
                        <UserPlus className="w-4 h-4" />
                        <span>Create Account</span>
                      </>
                    )}
                    {authModalMode === 'reset' && (
                      <>
                        <KeyRound className="w-4 h-4" />
                        <span>Send Reset Link</span>
                      </>
                    )}
                  </>
                )}
              </button>
            </form>

            {/* Back to sign in link for reset password mode */}
            {authModalMode === 'reset' && (
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setSuccessMsg(null);
                    openAuthModal('signin');
                  }}
                  className="text-xs text-amber-700 hover:text-amber-800 font-semibold cursor-pointer"
                >
                  ← Back to Sign In
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
