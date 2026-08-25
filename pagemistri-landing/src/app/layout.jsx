import Script from 'next/script';
import '../index.css';

export const metadata = {
 title: 'Pagemistri - High-Converting Website Setup & Hosting',
 description: 'Build, host, and grow your business with Pagemistri.',
 icons: {
  icon: '/pagemistri-logo.png',
  shortcut: '/pagemistri-logo.png',
  apple: '/pagemistri-logo.png',
 },
 openGraph: {
  title: 'Business Website for Small Businesses in India | Pagemistri',
  description: ' Get a professional business website for ₹5,000. Collect enquiries, manage leads and track performance with Pagemistri. Go live in 3–5 days.',
  url: 'https://pagemistri.in',
  siteName: 'PageMistri',
  images: [
   {
    url: 'https://pagemistri.in/og-image.jpg',
    width: 1200,
    height: 630,
   }
  ],
  type: 'website',
 },
};

export default function RootLayout({ children }) {
 return (
 <html lang="en" className="light" style={{ colorScheme: 'light' }}>
 <head>
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
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
 </head>
 <body className="bg-white text-slate-900 font-sans transition-colors duration-300">
 <noscript>
 <iframe 
 src="https://www.googletagmanager.com/ns.html?id=GTM-PBG4766S"
 height="0" 
 width="0" 
 style={{ display: 'none', visibility: 'hidden' }}
 />
 </noscript>
        {children}
 </body>
 </html>
 );
}
