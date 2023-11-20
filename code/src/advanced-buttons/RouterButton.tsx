import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
type TypeProps = {
  to: string;
  children: ReactNode;
};

const RouterButton = ({
  to,
  children
}: TypeProps) => {
  return (
    // <div>RouterButton</div>
    <Button component={Link} to={to}>
      {children}
    </Button>
  )
}

export default RouterButton