const textFromInternet = 'In computer science, mathematics, management science, economics and bioinformatics, dynamic programming (also known as dynamic optimization) is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions. The next time the same subproblem occurs, instead of recomputing its solution, one simply looks up the previously computed solution, thereby saving computation time at the expense of (it is hoped) a modest expenditure in storage space. (Each of the subproblem solutions is indexed in some way, typically based on the values of its input parameters, so as to facilitate its lookup.) The technique of storing solutions to subproblems instead of recomputing them is called "memoization".';

const LINE_LENGTH = 90;
function calcBadness(line) {
    const diff = LINE_LENGTH - line.length;
    if (diff >= 0) {
        return Math.pow((LINE_LENGTH - line.length), 2);
    }
    return Number.MAX_VALUE;
}

function dp(text) {
    const words = text.split(' ');
    const memo = [];
    memo[words.length] = [0, 0];
    for (let i = words.length - 1; i >= 0; i--) {
        let best = [Number.MAX_VALUE, i + 1];
        for (let j = i + 1; j <= words.length; j++) {
            const totalScore = calcBadness(words.slice(i, j).join(' ')) + memo[j][0];
            if (totalScore < best[0]) {
                best = [totalScore, j];
            }
        }
        memo[i] = best;
    }
    let totalBadness = 0;
    let pointer = 0;
    const results = [];
    while (pointer < words.length) {
        const line = words.slice(pointer, memo[pointer][1]).join(' ');
        totalBadness += calcBadness(line);
        results.push(line);
        [_, pointer] = memo[pointer];
    }
    return results;
}

console.log(dp(textFromInternet).join('\n'));
