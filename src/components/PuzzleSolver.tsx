export function PuzzleSolver(){
    function solvePuzzle(message:number[]) {
      let iStart = null;
      let iEnd = null;
    
      function isSequenceBalanced(i:number,j:number){
        let subArray = message.slice(i, j+1);
        console.log(subArray)

        let count0s = 0;
        let count1s = 0;
        subArray.forEach(num => {
          if(num === 0){
            count0s++;
          }
          else{
            count1s++;
          }
        })
        return count0s === count1s;
      }

      console.log('message:', message)
      for(let i=0; i<message.length - 1; i++){
        for(let j=i+1; j<message.length; j++){
          let isBalanced = isSequenceBalanced(i, j);
          console.log('isBalanced:',isBalanced)
          if(isBalanced){
            console.log('iStart:', iStart);
            console.log('iEnd:', iEnd);
            console.log('i:', i);
            console.log('j:', j);
            if(iStart === null || iEnd === null){
              iStart = i;
              iEnd = j;
              console.log('keep1');
              continue
            }
            else if((j - i) > (iEnd - iStart)){
              iStart = i;
              iEnd = j;
              console.log('keep2');
              continue
            }
            console.log('skip');
          }

        }

      }

      return iStart !== null ? [iStart, iEnd] : [];
    }

    const answer = solvePuzzle([1, 0, 1, 0]);

    console.log(answer);
    console.log('---');
    return <h3>puzzle solver</h3>;
}
