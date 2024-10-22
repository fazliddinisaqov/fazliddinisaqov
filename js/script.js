const body = document.querySelector('body')
const button = document.querySelector('button')
const more1 = document.querySelector('.more1')




function bos() {
    window.location.href = "https://www.instagram.com/fazliddinisaqov___/profilecard/?igsh=eTdjempmdzl2anVp";
};
function bos1() {
    window.location.href = "https://t.me/fazliddinisaqov";
};


function more() {
        if (more1.classList.contains('flex')) {
            more1.classList.remove('flex');
            more1.classList.add('block');
            more1.innerHTML ="<p>Men Isaqov Fazliddin Faxriddinovich  Uzbekistan respublikasi, Fargon viloyati, Bagdod tumanida, istihomad qilaman. Tugilgan yilim 2007-06-25. Qiziqishlari: futbol, kampiyuter oyinlari,kitob mutolaa qilish va .    Hozirda Web dasturlash boyicha Frontend dasturchiman.</p>";
          } else {
            more1.classList.remove('block');
            more1.classList.add('flex');
            more1.innerHTML = '';
          }
}



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

