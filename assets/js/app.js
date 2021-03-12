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

  const el_pages = {
    home: document.querySelector('[data-page="home"]'),
    kd: document.querySelector('[data-page="kd"]'),
    materi: document.querySelector('[data-page="materi"]'),
    tuts: document.querySelector('[data-page="tuts"]'),
    evaluasi: document.querySelector('[data-page="evaluasi"]'),
    credit: document.querySelector('[data-page="credit"]'),
    dev: document.querySelector('[data-page="dev"]'),
  };

  const el_pages_title = {
    home: "Komunikasi Dalam Jaringan",
    kd: "Kurikulum Dasar",
    materi: "Materi",
    tuts: "Tutorial",
    evaluasi: "Evaluasi",
    credit: "Kredit Aplikasi",
    dev: "Pengembang",
  };

  document.querySelectorAll('.menu-items-body').forEach(el => {
    el.addEventListener('click', ()=>{
      // console.log(el,'Clicked', el.dataset.target);

      document.querySelector('#app-title').innerText = el_pages_title[el.dataset.target];

      Object.keys(el_pages_title).forEach((el_page) => {

        if (el_page == el.dataset.target) {
          // console.log(el_pages[el_page]);

          // show page
          el_pages[el_page].classList.remove('dn');
          el_pages[el_page].classList.remove('down-to-up');

          el_pages[el_page].classList.add('db');
          el_pages[el_page].classList.add('down-to-up');
        } else {
          // hide page
          el_pages[el_page].classList.remove('db');
          el_pages[el_page].classList.add('dn');
        }
      });

    });
  });


  document.querySelectorAll('.btn-back').forEach(el => {
    el.addEventListener('click', ()=>{
      document.querySelector('#app-title').innerText = el_pages_title.home;

      Object.keys(el_pages_title).forEach((el_page) => {
        if (el_page == 'home') {
          // show page
          el_pages[el_page].classList.remove('dn');
          el_pages[el_page].classList.remove('up-to-down');

          el_pages[el_page].classList.add('db');
          el_pages[el_page].classList.add('up-to-down');
        } else {
          // hide page
          el_pages[el_page].classList.remove('db');
          el_pages[el_page].classList.add('dn');
        }
      });
    });
  });

  const kunci = [0, 1, 0, 1, 0];
  let jawaban = [null,null,null,null,null];
  const uj = [
    document.querySelectorAll('li[data-ujian="1"]'),
    document.querySelectorAll('li[data-ujian="2"]'),
    document.querySelectorAll('li[data-ujian="3"]'),
    document.querySelectorAll('li[data-ujian="4"]'),
    document.querySelectorAll('li[data-ujian="5"]'),
  ];


  uj.forEach((el_uj, i_uj) => {
    el_uj.forEach((el, index) => {
      el.addEventListener('click', () => {
        uj[i_uj].forEach(el2 => el2.style.color = "black");
        el.style.color = "blue";
        jawaban[i_uj] = index;
      });
    });
  });

  const el_nilai = document.querySelector('#nilai');
  el_nilai.addEventListener('click', () => {
    let nilai = 0;

    jawaban.forEach((el, index) => {
      if (el != null && el == kunci[index]) {
        nilai += 20;
      }
    })

    el_nilai.innerText = 'Nilai : ' + nilai;
  });

  document.querySelector('#ujian-back').addEventListener('click', () => {
    uj.forEach(el => {
      el.forEach(el2 => el2.style.color = "black");
    });

    jawaban = [null,null,null,null,null];
  });
})();
