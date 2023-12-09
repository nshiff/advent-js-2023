export function PuzzleSolver(){

    function isDigit(char:string){
      return !Number.isNaN(parseInt(char));
    }

    function solvePuzzleAdventJS(gifts:string) {

      let counts = [];
      let products = [];
      let countStr = '';
      for(let i=0; i<gifts.length; i++){
        if(isDigit(gifts[i])){
          countStr += gifts[i];
          continue;
        }
        counts.push(parseInt(countStr));
        countStr = '';
        products.push(gifts[i]);
      }

      console.log(counts)
      console.log(products)

      return '';
    }

    const answer = solvePuzzleAdventJS('76a11b');

    console.log(answer);
    console.log('---');
    return <h3>puzzle solver</h3>;
}
