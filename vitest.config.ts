import { UserConfigExport, defineConfig } from 'vitest/config';
import { makeConfig } from './vite.config.ts';

export const makeTestConfig = ({ dirname }: { dirname: string }) => {
  return {
    ...makeConfig({ dirname, mode: 'development' }),
    cacheDir: '../../node_modules/.vitest',
    test: {
      globals: true,
      passWithNoTests: true,
      printConsoleTrace: true,
      disableConsoleIntercept: true,
      silent: false,
      reporters: ['verbose'],
      cache: { dir: '../../node_modules/.vitest' },
      outputFile: '../../node_modules/.vitest/results.json',
      environment: 'jsdom',
      include: [dirname + '/src-js/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  } as UserConfigExport;
};

export default defineConfig(makeTestConfig({ dirname: './' }));
