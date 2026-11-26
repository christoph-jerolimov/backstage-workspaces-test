import {
  createFrontendPlugin,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';

import { rootRouteRef } from './routes';

export const page = PageBlueprint.make({
  params: {
    path: '/plugin-b',
    routeRef: rootRouteRef,
    loader: () =>
      import('./components/TodoPage').then(m => (
        <m.TodoPage />
      )),
  },
});

export const pluginBPlugin = createFrontendPlugin({
  pluginId: 'plugin-b',
  info: { packageJson: () => import('../package.json') },
  extensions: [page],
  routes: {
    root: rootRouteRef,
  }
});
