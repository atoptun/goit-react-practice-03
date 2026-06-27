import { useEffect, useState } from 'react';

import Container from '../components/Container/Container';
import CountryList from '../components/CountryList/CountryList';
import Heading from '../components/Heading/Heading';
import Loader from '../components/Loader/Loader';
import Section from '../components/Section/Section';
import { fetchCountries } from '../service/countryApi';

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchCountries();
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
  }, []);

  return (
    <Section>
      <Container>
        {countries.length > 0 && <CountryList countries={countries} />}
        {isLoading && <Loader />}
        {isError && <Heading title="Oops... Something went wrong..." />}
      </Container>
    </Section>
  );
};
export default HomePage;
