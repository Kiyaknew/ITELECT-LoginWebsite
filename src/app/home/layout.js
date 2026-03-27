export const metadata = {
  title: "Home",
  description: "Page made by Mika",
  icons: {
    icon: '/astro.png',
  },
};

export default function HomePageLayout({ children }) {
  return (
    <div>
       {children}
    </div>
  );
}