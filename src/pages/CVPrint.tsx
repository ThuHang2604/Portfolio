import { useEffect } from "react";

function CVPrint() {
  useEffect(() => {
    window.location.replace("/HangDTT_SoftwareEngineer_CV.pdf");
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <p className="text-lg animate-pulse">Redirecting to CV PDF...</p>
        <a 
          href="/HangDTT_SoftwareEngineer_CV.pdf" 
          className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 underline"
        >
          Click here if you are not redirected automatically
        </a>
      </div>
    </div>
  );
}

export default CVPrint;
