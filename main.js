let i = 0;
const paragraphe = document.getElementById('container_writer');

const typeWriter = () => {

	const texte = document.getElementById("phrase").value;
	const texteArray = texte.split("");


	paragraphe.insertAdjacentHTML('beforeend',texteArray[i]);
	i++;

	if(i >= texteArray.length)
	{
		clearInterval(interval);
		i =0;
	}
};


document.getElementById("submit").addEventListener('click', function() {paragraphe.innerHTML = ""});
document.getElementById("submit").addEventListener('click', function() {interval = setInterval(typeWriter,80)});