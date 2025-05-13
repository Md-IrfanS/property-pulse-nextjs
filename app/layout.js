import React from "react";
import '@/assets/styles/globals.css';

export const metadata = {
  title: "Property pulse",
  keywords: "Rental, property, real estate",
  description: "Find the perfect"
}

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <main>Root Layout</main>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
