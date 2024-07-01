
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const saveFormStateThrottled = throttle(() => {

  const emailValue = form.elements.email.value;
  const messageValue = form.elements.message.value;

  const formData = {
    email: emailValue,
    message: messageValue
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

function displaySavedState() {

  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    
    const formData = JSON.parse(savedState);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

function handleSubmit(event) {

  event.preventDefault();

  const emailValue = form.elements.email.value;
  const messageValue = form.elements.message.value;

  const formData = {
    email: emailValue,
    message: messageValue
  };
  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  form.reset();
}

form.addEventListener('input', saveFormStateThrottled);

form.addEventListener('submit', handleSubmit);

displaySavedState();