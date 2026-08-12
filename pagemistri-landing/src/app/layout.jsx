import Script from 'next/script';
import '../index.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata = {
 title: 'PageMistri Landing',
 description: 'Landing page',
};

export default function RootLayout({ children }) {
 return (
 <html lang="en" suppressHydrationWarning>
 <head>
 <Script 
 id="gtm-script" 
 strategy="afterInteractive" 
 dangerouslySetInnerHTML={{ __html: `
 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
 })(window,document,'script','dataLayer','GTM-PBG4766S');
 ` }} 
 />
 
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `
          }}
        />
      </head>
 <body className="bg-white text-slate-900 dark:text-white dark:bg-[#090d16] dark:text-slate-100 font-sans transition-colors duration-300">
 <noscript>
 <iframe 
 src="https://www.googletagmanager.com/ns.html?id=GTM-PBG4766S"
 height="0" 
 width="0" 
 style={{ display: 'none', visibility: 'hidden' }}
 />
 </noscript>
 <ThemeProvider defaultTheme="light">
        {children}
      </ThemeProvider>
 </body>
 </html>
 );
}
