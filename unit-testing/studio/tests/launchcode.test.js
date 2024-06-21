// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  it('should have organization as "nonprofit"', function() {
      expect(launchcode.organization).toBe('nonprofit');
  });
  
  it('should have executiveDirector as "Jeff"', function() {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });
  it('should have percentageCoolEmployees as 100', function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  it('should have programsOffered containing "Web Development", "Data Analysis", and "Liftoff"', function() {
    expect(launchcode.programsOffered).toContain('Web Development');
    expect(launchcode.programsOffered).toContain('Data Analysis');
    expect(launchcode.programsOffered).toContain('Liftoff');
    expect(launchcode.programsOffered).toHaveLength(3);
  });
});
describe("Testing launchOutput method", function() {

  // Test for number divisible only by 2
  it('should return "Launch!" for numbers divisible only by 2', function() {
      expect(launchcode.launchOutput(4)).toBe('Launch!');
  });

  // Test for number divisible only by 3
  it('should return "Code!" for numbers divisible only by 3', function() {
      expect(launchcode.launchOutput(9)).toBe('Code!');
  });

  // Test for number divisible only by 5
  it('should return "Rocks!" for numbers divisible only by 5', function() {
      expect(launchcode.launchOutput(25)).toBe('Rocks!');
  });

  // Test for number divisible by 2 and 3
  it('should return "LaunchCode!" for numbers divisible by 2 and 3', function() {
      expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });

  // Test for number divisible by 3 and 5
  it('should return "Code Rocks!" for numbers divisible by 3 and 5', function() {
      expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });

  // Test for number divisible by 2 and 5
  it('should return "Launch Rocks! (CRASH!!!!)" for numbers divisible by 2 and 5', function() {
      expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });

  // Test for number divisible by 2, 3, and 5
  it('should return "LaunchCode Rocks!" for numbers divisible by 2, 3, and 5', function() {
      expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

  // Test for number not divisible by 2, 3, or 5
  it('should return "Rutabagas! That doesn\'t work." for numbers not divisible by 2, 3, or 5', function() {
      expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
});