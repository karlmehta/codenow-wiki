import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs';

// Re-export Nextra's docs MDX components so every .mdx page gets headers,
// callouts, code blocks, tables, Mermaid diagrams, etc. wired up correctly.
const docsComponents = getDocsMDXComponents();

export function useMDXComponents(components) {
  return { ...docsComponents, ...components };
}
