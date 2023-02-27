import html from "html-literal";

export default () => html`
  <div class="contact-box">
    <h1>Contact Us</h1>
    <p>
      Questions or concerns? Contact us and a representative will get back to
      you as soon as possible.
    </p>

    <form>
      <p>
        <label for="Name"></label>
        <input id="Name" type="text" placeholder="Enter Your Name" size="40" />
      </p>
      <p>
        <label for="email"></label>
        <input
          type="email"
          placeholder="Enter Email Address"
          id="email"
          size="40"
        />
      </p>
      <p>
        <label for="message"></label>
        <textarea
          name="message"
          placeholder="Type Message"
          rows="5"
          cols="40"
        ></textarea>
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
  </div>
`;
