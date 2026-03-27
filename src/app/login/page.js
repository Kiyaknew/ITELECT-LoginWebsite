"use client";

import { useActionState } from "react";
import Submit from "./actions";

const Input = ({ ...props }) => (
  <input
    {...props}
    className="border bg-white border-neutral-200 rounded-lg px-3 py-1.5 outline-none focus-visible:ring-4 ring-violet-200 transition-shadow"
  />
);

const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={
      "hover:bg-violet-200 bg-violet-400 px-4 py-2 rounded-xl text-violet-800 border border-violet-500 focus-visible:ring-4 ring-violet-200 transition-all outline-none ring-offset-0 disabled:opacity-50 cursor-pointer " +
      (className || "")
    }
  >
    {children}
  </button>
);

const Field = ({ label, id, children }) => (
  <div className="grid grid-cols-[180px_1fr] gap-2 items-baseline">
    <label htmlFor={id}>{label}</label>
    {children}
  </div>
);

const LoginPage = () => {
  const [state, formAction] = useActionState(Submit, {});

  return (
    <main className="container mx-auto bg-neutral-50 h-screen p-4">
      <form action={formAction} className="flex flex-col gap-2">
        {state.errors && (
          <Field>
            <p className="text-red-400">
              There are errors in your submission: {state.errors}
            </p>
          </Field>
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
        <Field>
          <div className="flex gap-2">
            <Button type="reset">Cancel</Button>
            <Button type="submit">Submit</Button>
          </div>
        </Field>
      </form>
    </main>
  );
};

export default LoginPage;