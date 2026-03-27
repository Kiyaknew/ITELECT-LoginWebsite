export const metadata = {
  title: "About Us",
  description: "Page made by Zeane",
  icons: {
    icon: '/astro.png',
  },
};

export default function AboutPageLayout({ children }) {
  return (
    <div>
       {children}
    </div>
  );
}