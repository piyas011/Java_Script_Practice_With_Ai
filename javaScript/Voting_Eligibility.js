// Voting Eligibility
// Check whether a person is eligible to vote

const eligibleAge = 17;
let isEligible;

if (eligibleAge < 18) {
  isEligible = "Not Eligible to Vote";
} else {
  isEligible = "Eligible to Vote ";
}
console.log(isEligible);
