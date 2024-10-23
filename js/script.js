const body = document.querySelector('body')
const button = document.querySelector('button')




function bos() {
    window.location.href = "https://www.instagram.com/fazliddinisaqov___/profilecard/?igsh=eTdjempmdzl2anVp";
};
function bos1() {
    window.location.href = "https://t.me/fazliddinisaqov";
};






  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formani yuborishning standart usulini to'xtatish
  
    // Formadagi qiymatlarni olish
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    // Konsolga chiqarish (ma'lumotlarni olish)
    console.log('Ism:', name);
    console.log('Email:', email);
    console.log('Telefon raqami:', phone);
    console.log('Xabar:', message);
  
    // Formani tozalash va yana yashirish
    document.getElementById('contactForm').reset();
    document.getElementById('formContainer').style.display = 'none';
  });
  function safari() {
    window.location.href = "https://fazliddinisaqov.github.io/safari/";
};

