"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans p-4">
      <form
        action={formAction}
        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full max-w-sm"
      >
        <h1 className="text-xl font-bold text-gray-800 mb-1">Admin Access</h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter the admin password to view logs.
        </p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          autoFocus
          className="w-full border-2 border-gray-200 rounded-xl p-3 mb-4 outline-none focus:border-primary transition-colors"
        />
        {state?.error && (
          <p className="text-sm text-red-600 mb-4">{state.error}</p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors cursor-pointer border-none disabled:opacity-50"
        >
          {pending ? "Checking..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
