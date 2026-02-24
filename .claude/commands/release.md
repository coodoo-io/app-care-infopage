---
description: Bump patch version, commit, tag, and push to trigger production deploy on Cloudflare Pages
allowed-tools: Bash(npm version:*), Bash(node -p:*), Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git tag:*), Bash(git push:*)
---

## Context

- Current version: !`node -p "require('./package.json').version"`
- Git status: !`git status`
- Git diff: !`git diff HEAD`

## Your task

Release the current state as a new production version:

1. Run `npm version patch --no-git-tag-version` to increment the patch version in `package.json`

2. Read the new version: `node -p "require('./package.json').version"`

3. Stage everything: `git add .`

4. Commit using a HEREDOC — the message MUST start exactly with `Release v` (no prefix, no emoji) so the preview workflow skips this commit:
   ```
   git commit -m "$(cat <<'EOF'
   Release v<new-version>

   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   EOF
   )"
   ```

5. Create annotated tag: `git tag v<new-version>`

6. Push commit and tag in one go: `git push origin main && git push origin v<new-version>`

7. After pushing, output exactly:
   ```
   Release v<new-version> gestartet.

   Production-Deploy läuft:
   https://github.com/coodoo-io/app-care-infopage/actions

   Live-URL nach dem Deploy:
   https://app-care.pages.dev
   ```

Rules:
- Always use `--no-git-tag-version` with `npm version` — the git tag is created manually.
- Do NOT run `npm run build` — CI handles this.
- Do all steps in a single message using parallel tool calls where possible.
