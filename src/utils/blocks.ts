import { type ComponentType, type LazyExoticComponent, lazy } from 'react';

// Use a fixed path relative to this file: ../block/**/*.tsx
const blocks = import.meta.glob('../block/**/*.tsx');

export interface BlockInfo {
  category: string;
  subcategory: string;
  name: string;
  path: string;
  component: LazyExoticComponent<ComponentType<any>>;
}

export const getBlocks = (): BlockInfo[] => {
  const result: BlockInfo[] = [];

  Object.keys(blocks)
    .sort()
    .forEach((path) => {
      // path relative to src/utils/blocks.ts: ../block/cat/subcat/file.tsx
      const parts = path.split('/');
      // parts[0] = ..
      // parts[1] = block
      // parts[2] = category
      // parts[3] = subcategory
      // parts[4] = filaname

      if (parts.length < 5) return;

      const category = parts[2];
      const subcategory = parts[3];
      const filename = parts[4];
      const name = filename.replace(/\.(tsx|jsx)$/, '');

      const component = lazy(blocks[path] as any);

      result.push({
        category,
        subcategory,
        name,
        path,
        component,
      });
    });

  return result;
};

export const getBlock = (
  category: string,
  subcategory: string,
  name: string,
) => {
  const allBlocks = getBlocks();
  return allBlocks.find(
    (b) =>
      b.category === category &&
      b.subcategory === subcategory &&
      b.name === name,
  );
};
