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

      // console.log(counts)
      // console.log(products)

      let outputString = '';
      for(let i=0; i<counts.length; i++){
        let count = counts[i];
        const product = products[i];
        while(count - 50 >= 0){
          count -= 50;
          outputString += `[${product}]`;
        }
        
        while(count - 10 >= 0){
          count -= 10;
          outputString += `{${product}}`;
        }

        if(count - 1 >= 0){
          outputString += '(';
          while(count - 1 >= 0){
            count -= 1;
            outputString += `${product}`;
          }
          outputString += ')';
        }

      }

      return outputString;
    }

    const answer = solvePuzzleAdventJS('76a11b');

    console.log(answer);
    console.log('---');
    return <h3>puzzle solver</h3>;
}
