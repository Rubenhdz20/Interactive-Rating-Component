

function getRating() {
    var rateButton = document.getElementsByClassName("rate-number");
    var rate = "";
    for (var i = 0; i < rateButton.length; i++) {
      var button = rateButton[i];
      button.addEventListener("click", function onClick(event) {
        rate = event.target.value;
        console.log(rate);
        submitRating(rate);
      });
    }
}

function submitRating(rate) {
    let submitButton = document.querySelector("#rating-submit");
    submitButton.addEventListener('click', function(event) {
        let originalHtmlContainer = document.querySelector("#rating-state");
        let text = `You selected ${rate} out of 5`;
        let thankYouHtmlContainer =
        `<div id="thanks-state" class="thanks-container">
            <picture>
                <img class="thanks-img" src="./interactive-rating-component-main/images/illustration-thank-you.svg" alt="Thank you!">
            </picture>
            <p id="submit" class="btn-submit-thanks">${text}</p>
            <h1>Thank you!</h1>
            <p class="thanks-text">
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
            <button id="reload" type="button" class="appear" onClick="returnPage()">Reset</button>
        </div>`;
        originalHtmlContainer.innerHTML = thankYouHtmlContainer;
    });  

}

function returnPage() {
    let submitReset = document.querySelector("#reload");
    submitReset.addEventListener('click', function() {
        location.reload();
    });
}

console.log(getRating());

console.log(submitRating());

console.log(returnPage());



