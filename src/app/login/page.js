"use client";

import { useActionState } from "react";
import Submit from "./actions";

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full border border-neutral-200 rounded-lg px-3 py-1.5 outline-2 outline-[#839958] focus-visible:ring-4 ring-violet-200 transition-shadow text-black"
  />
);

const Button = ({ children, className, ...props }) => (
  <button
    {...props} 
    className={`px-4 py-2 rounded-xl border focus-visible:ring-4 ring-violet-200 transition-all outline-none ring-offset-0 disabled:opacity-50 cursor-pointer text-[#f7f4d5] font-bold border-none ${className}`}
  >
    {children}
  </button>
);

const Field = ({ label, id, children }) => (
  <div className="flex flex-col items-start  max-w-[320px] mx-auto gap-2 w-full">
    <label htmlFor={id} className="text-[#0A3323] font-bold text-left "> {label}</label>
    <div className="w-full max-w-xs">
    {children}
    </div>
  </div>
);

const LoginPage = () => {
  const [state, formAction] = useActionState(Submit, {});

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fefced] p-4">
      <div className="flex flex-col items-center w-full max-w-lg">
        <img src="/lotus.png" alt="hiiii" className="w-50 h-auto mb-8 drop-shadow-md"/>
      <form 
      action={formAction} 
      className="p-10 rounded-3xl shadow-xl shadow-[#0A3323]/10 flex flex-col gap-4 w-97 max-w-lg border-black bg-[#efebce]"
      >
        <div className="text-center mb-4 " >
          <h1 className="text-3xl font-bold text-[#105666]">Login</h1>
          <p className="text-[#839958] text-sm mt-2 font-normal">Welcome! Please enter your credentials</p>
        </div>
        {state.errors && (
          <div className="bg-red-50 border border-red-100 p-3 rounded-xl">
            <p className="text-red-500 text-sm text-center">
              There are errors in your submission: {state.errors}
            </p>
          </div>
        )}
        <Field id="em" label="Email">
          <Input 
          id="em" 
          type="email" 
          name="email"
          placeholder="yourname@gmail.com" 
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
            <Button type="reset" className="bg-[#105666]">Cancel</Button>
            <Button type="submit" className="bg-[#105666]">Submit</Button>
          </div>
      </form>
       </div>
    </main>
  );
};

export default LoginPage;