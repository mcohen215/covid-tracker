//Static link for US current data
export const USCurrent = 'https://covidtracking.com/api/v1/us/current.json';

//Static link for US historic data
export const USHistoric = 'https://covidtracking.com/api/v1/us/daily.json';

//Dictionary which maps state full name to 2 letter abbreviation (for API link purposes)
export const stateMap = {};
stateMap['Alabama'] = 'al';
stateMap['Alaska'] = 'ak';
stateMap['Arizona'] = 'az';
stateMap['Arkansas'] = 'ar';
stateMap['California'] = 'ca';
stateMap['Colorado'] = 'co';
stateMap['Connecticut'] = 'ct';
stateMap['Delaware'] = 'de';
stateMap['Flordia'] = 'fl';
stateMap['Georgia'] = 'ga';
stateMap['Hawaii'] = 'hi';
stateMap['Idaho'] = 'id';
stateMap['Illinois'] = 'il';
stateMap['Indiana'] = 'in';
stateMap['Iowa'] = 'ia';
stateMap['Kansas'] = 'ks';
stateMap['Kentucky'] = 'ky';
stateMap['Louisiana'] = 'la';
stateMap['Maine'] = 'me';
stateMap['Maryland'] = 'md';
stateMap['Massachussetts'] = 'ma';
stateMap['Michigan'] = 'mi';
stateMap['Minnesota'] = 'mn';
stateMap['Mississippi'] = 'ms';
stateMap['Missouri'] = 'mo';
stateMap['Montana'] = 'mt';
stateMap['Nebraska'] = 'ne';
stateMap['Nevada'] = 'nv';
stateMap['New Hampshire'] = 'nh';
stateMap['New Jersey'] = 'nj';
stateMap['New Mexico'] = 'nm';
stateMap['New York'] = 'ny';
stateMap['North Carolina'] = 'nc';
stateMap['North Dakota'] = 'nd';
stateMap['Ohio'] = 'oh';
stateMap['Oklahoma'] = 'ok';
stateMap['Oregon'] = 'or';
stateMap['Pennsylvania'] = 'pa';
stateMap['Rhode Island'] = 'ri';
stateMap['South Carolina'] = 'sc';
stateMap['South Dakota'] = 'sd';
stateMap['Tennessee'] = 'tn';
stateMap['Texas'] = 'tx';
stateMap['Utah'] = 'ut';
stateMap['Vermont'] = 'vt';
stateMap['Virginia'] = 'va';
stateMap['Washington'] = 'wa';
stateMap['West Virginia'] = 'wv';
stateMap['Wisconsin'] = 'wi';
stateMap['Wyoming'] = 'wy';

//Array containing all 50 states (for the dropdown menu)
export const states = Object.keys(stateMap);

//Dictionary which maps radio button options to what the field name is in the JSON repsonse from the API, and vice versa.
export const JSONFieldMap = {};
JSONFieldMap['Total Cases'] = 'positive';
JSONFieldMap['Total Deaths'] = 'death';
JSONFieldMap['Total Tests'] = 'total';
JSONFieldMap['New Cases'] = 'positiveIncrease';
JSONFieldMap['New Deaths'] = 'deathIncrease';
JSONFieldMap['New Tests'] = 'totalTestResultsIncrease';

JSONFieldMap['positive'] = 'Total Cases';
JSONFieldMap['death'] = 'Total Deaths';
JSONFieldMap['total'] = 'Total Tests';
JSONFieldMap['positiveIncrease'] = 'New Cases';
JSONFieldMap['deathIncrease'] = 'New Deaths';
JSONFieldMap['totalTestResultsIncrease'] = 'New Tests';
