// Simple function to add two numbers
function add(a, b) {
    return a + b;
}

// Export function for testing
module.exports = { add };

// Run directly if executed with node
if (require.main === module) {
    console.log("Sum of 2 + 3 =", add(2, 3));
}
