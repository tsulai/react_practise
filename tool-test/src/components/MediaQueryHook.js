import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');//theme.breakpoints.down('sm')

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}