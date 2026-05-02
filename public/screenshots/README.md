# Screenshot folder

Drop screenshots here named to match the placeholders in `/reference/ui-map`:

- `topbar.png` — full-width top bar (project tabs + mode switcher + sign in)
- `sidebar-files.png` — Files tab open
- `sidebar-connections.png` — Connections tab open
- `sidebar-extensions.png` — Extensions tab open
- `sidebar-git.png` — Git tab open
- `sidebar-agents.png` — Agents tab open with the visual Anatomy card
- `agents-panel-overview.png` — Agents panel with all 10 sub-tabs visible
- `agents-anatomy.png` — Anatomy sub-tab (visual agent card)
- `agents-runs.png` — Runs list view
- `agents-replay.png` — Replay viewer with timeline + transcript
- `agents-fork-diff.png` — Fork-to-current-code side-by-side diff
- `agents-tools.png` — Tools sub-tab with Visual Tool Builder open
- `agents-publish.png` — Publish sub-tab with Agent21 connected + pre-flight checklist
- `editor.png` — Monaco editor with a file open
- `bottom-terminal.png` — bottom terminal panel showing xterm + drag-drop file ring
- `bottom-claude.png` — Claude Code panel
- `bottom-debug.png` — Debug panel with controls + variables
- `status-bar.png` — bottom status bar
- `business-catalog.png` — Business mode Catalog tab
- `business-skillify.png` — Business mode Skillify tab
- `business-guardrails.png` — Business mode Guardrails tab
- `business-workforce.png` — Business mode Workforce tab
- `migration-modal.png` — Migration Assistant detecting tools
- `knowledge-modal.png` — Knowledge bundle (CLAUDE.md / AGENTS.md / GEMINI.md / .aider.conf.yml)
- `share-modal.png` — Collaboration / Share modal
- `tool-builder.png` — Visual Tool Builder modal

### Agent Card detail set (added 2026-05-01)

Added after the Card/Code topbar toggle promotes the Anatomy card into the
main editor area (auto-promoted when there's a single agent). These are
cropped clips of the same render so the wiki / blog can embed each piece
without competing UI.

- `agent-card-hero.png` — full-window shot; the canonical "what is CodeNow" image
- `agent-card-detail.png` — tight crop on the agent card itself (lifecycle + identity + skills rail + conversation)
- `agent-card-skills-rail.png` — close-up on the Skills rail (rounded-square skill tiles + `+ New skill`)
- `agent-card-lifecycle.png` — Build → Test → Skillify → Guardrails → Publish → Deploy bar
- `agent-card-identity.png` — identity tile (model badge, agent name, "trained by", subagents counter)
- `agent-card-conversation.png` — live conversation pane with multi-tool turn

PNG preferred, 1920x1200 retina. WebP also fine. Each placeholder in the wiki page references one of these filenames; once you drop the file in, the image renders automatically (no markup change needed).
