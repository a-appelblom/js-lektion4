function checkLogic(logic) {
  if (!logic) {
    console.log("Your logic is nonexistent");
  } else if (typeof logic === "boolean" && logic) {
    console.log("Your logic is valid and true");
  } else if ((logic > 12 && logic < 20) || logic === "Teenager") {
    console.log("Your logic is a teen");
  } else if (logic.length) {
    console.log("Your logic is a string or array");
  } else {
    console.log("At least there is logic");
  }
}

// checkLogic(true);
// checkLogic("hej");
// checkLogic("Teenager");
