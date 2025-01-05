function mincost(arr) { 
    let mincost = 0;

    while (arr.length > 1) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);

        // Pick the two smallest ropes
        let a = arr.shift();
        let b = arr.shift();

        // Combine the ropes and add the cost
        let c = a + b;
        mincost += c;

        // Push the new rope back into the array
        arr.push(c);
    }

    return mincost; // Return the minimum cost
}

module.exports = mincost;
