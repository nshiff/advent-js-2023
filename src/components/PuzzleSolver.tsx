export function PuzzleSolver(){
    function solvePuzzleAdventJS(gifts:number[]) {
        const iRepeated = []
      
        for(let i=0; i<gifts.length; i++){
        //   debugger;
          const subArray = gifts.slice(i + 1)
          const match = subArray.indexOf(gifts[i])
          console.log('match:',match)
          if(match === -1){
            continue;
          }
          iRepeated.push(match + i + 1);
          console.log('iRepeated:',iRepeated)
        }
      
        if(iRepeated.length === 0){
          return -1;
        }
        const iAnswer = Math.min(...iRepeated)
        console.log('iAnswer:',iAnswer)
        console.log('gifts[iAnswer]:',gifts[iAnswer])
        return gifts[iAnswer]
      }
      

    // const answer = solvePuzzle(getMultilineStringAsArray(PuzzleConstants.input02));
    const answer = solvePuzzleAdventJS([2, 1, 3, 5, 3, 2]);

    console.log('---');
    // console.log(answer);
    return <h3>puzzle solver</h3>;
}