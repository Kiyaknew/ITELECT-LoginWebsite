export const metadata = {
  title: "Login | ITELECT",
  description: "Page made by Erika",
  icons: {
    icon: '/astro.png',
  },
};

export default function LoginLayout({ children }) {
  return (
    <div className="login-container min-h-screen">
       {children}
    </div>
  );
}