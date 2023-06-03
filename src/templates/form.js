const openForm = /*html*/ `
  <form action="/reviews" method="POST" class="review-form column stack-md">
    <input type="text" name="review" class="review-form__review-input" required/>
    <button type="submit" class="review-form__button">
      Submit a review
    </button>
  </form>
`;

const logInOptions = /*html*/ `
  <div class="log-in-option row stack-md">
    <form action="/log-in" method="get" class="log-in-option__button">
      <button type="submit">Log In</button>
    </form>
    <form action="/sign-up" method="get" class="log-in-option__button">
      <button type="submit">Sign Up</button>
    </form>
  </div>
`;

function form(isLoggedIn) {
  return isLoggedIn ? openForm : logInOptions;
}

// exports
module.exports = { form };
