import { useEffect } from 'react';
import { PageContext } from '../context/page.context';

/**
 * updatePageAndPath updates the following details of a page:
 * - what is the current page path
 * - and what is the current page name
 *
 * Updates the state in the PageContext
 */

export const updatePageAndPath = () => {
  const { updatePageDetails } = PageContext();

  useEffect(() => updatePageDetails(`/${window.location.pathname.split('/')[1]}`), []);
};
