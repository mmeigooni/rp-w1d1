describe('Introduction to Functions pt I', function(){
  'use strict';
  
  describe('square', function(){
    var num = square(5);
    var numTwo = square(6);
    var numThree = square(-4);
  
    
    it('expects the return value to not be a string', function(){
      expect(num).to.not.be.a('string');
    });
    
    it('expects a number to be returned', function(){
      expect(num).to.be.a('number');
    });
    
    it('expects a number to be squared', function(){
      expect(num, numTwo).to.equal(25, 36);
    });
    
    it('expects to handle negative cases', function(){
      expect(numThree).to.equal(16);
    });
    
  });
  
  describe('cubed', function(){
    
    var num = cubed(5);
    var numTwo = cubed(6);
    var numThree = cubed(-4);
  
    
    it('expects the return value to not be a string', function(){
      expect(num).to.not.be.a('string');
    });
    
    it('expects a number to be returned', function(){
      expect(num).to.be.a('number');
    });
    
    it('expects a number to be cubed', function(){
      expect(num, numTwo).to.equal(Math.pow(5,3), Math.pow(6,3));
    });
    
    it('expects to handle negative cases', function(){
      expect(numThree).to.equal(-64);
    });
  });
  
  describe('fullName', function(){
    var ric = fullName('Ric', 'Flair');
    var rock = fullName('The', 'Rock');
    var john = fullName('John','Cena');
    
    it('expects the return value to be a string', function(){
      expect(ric, rock, john).to.be.a('string');
    });
    
    it('expects there to be a space in the return value', function(){
      expect(ric, rock, john).to.equal('Ric Flair', 'The Rock', 'John Cena');
    });
    
  });
  
  describe('average', function(){
    var numSet1 = average(20,10);
    var numSet2 = average(40, 30);
    var numSet3 = average(80, 2);
    var numSet4 = average(65, 2);
    
    it('expects the return value to be a number', function(){
      expect(numSet1,numSet2,numSet3).to.be.a('number');
    });
    
    it('expects the average of two numbers', function(){
      expect(numSet1, numSet2, numSet3).to.equal(15, 35, 41);
    });
    
    it('expects the return value to be rounded', function(){
      expect(numSet4).to.equal(34);
    });
    
  });
  
  describe('greeter', function(){
    var wolverine = greeter('wolverine');
    var sheHulk = greeter('shehulk');
    var thundercats = greeter('lionel');
    
    it('expects the return value to be a string', function(){
      expect(wolverine, sheHulk, thundercats).to.be.a('string');
    });
    
    it('expects "Hello, " to be added as well as "!" and returned with the value', function(){
      expect(wolverine, sheHulk, thundercats).to.equal('Hello, wolverine!', 'Hello, shehulk!', 'Hello, lionel!');
    });
      
  });
  
});

