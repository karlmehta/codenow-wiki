import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

export const metadata = {
  metadataBase: new URL('https://wiki.codenow.pro'),
  title: {
    default: 'CodeNow Wiki — Build apps and agents with the dual-mode IDE',
    template: '%s · CodeNow Wiki',
  },
  description: 'User guide, get-started flow, and agent concepts for CodeNow — the IDE for shipping apps and AI agents. Open-source community wiki.',
  applicationName: 'CodeNow Wiki',
  generator: 'Next.js',
  appleWebApp: { title: 'CodeNow Wiki' },
  openGraph: {
    title: 'CodeNow Wiki',
    description: 'User guide, get-started, and agent concepts for the CodeNow IDE.',
    url: 'https://wiki.codenow.pro',
    siteName: 'CodeNow Wiki',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'CodeNow Wiki' },
};

const banner = (
  <Banner storageKey="wiki-launch">
    The CodeNow wiki is brand new. <a href="https://github.com/karlmehta/codenow-wiki" target="_blank" rel="noopener">Contribute on GitHub</a>.
  </Banner>
);

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: 18 }}>
        CodeNow <span style={{ opacity: 0.5, fontWeight: 500 }}>Wiki</span>
      </span>
    }
    projectLink="https://github.com/karlmehta/codenow"
    chatLink="https://codenow.pro"
    chatIcon={<span style={{ fontSize: 13 }}>codenow.pro →</span>}
  />
);

const footer = (
  <Footer>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: 12 }}>
      <span>© {new Date().getFullYear()} CodeNow. Open-source wiki.</span>
      <span>
        <a href="https://codenow.pro">codenow.pro</a> · <a href="https://github.com/karlmehta/codenow-wiki">GitHub</a> · <a href="https://codenow.pro/trust">Trust</a>
      </span>
    </div>
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="📘" />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/karlmehta/codenow-wiki/blob/main"
          editLink="Edit this page on GitHub →"
          feedback={{ content: 'Question? Open an issue →' }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
