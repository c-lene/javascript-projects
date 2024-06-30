let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
let numsHalved = function(n) {
    return n/2;
}

// and pass it to .map()
let halved = nums.map(numsHalved);

console.log(halved);
