import { Link, useLocation } from 'react-router-dom';

import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <>
      <Grid>
        {countries.map(country => (
          <GridItem key={country.id}>
            <Link to={`/country/${country.countryName}`} state={location}>
              <img
                src={country.flag.svg || country.flag.png || 'img.png'}
                alt={country.countryName}
              />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
export default CountryList;
