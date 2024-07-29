// Task 1: Leap Year Checker
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
  } else {
      return false;
  }
}

// Example usage:
console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2000)); // Output: true


// Task 2: Ticket Pricing
function getTicketPrice(age) {
  let price;
  
  if (age <= 12) {
      price = 10;
  } else if (age >= 13 && age <= 17) {
      price = 15;
  } else if (age >= 18) {
      price = 20;
  } else {
      price = 'Invalid age';
  }
  
  return price;
}

// Example usage:
console.log(getTicketPrice(10)); // Output: 10
console.log(getTicketPrice(15)); // Output: 15
console.log(getTicketPrice(30)); // Output: 20
console.log(getTicketPrice(-5)); // Output: Invalid age



// Recursion
// Task 1: Fibonacci Sequence

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55

// Task 2: Palindrome Checker

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    function checkPalindrome(start, end) {
        if (start >= end) {
            return true;
        }
        
        if (str[start] !== str[end]) {
            return false;
        }
        
        return checkPalindrome(start + 1, end - 1);
    }
    
    return checkPalindrome(0, str.length - 1);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false


// Task 3: Power Function

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

// Example usage:
console.log(power(2, 3)); // Output: 8
console.log(power(5, 0)); // Output: 1
console.log(power(3, 4)); // Output: 81


