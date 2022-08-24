import { Link, useLocation } from 'react-router-dom';
import { TiArrowLeftOutline } from 'react-icons/ti';

export const ButtonBackTo = () => {
  const location = useLocation();
	const backLinkHref = location.state?.from ?? '/';
	
  return (
    <Link to={backLinkHref}>
      <TiArrowLeftOutline /> Back to the Previous page
    </Link>
  );
};
