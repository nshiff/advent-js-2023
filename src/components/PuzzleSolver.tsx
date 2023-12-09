export function PuzzleSolver(){

    function isDigit(char:string){
      return !Number.isNaN(parseInt(char));
    }

    function solvePuzzleAdventJS(gifts:string) {
      for(let i=0; i<gifts.length; i++){
        console.log(`${gifts[i]}:${isDigit(gifts[i])}`)
      }

      return '';
    }

    const answer = solvePuzzleAdventJS('76a11b');

    console.log(answer);
    console.log('---');
    return <h3>puzzle solver</h3>;
}
