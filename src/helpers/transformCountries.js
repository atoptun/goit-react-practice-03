export const transformCountriesData = data => {
  // 'names.common,flags,region,capitals,population,languages,links,uuid'
  return data.map(
    ({
      names: { common },
      capitals,
      region,
      flag,
      links,
      population,
      languages,
      uuid,
    }) => ({
      id: uuid,
      countryName: common,
      region: region,
      links: links,
      flag: { svg: flag.url_svg, png: flag.url_png },
      capitals: capitals.map(({ name }) => name),
      population,
      languages: languages.map(({ name }) => name),
    }),
  );
};
