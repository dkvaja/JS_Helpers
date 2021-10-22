
// Generate random Boolean value
const generateBoolean = () => Math.random() >= 0.5;

// Check if the provided day is a weekday
const isWeekDay = date => date.getDay() % 6 !== 0;

// Reverse a string
const reverseIt = str => str.split('').reverse().join('');

// Check is tab is active
const isBrowserTabInView = () => document.hidden;

// Check Odd or even
const isEven = num => num % 2 === 0;

// Get the time from Date
const getTimeFromDate = date => date.toTimeString().slice(0, 8);

// Truncate the number to a fixed decimal point 
const toFixed = (num, toBeFixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

// Check if an element is currently in focus
const elementIsInFocus = el => (el === document.activeElement);

// Check if the current user has touch events supported
const touchSupported = () => {
    ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
}

// Check if the current user is on an Apple device
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

// Scroll to top of the page
const goToTop = () => window.scrollTo(0, 0);

// Get average value of arguments
const average = (...args) => args.reduce((a, b) => a + b) / args.length;