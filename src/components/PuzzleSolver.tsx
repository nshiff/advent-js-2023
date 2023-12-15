export function PuzzleSolver(){

    function isDigit(char:string){
      return !Number.isNaN(parseInt(char));
    }

    function solvePuzzleAdventJS(paths:string[][]) {
        let pairCurrent = paths[0];
        let didUpdateThisIteration = true;
        while(didUpdateThisIteration){
            didUpdateThisIteration = false;

            for(let i=0; i<paths.length;i++){
                if(paths[i][0] === pairCurrent[1]){
                    pairCurrent = paths[i];
                    didUpdateThisIteration = true;
                    break;
                }
            }
            
        }

        // failed to find pair where current second city was a first city
        // i.e. second city is the final destination
        return pairCurrent[1];
    }

    const answer = solvePuzzleAdventJS([["B","C"],["D","B"],["C","A"]]);

    console.log(answer);
    console.log('---');
    return <h3>puzzle solver</h3>;
}
