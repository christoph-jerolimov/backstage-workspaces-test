import {
  createFrontendPlugin,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';

import { rootRouteRef } from './routes';

export const page = PageBlueprint.make({
  params: {
    path: '/plugin-a',
    routeRef: rootRouteRef,
    loader: () =>
      import('./components/TodoPage').then(m => (
        <m.TodoPage />
      )),
  },
});

export const pluginAPlugin = createFrontendPlugin({
  pluginId: 'plugin-a',
  info: { packageJson: () => import('../package.json') },
  extensions: [page],
  routes: {
    root: rootRouteRef,
  }
});
