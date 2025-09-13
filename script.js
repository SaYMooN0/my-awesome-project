
const KEY='theme';
const btn=document.querySelector('.theme-toggle');
const prefersDark=matchMedia('(prefers-color-scheme: dark)').matches;
if(localStorage.getItem(KEY)==='dark'||(!localStorage.getItem(KEY)&&prefersDark)){document.body.classList.add('theme-dark');btn?.setAttribute('aria-pressed','true');}
btn?.addEventListener('click',()=>{const isDark=document.body.classList.toggle('theme-dark');btn.setAttribute('aria-pressed',String(isDark));localStorage.setItem(KEY,isDark?'dark':'light');});

const opener=document.getElementById('openDialog');
const dlg=document.getElementById('contactDialog');
const form=document.getElementById('contactForm');
let lastActive=null;
opener?.addEventListener('click',e=>{lastActive=document.activeElement;dlg?.showModal();});
form?.addEventListener('submit',e=>{
  let name=form.elements.namedItem('name');
  let email=form.elements.namedItem('email');
  let message=form.elements.namedItem('message');
  name.setCustomValidity('');
  email.setCustomValidity('');
  message.setCustomValidity('');
  if(!form.checkValidity()){
    if(name?.validity.valueMissing||name?.validity.tooShort){name.setCustomValidity('Введите имя не короче 2 символов');}
    if(email?.validity.typeMismatch||email?.validity.valueMissing){email.setCustomValidity('Введите корректный e-mail, например name@example.com');}
    if(message?.validity.valueMissing||message?.validity.tooShort){message.setCustomValidity('Введите сообщение не короче 10 символов');}
    form.reportValidity();
    [...form.elements].forEach(el=>{if(el.willValidate)el.toggleAttribute('aria-invalid',!el.checkValidity());});
    return;
  }
  e.preventDefault();
  document.getElementById('contactDialog')?.close('success');
  form.reset();
});
dlg?.addEventListener('close',()=>{lastActive?.focus();});
