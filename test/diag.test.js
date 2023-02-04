//THis will contatin the test section of PubChem app

const Input = require('../lib/Input.js');

describe('Input Class', () => {
  it('Creates a string for .csv file path:', () => {
    const results = new Input('./data/inventory.csv');
    
    expect(results.path instanceof String)

  });
});