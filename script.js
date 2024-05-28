const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user-result img"),
  cpuResult = document.querySelector(".cpu-result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option-image");

// Selecting form the user
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    // Loop through each option image
    optionImages.forEach((image1, index1) => {
      // If the current index does not match the clicked index then remove the active class from other option image
      if (image != image1) {
        image1.classList.remove("active");
      }
    });

    // Adding a delay
    let time = setTimeout(() => {
      // save the user clicked image source and
      userResult.src = e.target.querySelector("img").src;

      let userGuess = "-1";
      if (userResult.src.includes("rock.svg")) {
        userGuess = "0";
        console.log(`User: ${userGuess}`); // Rock
      } else if (userResult.src.includes("paper.avif")) {
        userGuess = "1";
        console.log(`User: ${userGuess}`); // Paper
      } else if (userResult.src.includes("scissors.svg")) {
        userGuess = "2";
        console.log(`User: ${userGuess}`); // Scissors
      }

      // generate a random value from 0 to 2 to store the computer guess
      min = 0;
      max = 2;
      let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      let computerGuess = randomValue.toString();
      console.log(`Computer : ${computerGuess.toString()}`);

      // make an array to store the images
      let cpuImages = [
        "assets/rock.svg",
        "assets/paper.avif",
        "assets/scissors.svg",
      ];
      cpuResult.src = cpuImages[computerGuess];

      /*
        0: Rock
        1: Paper
        2: Scissors
    */

      // Creating all possible outcomes
      let outcomes = {
        // Draw match
        "00": "🤝 It's a draw! 🤝",
        11: "🤝 It's a draw! 🤝",
        22: "🤝 It's a draw! 🤝",

        // Rock (0) vs Scissors (2)
        "02": "🎊 Congrats, Champ! 🎊",
        20: "💪 Better luck next time! 😅",

        // Scissors (2) vs Paper (1)
        21: "🎊 Congrats, Champ! 🎊",
        12: "💪 Better luck next time! 😅",

        // Paper (1) vs Rock (0)
        10: "🎊 Congrats, Champ! 🎊",
        "01": "💪 Better luck next time! 😅",
      };
      let OutComeValue = outcomes[userGuess + computerGuess];

      // Displaying the results
      if (userGuess === computerGuess) {
        result.textContent = "🤝 It's a draw! 🤝";
      } else {
        result.textContent = OutComeValue;
      }
      console.log(`Winner: ${OutComeValue}`);
    }, (wait_time = 600));
  });
});
