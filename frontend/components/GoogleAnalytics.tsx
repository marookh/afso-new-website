'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId?: string
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  // GA ID should be set in environment variables
  const gaIdValue = gaId || process.env.NEXT_PUBLIC_GA_ID

  if (!gaIdValue) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaIdValue}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaIdValue}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

