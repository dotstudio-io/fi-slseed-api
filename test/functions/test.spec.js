const mochaPlugin = require('serverless-mocha-plugin');

const { expect } = mochaPlugin.chai;

describe('Test Function', function() {
  this.timeout(30000);

  let wrapped;

  before(() => {
    wrapped = mochaPlugin.getWrapper('test', '/service/functions/test', 'handler');
  });

  it('should respond 204 (NoContent)', async () => {
    const res = await wrapped.run({});

    expect(res).to.not.be.empty;
    expect(res.statusCode).to.equal(204);
    expect(res.body).to.be.empty;
  });
});
