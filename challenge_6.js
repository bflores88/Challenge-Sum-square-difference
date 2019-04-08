/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {

  this.naturalNumbers = naturalNumbers;

  this.sumOfSquares = function () {
    let sumSquares = 0;
    for (let i = 1; i < this.naturalNumbers + 1; i++) {
      sumSquares += Math.pow(i, 2);
    }
    return sumSquares;
  };

  this.squareOfTheSums = function () {
    let sum = 0;
    for (let i = 1; i < this.naturalNumbers + 1; i++) {
      sum += i;
    }
    return Math.pow(sum, 2);
  }
}


// do work here




// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()