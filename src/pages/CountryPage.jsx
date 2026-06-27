import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Container from '../components/Container/Container.jsx';
import CountryInfo from '../components/CountryInfo/CountryInfo.jsx';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn.jsx';
import Heading from '../components/Heading/Heading.jsx';
import Loader from '../components/Loader/Loader.jsx';
import Section from '../components/Section/Section.jsx';
import { fetchCountry } from '../service/countryApi.js';

const CountryPage = () => {
  const { countryName } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  const backLink = location.state || '/';

  useEffect(() => {
    const fetchData = async name => {
      setIsLoading(true);
      setError('');
      try {
        const data = await fetchCountry(name);
        setCountryInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(countryName);
  }, [countryName]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={backLink} />
        {countryInfo && <CountryInfo {...countryInfo} />}
        {isLoading && <Loader />}
        {error && <Heading title={`Oops... ${error}`} />}
      </Container>
    </Section>
  );
};

export default CountryPage;
