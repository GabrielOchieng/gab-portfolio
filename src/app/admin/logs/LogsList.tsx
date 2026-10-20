"use client";

import { useEffect, useState, useCallback } from "react";
import { logout } from "../login/actions";

interface ChatLog {
  id: string;
  created_at: string;
  user_question: string;
  ai_response: string;
}

export default function LogsList() {
  const [logs, setLogs] = useState<ChatLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLogs = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/admin/logs?t=${Date.now()}`, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error("Session expired. Please sign in again.");
        }
        throw new Error(`System Error: ${res.statusText} (${res.status})`);
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setLogs(data);
      } else {
        throw new Error("Received malformed data from the server.");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while fetching logs.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  const copyToClipboard = (text: string) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    } catch (err) {
      console.error("Unable to copy", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="animate-pulse text-gray-500 font-bold tracking-widest uppercase text-[10px]">
            Syncing Logs...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 font-sans">
        <div className="bg-white border border-red-100 text-red-800 px-8 py-10 rounded-2xl shadow-xl max-w-md text-center">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            ⚠️
          </div>
          <h2 className="font-bold text-xl mb-2 text-gray-800">
            Connection Error
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">{error}</p>
          <button
            onClick={() => fetchLogs()}
            className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors cursor-pointer border-none"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:py-20 py-20 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <a
                href="/"
                className="text-primary hover:underline text-xs font-bold uppercase tracking-widest leading-none"
              >
                ← Portfolio
              </a>
              <span className="text-gray-300">/</span>
              <span className="text-gray-400 text-xs font-medium uppercase tracking-widest leading-none">
                Admin
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              Chat Logs
            </h1>
            <p className="text-gray-500 text-sm">
              <span className="text-primary font-bold">{logs.length}</span>{" "}
              conversations logged.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => fetchLogs()}
              className="px-6 py-2 bg-white border border-gray-200 text-gray-700 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Refresh
            </button>
            <form action={logout}>
              <button
                type="submit"
                className="px-6 py-2 bg-white border border-gray-200 text-gray-700 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-6">
          {logs.length === 0 ? (
            <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-medium italic">
                No chat logs yet.
              </p>
            </div>
          ) : (
            logs.map((log) => (
              <div
                key={log.id}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] font-mono font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                    {new Date(log.created_at).toLocaleString("en-KE")}
                  </span>
                  <span className="text-[9px] text-gray-300 font-mono hidden sm:block">
                    ID_{log.id.slice(0, 12).toUpperCase()}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-extrabold mb-3 flex justify-between">
                      Visitor Question
                      <button
                        onClick={() => copyToClipboard(log.user_question)}
                        className="text-gray-300 hover:text-primary transition-colors lowercase tracking-normal font-normal cursor-pointer bg-transparent border-0 text-[10px]"
                      >
                        copy
                      </button>
                    </p>
                    <div className="text-gray-700 bg-gray-50 p-5 rounded-2xl border border-gray-100 italic text-[13px] leading-relaxed relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary/20"></div>
                      &quot;{log.user_question}&quot;
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-extrabold mb-3">
                      Assistant Response
                    </p>
                    <div className="text-gray-600 leading-relaxed text-[13px] px-1 whitespace-pre-wrap">
                      {log.ai_response}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
