import fs from 'node:fs';
import path from 'node:path';

export type SectionPage = { href: string; title: string; description: string };

// 各ページの metadata から title / description を読む（ハブの一覧はディレクトリから自動生成）
function pick(src: string, key: string): string {
  const m = src.match(new RegExp(`\\b${key}:\\s*(['"\`])([\\s\\S]*?)\\1`));
  return m ? m[2].trim() : '';
}

export function sectionPages(section: string): SectionPage[] {
  const dir = path.join(process.cwd(), 'src/app', section);
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(dir, d.name, 'page.tsx')))
    .map((d) => {
      const src = fs.readFileSync(path.join(dir, d.name, 'page.tsx'), 'utf8');
      const title = pick(src, 'title').split(/[|｜]/)[0].trim() || d.name;
      return { href: `/${section}/${d.name}/`, title, description: pick(src, 'description') };
    })
    .sort((a, b) => a.title.localeCompare(b.title, 'ja'));
}
