// "use client";

// import { useEffect, useState } from "react";

// interface ChatLog {
//   id: string;
//   created_at: string;
//   user_question: string;
//   ai_response: string;
// }

// export default function AdminLogs() {
//   const [logs, setLogs] = useState<ChatLog[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [password, setPassword] = useState("");
//   const [isAuthorized, setIsAuthorized] = useState(false);

//   // Function to fetch logs with the provided password
//   const fetchLogs = async (enteredPass: string) => {
//     if (!enteredPass) return;
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch("/api/admin/logs", {
//         method: "GET",
//         headers: {
//           "x-admin-secret": enteredPass,
//           "Cache-Control": "no-cache",
//         },
//       });

//       if (!res.ok) {
//         if (res.status === 401) {
//           throw new Error("Invalid Secret Key. Access Denied.");
//         }
//         throw new Error(`System Error: ${res.statusText}`);
//       }

//       const data = await res.json();

//       if (Array.isArray(data)) {
//         setLogs(data);
//         setIsAuthorized(true);
//         // Persist session to survive accidental refreshes
//         sessionStorage.setItem("admin_token", enteredPass);
//       } else {
//         throw new Error("Received malformed data from intelligence server.");
//       }
//     } catch (err: any) {
//       setError(err.message || "An unexpected error occurred");
//       console.error("Auth Error:", err);
//       // Only clear token if we specifically got a 401
//       if (err.message.includes("Denied")) {
//         sessionStorage.removeItem("admin_token");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Check for existing session on load
//   useEffect(() => {
//     const savedToken = sessionStorage.getItem("admin_token");
//     if (savedToken) {
//       setPassword(savedToken);
//       fetchLogs(savedToken);
//     }
//   }, []);

//   console.log(password);

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     fetchLogs(password);
//   };

//   const copyToClipboard = (text: string) => {
//     try {
//       const textArea = document.createElement("textarea");
//       textArea.value = text;
//       document.body.appendChild(textArea);
//       textArea.select();
//       document.execCommand("copy");
//       document.body.removeChild(textArea);
//     } catch (err) {
//       console.error("Unable to copy", err);
//     }
//   };

//   // --- LOGIN VIEW ---
//   if (!isAuthorized) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="w-full max-w-md">
//           <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//             <div className="bg-indigo-600 p-8 text-white text-center">
//               <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
//                 <svg
//                   width="32"
//                   height="32"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <rect
//                     x="3"
//                     y="11"
//                     width="18"
//                     height="11"
//                     rx="2"
//                     ry="2"
//                   ></rect>
//                   <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
//                 </svg>
//               </div>
//               <h1 className="text-2xl font-bold">Admin Portal</h1>
//               <p className="text-indigo-100 text-sm mt-1 opacity-80 uppercase tracking-widest font-semibold">
//                 Intelligence Access
//               </p>
//             </div>

//             <form onSubmit={handleLogin} className="p-8 space-y-6">
//               <div>
//                 <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-widest">
//                   Enter Secret Key
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••••••"
//                   className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-center font-mono tracking-widest"
//                   required
//                 />
//               </div>

//               {error && (
//                 <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl text-xs font-medium text-center animate-shake">
//                   {error}
//                   <div className="mt-2 pt-2 border-t border-red-200 opacity-60 text-[10px] uppercase tracking-tighter">
//                     Tip: Ensure both ADMIN_SECRET_KEY and NEXT_PUBLIC_... are in
//                     .env
//                   </div>
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50 cursor-pointer"
//               >
//                 {loading ? "Verifying..." : "Access Dashboard"}
//               </button>

//               <div className="text-center">
//                 <a
//                   href="/"
//                   className="text-xs text-gray-400 hover:text-indigo-600 transition-colors"
//                 >
//                   Return to Public Site
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --- DASHBOARD VIEW (Authorized) ---
//   return (
//     <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
//           <div>
//             <div className="flex items-center gap-2 mb-1">
//               <a
//                 href="/"
//                 className="text-indigo-600 hover:underline text-sm font-bold"
//               >
//                 ← Home
//               </a>
//               <span className="text-gray-300">/</span>
//               <span className="text-gray-400 text-sm font-medium">
//                 Intelligence Dashboard
//               </span>
//             </div>
//             <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
//               Visitor Interaction Logs
//             </h1>
//             <p className="text-gray-500 text-sm">
//               Analyzing{" "}
//               <span className="text-indigo-600 font-bold">{logs.length}</span>{" "}
//               unique AI conversations.
//             </p>
//           </div>
//           <div className="flex gap-3">
//             <button
//               onClick={() => {
//                 sessionStorage.removeItem("admin_token");
//                 setIsAuthorized(false);
//                 setPassword("");
//               }}
//               className="px-6 py-2 bg-gray-200 text-gray-700 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-300 transition-all cursor-pointer"
//             >
//               Logout
//             </button>
//             <button
//               onClick={() => fetchLogs(password)}
//               className="px-6 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
//             >
//               Refresh Logs
//             </button>
//           </div>
//         </div>

//         <div className="grid gap-6">
//           {logs.length === 0 ? (
//             <div className="text-center py-32 bg-white rounded-2xl border border-dashed border-gray-300">
//               <p className="text-gray-400 font-medium italic">
//                 No intelligence captured in the database yet.
//               </p>
//             </div>
//           ) : (
//             logs.map((log) => (
//               <div
//                 key={log.id}
//                 className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-600/20 transition-all group"
//               >
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="flex gap-2">
//                     <span className="text-[10px] font-bold text-white bg-indigo-600 px-3 py-1 rounded-full uppercase tracking-tighter">
//                       Verified Session
//                     </span>
//                     <span className="text-[10px] font-mono font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
//                       {new Date(log.created_at).toLocaleString("en-KE")}
//                     </span>
//                   </div>
//                   <span className="text-[10px] text-gray-300 font-mono hidden sm:block">
//                     HEX_{log.id.slice(0, 8).toUpperCase()}
//                   </span>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div className="relative">
//                     <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-600 font-extrabold mb-3 flex justify-between">
//                       User Prompt
//                       <button
//                         onClick={() => copyToClipboard(log.user_question)}
//                         className="text-gray-300 hover:text-indigo-600 transition-colors lowercase tracking-normal font-normal cursor-pointer bg-transparent border-0"
//                       >
//                         copy
//                       </button>
//                     </p>
//                     <div className="text-gray-700 bg-gray-50 p-5 rounded-2xl border border-gray-100 italic text-[13px] leading-relaxed relative overflow-hidden">
//                       <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600/20"></div>
//                       "{log.user_question}"
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-extrabold mb-3">
//                       AI System Response
//                     </p>
//                     <div className="text-gray-600 leading-relaxed text-[13px] px-1 whitespace-pre-wrap">
//                       {log.ai_response}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       <style>{`
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           25% { transform: translateX(-5px); }
//           75% { transform: translateX(5px); }
//         }
//         .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
//       `}</style>
//     </div>
//   );
// }

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
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
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
