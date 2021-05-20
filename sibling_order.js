// Create 2 variables
// num_sibs for number of kids in your family
// what number in the order of kids you are
let num_kids = 2;
let order = 1;

// Set up switch structure
switch(true){
    case ((num_kids == 1) && (order == 1)):
        console.log("Yikes, you're a single child. Who's your therapist?");
    break;
    case ((num_kids == 2) && (order == 1)):
        console.log("What's the grossest thing you made your younger sibling do?");
    break;
    case ((num_kids == 2) && (order == 2)):
        console.log("Do you think you screamed more because you're the baby?");
    break;
    case ((num_kids == 3) && (order == 1)):
        console.log("You're the oldest. Did you feel like your little siblings should have been called a parent?");
    break;
    case ((num_kids == 3) && (order == 2)):
        console.log("A middle child. What was that? Oh, no one cares.");
    break;
    case ((num_kids == 3) && (order == 3)):
        console.log("Do your parents still call you the baby?");
    break;
    case ((num_kids == 4) && (order == 1)):
        console.log("You're the oldest. Did you feel like your little siblings should have been called a parent?");
    break;
    case ((num_kids == 4) && (order == 2)):
        console.log("Another middle child. What was that? Oh, no one cares.");
    break;
    case ((num_kids == 4) && (order == 3)):
        console.log("Oh, yikes. Who are you? The third? Oh, no one cares.");
    break;
    case ((num_kids == 4) && (order == 4)):
        console.log("The little, wittle babyyyy.");
    break;
}// Close block statement
