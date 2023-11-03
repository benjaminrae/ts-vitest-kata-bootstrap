import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: [...configDefaults.include, 'src/**/*.test.ts'],
    exclude: [...configDefaults.exclude],
    coverage: {
      reporter: ['lcov', 'text', 'html'],
    },
  },
});
