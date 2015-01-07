var should = require('chai').should(),
    inspector = require('../index');


describe('inspect', function() {
  var inspect = inspector.inspect;

  it('should stringify undefined', function() {
    inspect(undefined).should.equal('undefined');
  });

  it('should stringify null', function() {
    inspect(null).should.equal('null');
  });

  it('should stringfy number', function() {
    inspect(5).should.equal('5');
  });

  it('should stringfy boolean', function() {
    inspect(5 === 6).should.equal('false');
  });

  it('should stringfy date', function() {
    var d = new Date();
    inspect(d).should.equal('new Date("' + d.toISOString() + '")');
  });
});
