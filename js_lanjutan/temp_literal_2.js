// tagged template

const nama = 'Riventus';
const umur = 24;
const email = 'ventusmn@gmail.com';

function coba(strings, ...values){
	/* cara 1 */
	// let result = '';
	// strings.forEach((str,index) => {
	// 	result += `${str}${values[index] || ''}`;
	// });

	// return result;

	/* cara reduce */
	return strings.reduce((result,str,index) => `${result}${str}<span class="hl">${values[index] || ''}</span>`,'');
}

const str = coba`Halo nama saya ${nama}, umur ${umur}, email ${email}`;

console.log(str);
document.body.innerHTML = str;




// utk sanitize , escape carachter
function sanitize (strings,...values){
	return DOMPurify.sanitize(aboutMe);
}


const data1 = 'HAHA';
const aboutMe `nice dude <p onload="alert('i hacked you. ehhee')">WEL WEL</p>`;

const html = sanitize`<h3>${data1}</h3><p>${aboutMe}</p>`;


// translation dan internationalization
const currency = i18n`Hai ${name}, you have ${amount}:c in your account bank.`;

// https://github.com/skolmer/es2015-i18n-tag




// Stlyle component seprti di react
const Title = styled.h1`
	font-size:1.5em;
	text-align:center;
	color:palevioletred;
`;
// https://www.styled-components.com/docs/basics#getting-started

