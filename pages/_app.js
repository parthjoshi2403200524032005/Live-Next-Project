import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import "../styles/globals.css"

const DynamicRouter = dynamic(
  () => import('react-router-dom').then((mod) => mod.BrowserRouter),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <DynamicRouter>
      <Component {...pageProps} />
    </DynamicRouter>
  );
}

export default MyApp;

