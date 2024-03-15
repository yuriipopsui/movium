import { lazy } from "react";

const routes = [
  {
    path: '/',
    Component: lazy(() => import('../components/Home/Home')),
    isPrivate: false,
    isPublicOnly: false,
  },
  {
    path: '/popular',
    Component: lazy(() => import('../components/Popular/Popular')),
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
  {
    path: 'coming_soon',
    Component: lazy(() => import('../components/UpComing/UpComing')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'movies',
    Component: lazy(() => import('../components/Movies/Movies')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'tv_shows',
    Component: lazy(() => import('../components/TvShows/TvShows')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'videopage/:id',
    Component: lazy(() => import('../pages/VideoPage/VideoPage')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
]

export default routes;