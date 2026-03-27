"use client";

import { useRouter } from "next/navigation";

const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`px-8 py-3 rounded-full border border-cyan-400/50 bg-cyan-500/10 hover:bg-cyan-500/20 text-white font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95 cursor-pointer ${className}`}
  >
    {children}
  </button>
);

const HomePage = () => {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center shadow-inner"
        style={{ 
          backgroundImage: `url('https://64.media.tumblr.com/529b9e526323f22903981c2c9cc54381/97a4829a475c6846-27/s540x810/12e4bf8292f2ef2c1841f06378799a408b318065.gif')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Foreground card */}
      <div className="relative z-10 flex flex-col items-center text-center p-12 rounded-3xl backdrop-blur-md bg-black/30 border border-white/10 shadow-2xl max-w-md mx-4">
        
          
        <h1 className="text-3xl font-black text-white tracking-tighter uppercase mb-2">
          Welcome to
        </h1>

        <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic mb-2">
          <span className="text-yellow-400">Project Hail Mary</span>
        </h1>
        
        <p className="text-slate-300 text-lg font-light mb-8 leading-relaxed">
          Help Grace and Rocky save the stars.
        </p>

        <Button onClick={() => alert("Amaze! Amaze! Amaze! Stars have been saved!")}>
          Save the Stars
        </Button>

        <Button 
          className="mt-4 border-white/20 bg-white/5 hover:bg-white/10 text-xs"
          onClick={() => router.push("/about")} 
        >
          About the Mission
        </Button>
        <Button 
          className="mt-4 border-white/20 bg-white/5 hover:bg-white/10 text-xs"
          onClick={() => router.push("/login")} 
        >
          Logout
        </Button>

      </div>
    </main>
  );
};

export default HomePage;