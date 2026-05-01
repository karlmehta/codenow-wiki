import nextra from 'nextra';

const withNextra = nextra({
  // Nextra 4: search is enabled by default. Mermaid diagrams render via the
  // built-in code-block transformer when the language is "mermaid".
  defaultShowCopyCode: true,
  search: { codeblocks: false },
});

export default withNextra({
  // Wiki is hosted at wiki.codenow.pro (separate Vercel project).
  // No basePath needed since the wiki owns its subdomain root.
  reactStrictMode: true,
});
