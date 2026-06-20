# Assumptions

- このリポジトリは Next.js / shadcn 構成ではなく、単一の `index.html` とデータJSONで動く静的PWAとして実装されているため、既存構成を尊重して静的HTML/CSS/JavaScriptの範囲で改善する。
- `package.json`、`components.json`、`tailwind.config.*`、`app/`、`pages/`、`components/ui/`、`design.md` は存在しない。
- `pnpm dlx shadcn@latest info --json` と `npx shadcn@latest info --json` は、shadcn対象プロジェクトではないため成功しない想定。既存ファイルからフレームワークなしの静的アプリと判断する。
- `pnpm dlx skills add shadcn/ui` は、この環境では必須のCLIとして存在しない可能性が高く、失敗しても作業は止めない。
- サイト名は既存の `栄養量計算補助ツール` を正式名称として扱う。
- ターゲットは20代女性の利用者。訪問者に起こしたい行動は、説明を読まずにブラウザでそのまま計算を始めることとする。

## Tooling checks attempted

- `pnpm dlx shadcn@latest info --json` failed with npm registry 403, so shadcn metadata was inferred from repository files.
- `npx shadcn@latest info --json` failed with npm registry 403, so no shadcn components were added.
- `pnpm dlx skills add shadcn/ui` failed with npm registry 403; the static app has no shadcn integration point.
