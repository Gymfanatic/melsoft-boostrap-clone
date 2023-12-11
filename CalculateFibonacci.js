function generateFibonacci(n) {
    // Initialize an array with the first two Fibonacci numbers
    const fibonacci = [0, 1];

    // Use a for loop to calculate the next Fibonacci numbers
    for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(nextFibonacci);
    }

    return fibonacci;
  }

  // Call the function with an appropriate value of n
  const n = 10; // Change this to the desired number of Fibonacci numbers
  const fibonacciSequence = generateFibonacci(n);

  // Log the result
  console.log(`The first ${n} Fibonacci numbers are:`, fibonacciSequence);


