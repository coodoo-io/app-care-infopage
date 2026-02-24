---
description: Commit all current changes and push to main to trigger a Cloudflare Pages preview deployment
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*)
---

## Context

- Git status: !`git status`
- Git diff: !`git diff HEAD`

## Your task

Commit all current changes and push to `main` to trigger the Cloudflare Pages preview workflow:

1. Understand what changed (context already provided above)

2. Stage all changes: `git add .`

3. Generate a concise commit message (imperative, 1 sentence) summarizing the changes.

4. Commit using a HEREDOC:
   ```
   git commit -m "$(cat <<'EOF'
   <message>

   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   EOF
   )"
   ```

5. Push: `git push origin main`

6. After pushing, output exactly:
   ```
   Preview deploy gestartet.

   Status: https://github.com/coodoo-io/app-care-infopage/actions

   Preview-URL (verfügbar nach ~1 Min.):
   https://preview-main.app-care.pages.dev
   ```

Rules:
- Do NOT create a git tag.
- Do NOT run `npm run build` — CI handles this.
