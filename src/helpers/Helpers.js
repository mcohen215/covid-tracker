//Static link for US current data
export const USCurrent = 'https://covidtracking.com/api/v1/us/current.json';

//Static link for US historic data
export const USHistoric = 'https://covidtracking.com/api/v1/us/daily.json';

//Dictionary which maps state full name to 2 letter abbreviation (for API link purposes)
export const stateMap = {
    'Alabama': 'al',
    'Alaska': 'ak',
    'Arizona': 'az',
    'Arkansas': 'ar',
    'California': 'ca',
    'Colorado': 'co',
    'Connecticut': 'ct',
    'Delaware': 'de',
    'Flordia': 'fl',
    'Georgia': 'ga',
    'Hawaii': 'hi',
    'Idaho': 'id',
    'Illinois': 'il',
    'Indiana': 'in',
    'Iowa': 'ia',
    'Kansas': 'ks',
    'Kentucky': 'ky',
    'Louisiana': 'la',
    'Maine': 'me',
    'Maryland': 'md',
    'Massachussetts': 'ma',
    'Michigan': 'mi',
    'Minnesota': 'mn',
    'Mississippi': 'ms',
    'Missouri': 'mo',
    'Montana': 'mt',
    'Nebraska': 'ne',
    'Nevada': 'nv',
    'New Hampshire': 'nh',
    'New Jersey': 'nj',
    'New Mexico': 'nm',
    'New York': 'ny',
    'North Carolina': 'nc',
    'North Dakota': 'nd',
    'Ohio': 'oh',
    'Oklahoma': 'ok',
    'Oregon': 'or',
    'Pennsylvania': 'pa',
    'Rhode Island': 'ri',
    'South Carolina': 'sc',
    'South Dakota': 'sd',
    'Tennessee': 'tn',
    'Texas': 'tx',
    'Utah': 'ut',
    'Vermont': 'vt',
    'Virginia': 'va',
    'Washington': 'wa',
    'West Virginia': 'wv',
    'Wisconsin': 'wi',
    'Wyoming': 'wy'
};

//Array containing all 50 states (for the dropdown menu)
export const states = Object.keys(stateMap);

//Dictionary which maps radio button options to what the field name is in the JSON repsonse from the API, and vice versa.
export const JSONFieldMap = {
    'Total Cases': 'positive',
    'Total Deaths': 'death',
    'Total Tests': 'total',
    'New Cases': 'positiveIncrease',
    'New Deaths': 'deathIncrease',
    'New Tests': 'totalTestResultsIncrease',
    'positive': 'Total Cases',
    'death': 'Total Deaths',
    'total': 'Total Tests',
    'positiveIncrease': 'New Cases',
    'deathIncrease': 'New Deaths',
    'totalTestResultsIncrease': 'New Tests',
};
