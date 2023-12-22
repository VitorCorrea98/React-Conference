import { useEffect } from 'react';

function Location() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'instant',
    });
  }, []);
  return (
    <div>Location</div>
  );
}

export default Location;
