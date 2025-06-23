import "@/styles/globals.css";
import { ReactQueryProvider } from "@/lib/react-query-provider";

export const metadata = {
  title: "Campaign Landing",
  description: "Campaign Landing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
