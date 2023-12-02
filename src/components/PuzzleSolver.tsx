import { PuzzleConstants } from "./PuzzleConstants";

export function PuzzleSolver(){

    function isDigit(str:string) {
        return /^\d+$/.test(str);
    }

    function getMultilineStringAsArray(str:string){
        const arr = str.split('\n');
        return arr
            .map(line => line.trim())
            .filter(line => line.length > 0);
    }

    function solvePuzzle(lines: string[]): number {
        console.log(lines)
        
        const MAX_BALLS = {
            RED: 12,
            GREEN: 13,
            BLUE: 14
        };
        
        let sum = 0;
        let i = 1;
        for (const lineFull of lines){
            const iGame = lineFull.indexOf(':')
            const line = lineFull.slice(iGame + 1)
            console.log(line)

            const rgb ={
                red: 0,
                green: 0,
                blue: 0,
            }

            const rounds = line.split(';');
            for(const round of rounds){
                console.log(round)
                const balls = round.split(',');
                for(const ball of balls){
                    console.log(ball)
                    const numberColor = ball.trim().split(' ')
                    console.log(numberColor)
                    if(numberColor[1] === 'red'){
                        rgb.red += Number.parseInt(numberColor[0])
                    }
                    else if(numberColor[1] === 'green'){
                        rgb.green += Number.parseInt(numberColor[0])
                    }
                    else if(numberColor[1] === 'blue'){
                        rgb.blue += Number.parseInt(numberColor[0])
                    }
                }
            }
            console.log(rgb)
            if(rgb.red <= MAX_BALLS.RED
                && rgb.green <= MAX_BALLS.GREEN 
                && rgb.blue <= MAX_BALLS.BLUE){
                sum += i;
            }
            i += 1;
        }

        return sum;
    }


    const answer = solvePuzzle(getMultilineStringAsArray(PuzzleConstants.testinput02));

    console.log('---');
    console.log(answer);
    return <h3>puzzle solver</h3>;
}