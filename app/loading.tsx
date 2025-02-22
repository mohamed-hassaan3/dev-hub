import React from "react";

const loading = () => {
  return (
    <div className="md:p-2 p-1 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-16 md:h-16 h-12 w-12 aspect-square rounded-full absolute left-1/2 top-1/2">
      <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
    </div>
  );
};

export default loading;
