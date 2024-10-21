import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { AnimatedTabs } from "@/components/footer";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thinker",
  description:
    "Thinker is a forward-thinking software company dedicated to crafting innovative solutions that empower businesses and individuals to achieve their goals. Our team of experts is passionate about technology and committed to delivering excellence in every project.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
            <AnimatedTabs />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
