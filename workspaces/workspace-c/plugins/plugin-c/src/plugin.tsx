import {
  createFrontendPlugin,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';

import { rootRouteRef } from './routes';

export const page = PageBlueprint.make({
  params: {
    path: '/plugin-c',
    routeRef: rootRouteRef,
    loader: () =>
      import('./components/TodoPage').then(m => (
        <m.TodoPage />
      )),
  },
});

export const pluginCPlugin = createFrontendPlugin({
  pluginId: 'plugin-c',
  info: { packageJson: () => import('../package.json') },
  extensions: [page],
  routes: {
    root: rootRouteRef,
  }
});
