//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
//https://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid


const validGuidTest = (guid) => {
  return guid.match('/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i');
};
