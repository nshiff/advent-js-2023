import { PuzzleConstants } from "./PuzzleConstants";

export function PuzzleSolver(){

    function isDigit(str:string) {
        return /^\d+$/.test(str);
    }

    function getMultilineStringAsArray(str:string){
        const arr = str.split('\n');
        return arr;
            // .map(line => line.trim())
            // .filter(line => line.length > 0);
    }

    function solvePuzzle(lines: string[]): number {
        console.log(lines)
        let sum = 0;
        for(const line of lines){
            let iFirstNum = null;
            let iLastNum = 0;
            for(let i=0; i<line.length; i++){
                if(isDigit(line[i])){
                    if(iFirstNum === null){
                        iFirstNum = i;
                        // console.log('iFirstNum:', iFirstNum)
                    }
                    iLastNum = i;
                    // console.log('iLastNum:', iLastNum)
                }
            }
            const calibrationValueStr = `${line[iFirstNum ?? 0]}${line[iLastNum]}`;
            const calibrationValue = Number.parseInt(calibrationValueStr);
            sum += calibrationValue;
            // console.log('calibrationValueStr:', calibrationValueStr)
            // console.log('calibrationValue:', calibrationValue)
            // console.log('sum:', sum)
        }
        return sum;
    }


    const answer = solvePuzzle(getMultilineStringAsArray(PuzzleConstants.input01));

    console.log('---');
    console.log(answer);
    return <h3>puzzle solver</h3>;
}