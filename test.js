const { add } = require("./index");

// Very basic test runner
function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        console.error(`❌ Test failed: ${message}. Expected ${expected}, got ${actual}`);
        process.exit(1);
    } else {
        console.log(`✅ Test passed: ${message}`);
    }
}

// Tests
assertEqual(add(2, 3), 5, "2 + 3 should equal 5");
assertEqual(add(-1, 1), 0, "-1 + 1 should equal 0");
