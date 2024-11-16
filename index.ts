function isPrime(n: number): boolean {
    if(n <= 1) {
        return false; 
    }

    if (n <= 3) {
        return true; 
    }

    if (n % 2 === 0 || n % 3 === 0) {
        return false; 
    }

    const limit = Math.floor(Math.sqrt(n));

    for(let i = 5; i <= limit; i+=6) {
        if(n % i === 0 || n % (i + 2) === 0)  {
            return false;
        }
    }

    return true; 
}


function findPrimePairs(n: number): number[][] {

    let primePairsArray = []; 

    for(let i = 2; i <= n / 2; i++) {
        if(!isPrime(i)) {
            continue; 
        }

        const pair = n - i; 
        if(isPrime(pair)) {
            primePairsArray.push([i, pair]); 
        }
    }
    return primePairsArray; 
};