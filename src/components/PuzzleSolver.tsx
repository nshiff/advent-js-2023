export function PuzzleSolver(){

    function solvePuzzleAdventJS(road:string, time:number) {

      console.log('road:', road)
      console.log('time:', time)
      let roadSplit = road.split('')

      const results:string[] = [];
      // for(let i=0; i<time; i++){
        // results.push(roadSplit.join(''));
      // }

      results.push(roadSplit.join('')); // initial state, counts as 1 step

      let iSanta = 0;
      for(let i=0; i<time - 1; i++){
        if(i === 4){
          roadSplit = roadSplit.join('').replaceAll('|', '*').split('');
        }

        if(roadSplit[iSanta + 1] === '|'){
          results.push(roadSplit.join(''));
          continue;
        }
        else if(roadSplit[iSanta + 1] === '.'
                || roadSplit[iSanta + 1] === '*'){
          roadSplit[iSanta] = road[iSanta] === '|' && i >= 5
            ? '*'
            : road[iSanta];
          if(iSanta === 0){
            roadSplit[iSanta] = '.';  
          }
          
          roadSplit[iSanta + 1] = 'S';
          results.push(roadSplit.join(''));
          iSanta += 1;
        }
      }

      return results;
    }

    const road = 'S..|...|..';
    const time = 10 // units of time
    const answer = solvePuzzleAdventJS(road, time);

    console.log(answer);
    console.log('---');
    return <h3>puzzle solver</h3>;
}
