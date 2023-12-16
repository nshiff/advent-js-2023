export function PuzzleSolver(){

    function isDigit(char:string){
      return !Number.isNaN(parseInt(char));
    }

    function solvePuzzleAdventJS(n:number) {
        let output = '';
        for(let i=0; i<n; i++){
            let stairLine = '';
            for(let j=0; j<n; j++){
                if(j >= (n - i - 1)){
                    stairLine += '#';
                }
                else{
                    stairLine += ' ';
                }
                
            }
            console.log(stairLine);
        }
    }

    const answer = solvePuzzleAdventJS(6);

    console.log(answer);
    console.log('---');
    return <h3>puzzle solver</h3>;
}
