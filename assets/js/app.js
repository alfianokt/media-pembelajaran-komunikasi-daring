(()=>{
  const emoji = {
    '📚': 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/books_1f4da.png',
    '📖' : 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/open-book_1f4d6.png',
    '👋' : 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/waving-hand_1f44b.png',
    '⌛' : 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/hourglass-done_231b.png',
    '📎' : 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/paperclip_1f4ce.png',
    '👨‍💻' : 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/man-technologist_1f468-200d-1f4bb.png',
  };

  document.querySelectorAll('.moji').forEach(el => {
    if (emoji[el.innerText]) {
      const img = new Image(64, 64);
      img.src = emoji[el.innerText];
      img.onload = () => {
        el.replaceWith(img);
      };
    };
  });

  document.querySelector('#menu-kd').addEventListener('click', ()=>{
    document.querySelector('#app-title').classList.remove('titlemation');


    document.querySelector('#page-home').classList.remove('db');
    document.querySelector('#page-home').classList.add('dn');

    document.querySelector('#page-kd').classList.remove('dn');
    document.querySelector('#page-kd').classList.add('db');

    document.querySelector('#page-kd').classList.remove('downup');
    document.querySelector('#page-kd').classList.add('downup');
  });


  document.querySelector('.btn-back').addEventListener('click', ()=>{
    document.querySelector('#app-title').innerText = 'Komunikasi Dalam Jaringan';

    document.querySelector('#page-home').classList.remove('dn');
    document.querySelector('#page-home').classList.add('db');

    document.querySelector('#page-kd').classList.remove('db');
    document.querySelector('#page-kd').classList.add('dn');

    document.querySelector('#page-home').classList.remove('updown');
    document.querySelector('#page-home').classList.add('updown');
  });
})();
