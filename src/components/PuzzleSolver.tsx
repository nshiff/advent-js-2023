export function PuzzleSolver(){

    function isDigit(char:string){
      return !Number.isNaN(parseInt(char));
    }

    function solveAdventJsPuzzle(arr:number[]) {
      let countPositive = 0;
      let countZero = 0;
      let countNegative = 0;
      
      arr.forEach(num => {
          if(num === 0){
              countZero += 1;
          }
          else if(num > 0){
              countPositive += 1;
          }
          else{
              countNegative += 1;
          }
      })
      
      console.log((countPositive / arr.length).toFixed(6))
      console.log((countNegative / arr.length).toFixed(6))
      console.log((countZero / arr.length).toFixed(6))
    }

    const answer = solveAdventJsPuzzle([-4, 3, -9, 0, 4, 1]);

    console.log(answer);
    console.log('---');
    return <h3>puzzle solver</h3>;
}
