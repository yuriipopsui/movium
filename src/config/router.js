import { lazy } from "react";

const routes = [
  {
    path: '/',
    Component: lazy(() => import('../pages/Home/Home')),
    isPrivate: false,
    isPublicOnly: false,
  },
  {
    path: '/popular',
    Component: lazy(() => import('../pages/Popular/Popular')),
    isPrivate: false,
    isPublicOnly: false,
  },
  {
    path: 'favorites',
    Component: lazy(() => import('../pages/Favorites/Favorites')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'trending',
    Component: lazy(() => import('../pages/Trending/Trending')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'coming_soon',
    Component: lazy(() => import('../pages/UpComing/UpComing')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'movies',
    Component: lazy(() => import('../pages/Movies/Movies')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'tv_shows',
    Component: lazy(() => import('../pages/TvShows/TvShows')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'search_results',
    Component: lazy(() => import('../pages/SearchPage/SearchPage')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'videopage/:id',
    Component: lazy(() => import('../pages/VideoPage/VideoPage')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'login_page',
    Component: lazy(() => import('../pages/LoginPage/LoginPage')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
  {
    path: 'register_page',
    Component: lazy(() => import('../pages/RegisterPage/RegisterPage')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false,
  },
]

export default routes;