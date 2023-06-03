function mapReviews(allReviews) {
  return allReviews.map((review) => {
    return /*html*/ `
    <div class="review-display">
      <div class="review-display__head">
        <p class="review-display__head--name">
          ${review.user}
        </p>
        <p class="review-display__head--relation">
          ${review.relation}
        </p>
      </div>
      <div class="review-display__body">
        ${review.content}
      </div>
    </div>
  `;
  });
}

function homePage(allReviews, form) {
  return /*html*/ `
    <body>
      <section class="review-board">
        ${mapReviews(allReviews)}
      </section>
      <section class="submission-form">
        ${form}
      </section>
    </body>
  `;
}

// exports
module.exports = { homePage };
