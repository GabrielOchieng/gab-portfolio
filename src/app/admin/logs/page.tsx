"use client";

import { useEffect, useState, useCallback } from "react";

interface ChatLog {
  id: string;
  created_at: string;
  user_question: string;
  ai_response: string;
}

export default function App() {
  const [logs, setLogs] = useState<ChatLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch logs automatically using the environment variable secret
  const fetchLogs = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Pulling the secret from the environment variable directly for automatic authentication
      const secret =
        process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY ||
        "GABRIELPROFILEAdminPassMartial$09";

      const res = await fetch(`/api/admin/logs?t=${Date.now()}`, {
        method: "GET",
        headers: {
          "x-admin-secret": secret.trim(),
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error(
            "Unauthorized: The Secret Key (ADMIN_SECRET_KEY) provided in the headers is invalid.",
          );
        }
        throw new Error(`System Error: ${res.statusText} (${res.status})`);
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setLogs(data);
      } else {
        throw new Error("Received malformed data from intelligence server.");
      }
    } catch (err: any) {
      setError(
        err.message || "An unexpected error occurred while fetching logs.",
      );
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch logs automatically on page load
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
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="animate-pulse text-gray-500 font-bold tracking-widest uppercase text-[10px]">
            Syncing Intelligence...
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
          <div className="text-left bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">
              Troubleshooting:
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Verify your <strong>.env.local</strong> has the correct secret and
              that you have <strong>restarted</strong> your local dev server.
            </p>
          </div>
          <button
            onClick={() => fetchLogs()}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors cursor-pointer border-none"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:py-20 py-20 bg-gray-50  min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <a
                href="/"
                className="text-indigo-600 hover:underline text-xs font-bold uppercase tracking-widest leading-none"
              >
                ← Portfolio
              </a>
              <span className="text-gray-300">/</span>
              <span className="text-gray-400 text-xs font-medium uppercase tracking-widest leading-none">
                Admin Control
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              Visitor Intelligence Logs
            </h1>
            <p className="text-gray-500 text-sm">
              Analyzing{" "}
              <span className="text-indigo-600 font-bold">{logs.length}</span>{" "}
              unique AI conversations.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => fetchLogs()}
              className="px-6 py-2 bg-white border border-gray-200 text-gray-700 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Refresh Logs
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {logs.length === 0 ? (
            <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-medium italic">
                No intelligence captured in the database yet.
              </p>
            </div>
          ) : (
            logs.map((log) => (
              <div
                key={log.id}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-indigo-600/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-2">
                    <span className="text-[9px] font-bold text-white bg-indigo-600 px-3 py-1 rounded-full uppercase tracking-widest">
                      Verified Session
                    </span>
                    <span className="text-[9px] font-mono font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                      {new Date(log.created_at).toLocaleString("en-KE")}
                    </span>
                  </div>
                  <span className="text-[9px] text-gray-300 font-mono hidden sm:block">
                    HEX_{log.id.slice(0, 12).toUpperCase()}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-600 font-extrabold mb-3 flex justify-between">
                      Visitor Prompt
                      <button
                        onClick={() => copyToClipboard(log.user_question)}
                        className="text-gray-300 hover:text-indigo-600 transition-colors lowercase tracking-normal font-normal cursor-pointer bg-transparent border-0 text-[10px]"
                      >
                        copy
                      </button>
                    </p>
                    <div className="text-gray-700 bg-gray-50 p-5 rounded-2xl border border-gray-100 italic text-[13px] leading-relaxed relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600/20"></div>
                      "{log.user_question}"
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-extrabold mb-3">
                      Assistant Logic
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
