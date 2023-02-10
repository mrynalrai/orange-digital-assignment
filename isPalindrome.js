/**
 * 20 minutes
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNumeric = new String("qwertyuiopasdfghjklzxcvbnm0123456789");	// To only consider alphanumeric characters as valid characters
	// Using two pointers to validate if the string is a palindrome
    let start=0;
    let end=s.length-1;
    s=s.toLowerCase();	// Assuming characters are case-insensitive
    while (start<end) {
        if (alphaNumeric.indexOf(s.charAt(start)) == -1) {
            start++;
        } else if (alphaNumeric.indexOf(s.charAt(end)) == -1) {
            end--;
        } else if (s.charAt(start) != s.charAt(end)) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;
};