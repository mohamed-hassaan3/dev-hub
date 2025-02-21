import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-32 md:h-32 h-16 w-16 aspect-square rounded-full">
      <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
    </div>
  );
};

export default loading;
