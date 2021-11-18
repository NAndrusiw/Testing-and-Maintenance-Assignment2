var assert = require('assert');
var ref = require('../code');

var sinon = require('sinon');

describe('code.js', function(){

  describe('functionX Behaviorial Tests', function(){
    
    it('should return 2 when given 1', function(){
      
      assert.equal(ref.functionX(test_input), expected_Return);

    });

  });


  describe('functionY Behaviorial Tests', function(){
    
    afterEach(function(){
      
      ref.functionX.restore();

    });


    it('should do this when given that', function(){
      
      sinon.stub(ref, 'functionX').onCall(0).returns(expected_Result_From_functionX);
      
      assert.equal(ref.functionY(test_input), expected_Return);

    });

  });


});


//*********************************BASIC FORMAT*********************************
// var assert = require('assert');
// var ref = require('../code');

// var sinon = require('sinon');

// describe('code.js (file to be tested)', function(){

//   describe('functionX Behaviorial Tests', function(){
    
//     it('should do this when given that', function(){
      
//       assert.equal(ref.functionX(test_input), expected_Return);

//     });

//   });


//   describe('functionY Behaviorial Tests', function(){
    
//     afterEach(function(){
      
//       ref.functionX.restore();

//     });


//     it('should do this when given that', function(){
      
//       sinon.stub(ref, 'functionX').onCall(0).returns(expected_Result_From_functionX);
      
//       assert.equal(ref.functionY(test_input), expected_Return);

//     });

//   });


// });