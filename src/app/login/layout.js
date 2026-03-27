export const metadata = {
  title: "Login | ITELECT",
  description: "Page made by Erika Dirilo",

  icons: {
    icon: '/lotus.png',
  },
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
    <body>
        <>{children}</>
    </body>
    </html>
  );
}