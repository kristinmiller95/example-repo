let guestList = []; // Create an empty array to store the guest names in

// Ask the user to input the names of people they would like to invite a dinner party.
// Use a while loop to collect guest names until the list has 10 names or the user cancels if they want less than 10 guests
while (guestList.length < 10) {
  // Prompt the user to enter a guest's name or cancel if they want less than 10 names
  let guestName = prompt(
    "Enter a guest's name (or press 'cancel' to finish): ",
  );

  // If the user cancels, stop collecting names
  if (guestName === null) {
    break; // Exit the loop if the user cancels
  }

  // Each name should be added to the guestList array
  guestList.push(guestName);
}

// Handling the 11th name
// Check if the guest list has exactly 10 names
if (guestList.length === 10) {
  // If true, ask the user if they want to replace someone on the list
  let replaceResponse = prompt(
    "You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list with the last person you entered? Yes or No?",
  );

  replaceResponse = replaceResponse.toLowerCase(); // Convert the response to lowercase to ensure that the program handles all variants of yes/no responses

  // Handling yes response - if the user enters "yes," ask them to enter the name of the person they want to replace.
  if (replaceResponse === "yes") {
    let nameToReplace;
    let index = -1;

    // Keep asking for a name until a valid one is entered so the user can still continue if they enter an invalid name
    while (index === -1) {
      nameToReplace = prompt(
        "Enter the name of the person you want to replace: ",
      );
      index = guestList.indexOf(nameToReplace); // Find the index of the name to replace

      // If the name isn't found, show an error message and re-prompt
      if (index === -1) {
        alert("Name not found in the guest list. Please try again.");
      }
    }

    // Prompt the user to enter the new guest's name
    let newGuest = prompt("Enter the new guest's name: ");
    guestList[index] = newGuest; // Replace with the new guest's name
  } else if (replaceResponse === "no") {
    // Do nothing; display final guest list
  } else {
    alert("That doesn't look right. Please enter 'yes' or 'no'."); // Show an error message for invalid input
  }
}

// Display the guest-list output on a single line with each name separated by a comma
let finalGuestList = guestList.join(", "); // Convert array to a comma-separated string using the join() function
console.log("Your final guest list: " + finalGuestList); // Display the final guest list in the console
