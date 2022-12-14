import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

// const Page = forwardRef(({ children, title = '', ...other }, ref) => (
//   <Box ref={ref} {...other}>
//     <Helmet>
//       <title>{title}</title>
//     </Helmet>
//     {children}
//   </Box>
// ));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

function Page (props, ref) {
  const { children, title = '', ...other } = props;
  return (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
}
export default forwardRef(Page);
