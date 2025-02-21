// variable declaration
const form = document.getElementById("form");
const quoteOption = document.getElementById("quote-option");
const quoteSearchInput = document.getElementById("quote-search");

// display found result
const quoteImage = document.getElementById("quote-image");
const quoteTitle = document.getElementById("quote-title");
const quoteDescription = document.getElementById("quote-description");

// error message
const errorMessage = document.getElementById("error-message");

// add onchange event to the select option input
quoteOption.addEventListener("change", handleSelectQuoteOption);

// function to check whether user selects id or title option
function handleSelectQuoteOption() {
  let option = quoteOption.value;

  //   use switch case to check whether user wanna search by id or title
  try {
    switch (option) {
      case "id":
        quoteSearchInput.disabled = false;
        quoteSearchInput.type = "number";
        break;
      case "title":
        quoteSearchInput.disabled = false;
        quoteSearchInput.type = "text";
        break;
      default:
        quoteSearchInput.disabled = true;
        break;
    }
  } finally {
    quoteSearchInput.value = "";
    errorMessage.innerHTML = "";
  }
}

// add a submit event to the form
form.addEventListener("submit", handleFormSubmit);

// function to get value from input field
function handleFormSubmit(event) {
  event.preventDefault();
  let option = quoteSearchInput.value;

  try {
    if (option === "1" || option.toLowerCase().trim() === "it's okay") {
      handleDisplayMatchedResult(
        "https://i.pinimg.com/736x/37/24/6b/37246b8f72d529fee5978ec544d0719c.jpg",
        "It's okay",
        "It's okay if you don't know waht it will look like at the TOP. Take it ONE STEP at a time."
      );
    } else if (
      option === "2" ||
      option.toLowerCase().trim() === "keep moving forward"
    ) {
      handleDisplayMatchedResult(
        "https://i.pinimg.com/736x/f7/c6/c0/f7c6c0e72102e339971675e234c2f606.jpg",
        "Keep Moving Forward",
        "FOCUS on the step in FRONT of you, not the WHOLE STAIRCASE."
      );
    } else if (
      option === "3" ||
      option.toLowerCase().trim() === "unplanned is not always bad."
    ) {
      handleDisplayMatchedResult(
        "https://i.pinimg.com/736x/83/90/ad/8390adc239a9377a9f019d0d7adf17b4.jpg",
        "Unplanned is not always bad.",
        "Things will not always go as planned, but even the unplanned can be beautiful."
      );
    } else {
      handleDisplayMatchedResult("", "", "");
      // throw error when there is no matched result
      throw new Error("* You're looking for not found result.");
    }
  } catch (err) {
    errorMessage.innerHTML = err.message;
  }
}

// display result based on condition function
function handleDisplayMatchedResult(imageUrl, title, desc) {
  quoteImage.src = imageUrl;
  quoteTitle.innerHTML = title;
  quoteDescription.innerHTML = desc;
}
