"use client";


import { useActionState } from "react";
import Submit from "./actions";
import Image from  "next/image";

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full border border-neutral-200 rounded-lg px-3 py-1.5 outline-1 outline-white focus-visible:ring-4 ring-violet-200 transition-shadow text-white"
  />
);

const Button = ({ children, className, ...props }) => (
  <button
    {...props} 
    className={`px-4 py-2 rounded-xl border focus-visible:ring-4 ring-violet-200 transition-all ring-offset-0 disabled:opacity-50 cursor-pointer text-[#f7f4d5] font-bold border-none ${className}`}
  >
    {children}
  </button>
);

const Field = ({ label, id, children }) => (
  <div className="flex flex-col items-start  max-w-[320px] mx-auto gap-2 w-full">
    <label htmlFor={id} className="text-white font-bold text-left "> {label}</label>
    <div className="w-full max-w-xs">
    {children}
    </div>
  </div>
);

const LoginPage = () => {
  const [state, formAction] = useActionState(Submit, {});

  return (
    <main className="relative  min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <Image
        src="/spacebg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover -z-10" 
        />
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg">
       <div className="text-center mb-4 " >
          <h1 className="text-3xl font-bold text-white">Welcome Astronaut.</h1>
        </div>
      <form 
      action={formAction} 
      className="p-10 rounded-3xl shadow-xl shadow-[#0A3323]/10 flex flex-col gap-4 w-97 max-w-lg border border-white/20 backdrop-blur-sm"
      >
        <div className="text-center mb-4 " >
          <h1 className="text-white text-xl mt-2 font-normal">Are you ready to save the stars?</h1>
        </div>
        {state.errors && (
          <div className="bg-red-50 border border-red-100 p-3 rounded-xl">
            <p className="text-red-500 text-sm text-center">
              There are errors in your submission: {state.errors}
            </p>
          </div>
        )}
        <Field id="username" label="Username">
          <Input 
          id="username" 
          type="text" 
          name="username"
          placeholder="Username" 
          required />
        </Field>
        <Field id="pwd" label="Password">
          <Input
            id="pwd"
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={8}
          />
        </Field>
          <div className="flex flex-row justify-center gap-3 pt-4">
            <Button type="reset" className="outline outline-1 outline-white ">Cancel</Button>
            <Button type="submit" className="outline outline-1 outline-white">Submit</Button>
          </div>
      </form>
       </div>
    </main>
  );
};


export default LoginPage;