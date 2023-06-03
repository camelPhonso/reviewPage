const signUpForm = /*html*/ `
  <form action="/sign-up" method="POST" class="join-form column stack-md">
    <label for="username" class="form-label">Enter your name<label>
    <input type="text" name="username" id="username" required/>

    <label for="relation" class="form-label">What is your relation to me?<label>
    <input type="text" name="relation" id="relation" required/>
    
    <label for="email" class="form-label">
    Leave your email address if you are happy to provide a reference in the future 
    <span class="optional">*this is optional</span>
    <label>
    <input type="email" name="email" id="email"/>

    <label for="password" class="form-label">Choose a password<label>
    <input type="email" name="email" id="email"/>
    
    <label for="relation" class="form-label">What is your relation to me?</label>
    <input type="text" name="relation" id="relation" required/>
    
    <button type="submit">Sign Up<button>
  </form>
  `;

const logInForm = /*html*/ `
  <form action="/log-in" method="POST" class="join-form column stack-md">
    <label for="username" class="form-label">Enter your name<label>
    <input type="text" name="username" id="username" required/>
    
    <label for="password" class="form-label">Enter your password<label>
    <input type="email" name="email" id="email"/>
    
    <button type="submit">Log In<button>
  </form>

`;

function join(isSigningUp) {
  return isSigningUp ? signUpForm : logInForm;
}

// exports
module.exports = { join };
