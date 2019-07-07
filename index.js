const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
	return tutorials.map(title => titleCase(title));
}

function titleCase(title) {
	const words = title.split(" ");
	const firstLetterUpped = [];

	for (let i = 0; i < words.length; i++) {
		const first = words[i][0].toUpperCase();
		const rest = words[i].substring(1);
		const whole = first.concat(rest);
		
		firstLetterUpped.push(whole);
	}
		
	return firstLetterUpped.join(" ");
}