"use client";

import { useActionState } from "react";
import Submit from "./actions";

const Input = ({ ...props }) => (
  <input
    {...props}
    className="border bg-white border-neutral-200 rounded-lg px-3 py-1.5 outline-none focus-visible:ring-4 ring-violet-200 transition-shadow text-black"
  />
);

const Button = ({ children, className, ...props }) => (
  <button
    {...props} 
    className={`px-4 py-2 rounded-xl border focus-visible:ring-4 ring-violet-200 transition-all outline-none ring-offset-0 disabled:opacity-50 cursor-pointer text-[#D3968C] border-none ${className}`}
  >
    {children}
  </button>
);

const Field = ({ label, id, children }) => (
  <div className="grid grid-cols-[180px_1fr] gap-2 items-baseline">
    <label htmlFor={id} className="text-[#105666] font-semibold">{label}</label>
    {children}
  </div>
);

const LoginPage = () => {
  const [state, formAction] = useActionState(Submit, {});

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-4">
      <form 
      action={formAction} 
      className="p-10 rounded-3xl shadow-xl shadow-[#0A3323]/10 flex flex-col gap-6 w-full max-w-lg border-black"
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-[#105666]">Login</h1>
          <p className="text-neutral-500 text-sm mt-2">Welcome! Please enter your credentials</p>
        </div>
        {state.errors && (
          <div className="bg-red-50 border border-red-100 p-3 rounded-xl">
            <p className="text-red-500 text-sm text-center">
              There are errors in your submission: {state.errors}
            </p>
          </div>
        )}
        <Field id="em" label="Email">
          <Input id="em" type="email" name="email" required />
        </Field>
        <Field id="pwd" label="Password">
          <Input
            id="pwd"
            type="password"
            name="password"
            required
            minLength={8}
          />
        </Field>
          <div className="flex flex-row justify-center gap-3 pt-4">
            <Button type="reset" className="bg-[#105666]">Cancel</Button>
            <Button type="submit" className="bg-[#105666]">Submit</Button>
          </div>
      </form>
    </main>
  );
};

export default LoginPage;