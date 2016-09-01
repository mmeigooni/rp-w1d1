describe('Fundamentals of Programming', function(){
  'use strict';
  
  describe('howOld', function () {
      var age = howOld("02/13/1978");
      var ageTwo = howOld("07/13/1985");
      var ageThree = howOld("06/15/1932");
      var ageNow1 = Math.floor(Math.log(age + 1) / Math.LN10) > 5;
      var ageNow2 = Math.floor(Math.log(ageTwo + 1) / Math.LN10) > 5;
      var ageNow3 = Math.floor(Math.log(ageThree + 1) / Math.LN10) > 5;
      var checkAgeNow1 = age % 1 !== 0;  
      var checkAgeNow2 = ageTwo % 1 !== 0;   
      var checkAgeNow3 = ageThree % 1 !== 0;  
      var years = 365 * 24 * 60 * 60 * 1000;
      var checkIfOlder1 = (age / (365 * 24 * 60 * 60 * 1000) < 120);
      var checkifOlder2 = (ageTwo / (365 * 24 * 60 * 60 * 1000) < 120);
      var checkifOlder3 = (ageThree / (365 * 24 * 60 * 60 * 1000) < 120);
      
    it('should be a function', function(){
      expect(howOld).to.be.an.instanceOf(Function);
    });
    
    it('expects the minutes returned to be a integer', function () {
      expect(age, ageTwo, ageThree).to.be.a('number');
    });

    it('expects the value of the minutes to be larger than ten thousands', function () {
      expect(ageNow1, ageNow2, ageNow3).to.equal(true);
    });
    
    it('expects the value of the minutes returned to be in decimals', function () {
      expect(checkAgeNow1, checkAgeNow2, checkAgeNow3).to.equal(true);
    });
    
    it('expects the age to be less than 120 years old', function(){
      expect(checkIfOlder1, checkifOlder2, checkifOlder3).to.equal(true);
    });
    
  });

  describe('brownHair', function(){
    var brown = brownHair(10, 24);
    var brownTwo = brownHair(10, 24);
    var brownThree = brownHair(10,24).length === 3;
    var rounded = Math.round(parseInt(brownHair(10, 24).split("%").join(""))) % 1 === 0;
    
    it('should be a function', function(){
      expect(brownHair).to.be.an.instanceOf(Function);
    });
    
    it('expects a rounded integer', function () {
      expect(rounded).to.equal(true);
    });
    
    it('expects the length of the return value to be three', function(){
      expect(brownThree).to.equal(true);
    });
    
    it('expects the return value to be a string', function(){
      expect(brownTwo).to.be.a('string');
    });
    
  });

  describe('usingModulus', function(){
    var one = usingModulus(5, 2);
    var rounded = one % 1 === 0;
    
    it('should be a function', function(){
      expect(usingModulus).to.be.an.instanceOf(Function);
    });
    
    it('expects a rounded integer', function(){
      expect(rounded).to.equal(true);
    });
    
    it('expects the return value to be a number', function(){
      expect(one).to.be.a('number');
    });
    
  });
    
  describe('usingModulusWithTwo', function(){
     var two = usingModulusWithTwo(2);
     var three = usingModulusWithTwo(3);
     var four = usingModulusWithTwo(4);
     
    it('should be a function', function(){
      expect(usingModulusWithTwo).to.be.an.instanceOf(Function);
    });
    
    it('should return a single number', function(){
      expect(two, three, four).to.be.a('number');
    });

  });
  
  describe('yourName', function(){
    var bob = yourName("Bob");
    var angelina = yourName("Angelina");
    var daryl = yourName("Daryl");
   
    it('should be a function', function(){
     expect(yourName).to.be.an.instanceOf(Function);
    });
   
    it('expects your name returned to be a string', function(){
      expect(bob, angelina, daryl).to.be.a('string');
    });
    
  });
  
  describe('favFood', function(){
    var pizza = favFood('pizza');
    var burgers = favFood('burgers');
    var chicken = favFood('chicken');
    var sushi = favFood('sushi');
    
    it('should be a function', function(){
      expect(favFood).to.be.an.instanceOf(Function);
    });
    
    it('should return a string', function(){
      expect(pizza, burgers, chicken, sushi).to.be.a('string');
    });
  
  });
  
  describe('letsConcat', function(){
    var fullOne = letsConcat("Harry", "Potter");
    var notFullTwo = letsConcat("Harry");
    
    it('should be a function', function(){
      expect(letsConcat).to.be.an.instanceOf(Function);
    });
    
    it('should return a string', function(){
      expect(fullOne).to.be.a('string');
    });
    
  });
  
});

