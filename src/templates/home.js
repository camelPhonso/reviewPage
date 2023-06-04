function mapReviews(allReviews) {
  return allReviews.map((review) => {
    return /*html*/ `
    <div class="review-display">
      <div class="review-display__head">
        <p class="review-display__head--name">
          ${review.username}
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
  }).join('');
}

function homePage(allReviews, form) {
  return /*html*/ `
    <body>
      <section class="display-section">
        ${mapReviews(allReviews)}
      </section>
      <section class="form-section">
        ${form}
      </section>
    </body>
  `;
}

// exports
module.exports = { homePage };
