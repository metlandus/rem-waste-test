import { useEffect, useState } from 'react';

function Products() {
  const [skips, setSkips] = useState(null);

  
  useEffect(() => {
    async function getSkips() {
          const res = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
          const data = await res.json();
          setSkips(data);
          console.log("Skips data fetched:", data);
        }
     getSkips();
    }, []);
    
  return (
      );
}

export default Products;