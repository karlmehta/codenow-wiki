import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

export const metadata = {
  metadataBase: new URL('https://wiki.agentfoundry.me'),
  title: {
    default: 'AgentFoundry Wiki',
    template: '%s · AgentFoundry Wiki',
  },
  description: 'User guide, get-started flow, and agent concepts for AgentFoundry — the IDE for shipping apps and AI agents.',
};

// Bug-report URL — public wiki repo (the desktop repo is private). Uses the
// bug_report.md issue template so users land on a structured form.
const REPORT_ISSUE_URL = 'https://github.com/karlmehta/codenow-wiki/issues/new?template=bug_report.md';

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar logo={<b>AgentFoundry Wiki</b>} projectLink="https://github.com/karlmehta/codenow">
              <a
                href={REPORT_ISSUE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.875rem', fontWeight: 500, whiteSpace: 'nowrap' }}
              >
                Report issue ↗
              </a>
            </Navbar>
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/karlmehta/codenow-wiki/tree/main"
          footer={
            <Footer>
              <span>MIT {new Date().getFullYear()} © AgentFoundry · <a href="https://agentfoundry.me">agentfoundry.me</a></span>
              <span style={{ marginLeft: 'auto' }}>
                Found a bug? <a href={REPORT_ISSUE_URL} target="_blank" rel="noopener noreferrer">Report it on GitHub →</a>
              </span>
            </Footer>
          }
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
