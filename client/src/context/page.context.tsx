import { createContext, useContext, useReducer } from 'react';

type PageProviderProps = {
  children: React.ReactNode;
};

type PageContextType = {
  currentPage: {
    pageName: string;
    pagePath: string;
  };
  updatePageDetails: (pathName: string) => void;
};

type PageActionType = {
  type: string;
  payload: {
    currentPage: {
      pageName: string;
      pagePath: string;
    };
  };
};

const getPageName = (path: string): string => {
  const pagesObject: { [path: string]: string } = {
    '/': 'Dashboard',
    '/projects': 'Projects',
    '/tasks': 'Tasks',
    '/settings': 'Settings',
    '/profile': 'Profile',
  };

  return pagesObject[path] ?? '';
};

const INITIAL_STATE: PageContextType = {
  currentPage: {
    pageName: getPageName(`/${window.location.pathname.split('/')[1]}`),
    pagePath: window.location.pathname,
  },
  updatePageDetails: (pathName: string) => {},
};

const PAGE_REDUCER_ACTION_TYPES: { [action: string]: string } = {
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
};

const pageReducer = (state: PageContextType, action: PageActionType): PageContextType => {
  const { type, payload } = action;

  switch (type) {
    case PAGE_REDUCER_ACTION_TYPES.SET_CURRENT_PAGE:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unexpected action type: ${type} in pageReducer`);
  }
};

const Context = createContext<PageContextType>(INITIAL_STATE);

export const PageProvider = ({ children }: PageProviderProps): JSX.Element => {
  const [{ currentPage }, dispatch] = useReducer(pageReducer, INITIAL_STATE);

  const updatePageDetails = (pagePath: string): void => {
    const pageName = getPageName(pagePath);

    const data: PageActionType = {
      type: PAGE_REDUCER_ACTION_TYPES.SET_CURRENT_PAGE,
      payload: {
        currentPage: { pageName, pagePath },
      },
    };

    dispatch(data);
  };

  const value = { currentPage, updatePageDetails };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const PageContext = () => useContext(Context);
