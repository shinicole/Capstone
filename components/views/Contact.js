import html from "html-literal";

export default () => html`
<section id="Contact">


<h1> Contact Us</h1>

<p>Any questions or concerns? Get in touch with us and a representative will get back to you within 24-48 hours</p></>

<form action="/Contact">
<p>
<label for="Name">Enter full name:</label>
<input id="Name" type="text" placeholder="Enter Your Name">
</p>

<p>
<label for="email">Enter you email:</label>
<input type="email" placeholder="Enter Email Address" id="email">
</p>

<p>
<label for="message">Enter a message:</label>
<input type="message" placeholder="Type Your Message" id="message">
</p>

<p>hello</p>

<button>Submit</button>
</form>
`;
