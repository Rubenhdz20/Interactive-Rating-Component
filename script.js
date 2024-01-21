function getRating() {
    let rateButtons = document.querySelectorAll(".rate-number");

    rateButtons.forEach(function(button) {
        button.addEventListener("click", function onClick(event) {
            var rate = event.target.value;
            console.log(rate);
            submitRating(rate);
        });
    });
}

function submitRating(rate) {
    let submitButton = document.querySelector("#rating-submit");
    submitButton.addEventListener('click', function() {
        var originalHtmlContainer = document.querySelector("#rating-state");
        var text = `You selected ${rate} out of 5`;
        var thankYouHtmlContainer = `
            <div id="thanks-state" class="thanks-container">
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

getRating();