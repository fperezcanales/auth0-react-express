import React from 'react';
import PropTypes from 'prop-types';

export default function Wizard({ children, pages }) {
  const [pageIndex, setPageIndex] = React.useState(0);

  const Page = pages[pageIndex];
  const NextPage = pages[Math.min(pages.length - 1, pageIndex + 1)];
  const PreviousPage = pages[Math.max(0, pageIndex - 1)];

  const navigateNext = () => {
    setPageIndex(pageIndex + 1);
    window.scroll(0, 0);
  };

  const navigateBack = () => {
    setPageIndex(pageIndex - 1);
  };

  const renderProps = {
    navigateBack,
    navigateNext,
    pageIndex,
    isFirst: pageIndex === 0,
    isLast: pageIndex === (pages.length - 1),
    Page,
    NextPage,
    PreviousPage,
  };

  return <>{children(renderProps)}</>;
}

Wizard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pages: PropTypes.any.isRequired,
};
