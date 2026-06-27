import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import styles from './SearchForm.module.css';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ currentRegion, onSearch }) => {
  const [region, setRegion] = useState(currentRegion || 'default');

  const handleSubmit = formData => {
    const region = formData.get('region');
    if (!region || region === 'default') {
      alert('Please select a region');
      return;
    }
    onSearch(region);
  };

  return (
    <form className={styles.form} action={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        value={region}
        // defaultValue="default"
        onChange={e => setRegion(e.target.value)}
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region => (
          <option key={region.id} value={region.value}>
            {region.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchForm;
