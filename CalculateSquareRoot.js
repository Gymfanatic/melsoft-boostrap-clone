function calculateSquareRoot(number) {
    try {
      if (number < 0) {
        throw new Error("Input must be a non-negative number");
      }

      const result = Math.sqrt(number);
      return result;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  // Example usage:
  const input1 = 25;
  const input2 = -4;

  console.log(`Square root of ${input1}: ${calculateSquareRoot(input1)}`);
  console.log(`Square root of ${input2}: ${calculateSquareRoot(input2)}`);
