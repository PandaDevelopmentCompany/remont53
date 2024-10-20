const token = '7588717405:AAHbmVqvaFIPITgybmYZbH4Tyd4udaFqGeU';
const chatId = '746586393';
const URL_API = 'https://api.telegram.org/';

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', (event) => {
event.preventDefault();
const message = '' + messageInput.value + '\nИмя: ' + sendName.value + '\nНомер телефона: ' + sendTel.value + '\nСообщение от клиента: ' + messageInputpass.value;
if (message) {
axios.post(`${URL_API}bot${token}/sendMessage`, {
chat_id: chatId,
text: message,
})
.then(response => console.log(response), alert('Ваша заявка успешно отправлена!✅ Спасибо!'))
.catch(error => console.error(error));
}
});

