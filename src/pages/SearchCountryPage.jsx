import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Container from '../components/Container/Container';
import CountryList from '../components/CountryList/CountryList';
import Heading from '../components/Heading/Heading';
import Loader from '../components/Loader/Loader';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import { fetchCountries } from '../service/countryApi';

const SearchCountryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchCountries(region);
        // console.info(data);
        setCountries(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  const handleSearch = region => {
    // setRegion(region);
    setSearchParams({ region });
  };

  const currentRegion = searchParams.get('region');

  return (
    <Section>
      <Container>
        <SearchForm currentRegion={currentRegion} onSearch={handleSearch} />
        <Suspense fallback={<Loader />}>
          {countries.length > 0 && <CountryList countries={countries} />}
          {isLoading && <Loader />}
          {isError && <Heading title="Oops... Something went wrong..." />}
        </Suspense>
      </Container>
    </Section>
  );
};

export default SearchCountryPage;
