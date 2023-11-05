import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign-in",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <style>
        {`
          @media (min-width: 1080px) {
            body {
              background: url("/images/Home.png") no-repeat;
              background-size: cover;
              background-position: center;
            }
          }
          @media (min-width: 760px) and (max-width: 820px) {
            body {
              background: url("/images/login-ipad.png") no-repeat;
            }
          }
          @media (min-width: 400px) and (max-width: 420px) {
            body {
              background: url("/images/login-phone.png") no-repeat;
            }
          }
          @media (max-width: 375px)  {
            body {
              background: url("/images/signin-phone-smaller.png") no-repeat;
            }
          }
        `}
      </style>
      <body >
        {children}
      </body>
    </html>
  );
}
