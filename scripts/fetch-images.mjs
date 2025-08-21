import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';

const files = [
  { url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1600&q=90&auto=format&fit=crop', file: 'categories/painting.jpg' },
  { url: 'https://images.unsplash.com/photo-1618213837799-25d1d8b5682b?w=1600&q=90&auto=format&fit=crop', file: 'categories/floor.jpg' },
  { url: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1600&q=90&auto=format&fit=crop', file: 'categories/bathroom.jpg' },
  { url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1600&q=90&auto=format&fit=crop', file: 'categories/garden.jpg' },
  { url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1600&q=90&auto=format&fit=crop', file: 'categories/electricity.jpg' },
  { url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1600&q=90&auto=format&fit=crop', file: 'categories/kitchen.jpg' },
  { url: 'https://images.unsplash.com/photo-1600585154340-1e4ce9a2d69b?w=1600&q=90&auto=format&fit=crop', file: 'categories/insulation.jpg' },
  { url: 'https://images.unsplash.com/photo-1582582621959-48d9a2a444ef?w=1600&q=90&auto=format&fit=crop', file: 'categories/walls.jpg' },
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=90&auto=format&fit=crop', file: 'categories/roof.jpg' },
  { url: 'https://images.unsplash.com/photo-1578236617563-3b3b3b3b3b3b?w=1600&q=90&auto=format&fit=crop', file: 'projects/laminate.jpg' },
  { url: 'https://images.unsplash.com/photo-1598300053652-5a77a0e1c1af?w=1600&q=90&auto=format&fit=crop', file: 'projects/bathroom.jpg' }
];

const outBase = path.resolve('public/images');
for (const f of files) {
  const out = path.join(outBase, f.file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await new Promise((resolve, reject) => {
    const file = fs.createWriteStream(out);
    https.get(f.url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${f.url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
  console.log('Downloaded', f.file);
}
console.log('All images downloaded to public/images');
