import { lazy } from "react";

const routes = [
  {
    path: '/',
    Component: lazy(() => import('../components/Home/Home')),
    isPrivate: false,
    isPublicOnly: false,
  },
  {
    path: 'favorites',
    Component: lazy(() => import('../components/Favorites/Favorites')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'trending',
    Component: lazy(() => import('../components/Trending/Trending')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
]

export default routes;