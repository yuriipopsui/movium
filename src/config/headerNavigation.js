import { lazy } from "react"

export const headerNavigationList = {
  filmsInfo: {
    className: "filmsInfo",
    listItems: [
      {
        name: "Movies",
        link: "/movies",
      },
      {
        name: "TV Shows",
        link: "/tv_shows",
      },
      // {
      //   name: "Documentaries",
      //   link: "/documentaries",
      // }
    ]
  },
  userInfo: {
    className: "userInfo",
    listItems: [
      {
        name: "search",
        iconPath: "/src/assets/icons/search.png",
        Component: lazy(() => import('../components/common/SearchForm/SearchForm'))
      },
      {
        name: "messages",
        iconPath: "/src/assets/icons/bell.png"
      },
      
    ]
  }
}