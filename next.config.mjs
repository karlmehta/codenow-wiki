import nextra from 'nextra';

const withNextra = nextra({
  // Nextra 4: search is enabled by default. Mermaid diagrams render via the
  // built-in code-block transformer when the language is "mermaid".
  defaultShowCopyCode: true,
  search: { codeblocks: false },
});

export default withNextra({
  // Canonical wiki home is wiki.agentfoundry.me (separate Vercel project).
  // The legacy wiki.codenow.pro host still points at this project; 308 it to
  // the AgentFoundry domain so old/external links keep working. Host-scoped so
  // wiki.agentfoundry.me never redirects to itself (no loop).
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'wiki.codenow.pro' }],
        destination: 'https://wiki.agentfoundry.me/:path*',
        permanent: true,
      },
    ];
  },
});
