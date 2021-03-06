import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<a
				href="https://www.linkedin.com/in/skcshubham/"
				target="_blank"
				rel="noreferrer"
			>
				<i className="icons fab fa-linkedin fa-2x"></i>
			</a>
			<a href="https://github.com/skcshubham" target="_blank" rel="noreferrer">
				<i className="icons fab fa-github fa-2x"></i>
			</a>
			<a href="mailto:mailtoshbhm@gmail.com" target="_blank" rel="noreferrer">
				<i className="icons fas fa-envelope fa-2x"></i>
			</a>
			<a href="tel:+916204872667" target="_blank" rel="noreferrer">
				<i className="icons fas fa-phone-square-alt fa-2x"></i>
			</a>
		</footer>
	);
};

export default Footer;
