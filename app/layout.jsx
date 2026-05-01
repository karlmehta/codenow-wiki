import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

export const metadata = {
  metadataBase: new URL('https://wiki.codenow.pro'),
  title: {
    default: 'CodeNow Wiki',
    template: '%s · CodeNow Wiki',
  },
  description: 'User guide, get-started flow, and agent concepts for CodeNow — the IDE for shipping apps and AI agents.',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<b>CodeNow Wiki</b>} projectLink="https://github.com/karlmehta/codenow" />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/karlmehta/codenow-wiki/tree/main"
          footer={<Footer>MIT {new Date().getFullYear()} © CodeNow · <a href="https://codenow.pro">codenow.pro</a></Footer>}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
