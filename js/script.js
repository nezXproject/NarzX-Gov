document.addEventListener('DOMContentLoaded', () => {

  // ============ MENU MOBILE ============
  const toggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  if (toggle && navUl) {
    toggle.addEventListener('click', () => navUl.classList.toggle('open'));
  }

  // ============ HIGHLIGHT ============
  function highlight(text, q) {
    if (!q) return text;
    const safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('(' + safe + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  // ============ PENCARIAN DROPDOWN ============
  const searchInput = document.querySelector('.search-box input');
  const searchResults = document.getElementById('searchResults');

  if (searchInput && searchResults && typeof SITE_INDEX !== 'undefined') {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      searchResults.innerHTML = '';

      if (q.length < 2) {
        searchResults.style.display = 'none';
        return;
      }

      const results = SITE_INDEX.filter(item =>
        item.judul.toLowerCase().includes(q) ||
        item.ringkas.toLowerCase().includes(q) ||
        item.tipe.toLowerCase().includes(q)
      );

      if (results.length === 0) {
        searchResults.innerHTML = `
          <div class="search-item">
            <div class="search-info">
              <strong>Tidak ditemukan</strong>
              <span>Tidak ada hasil untuk "${e.target.value}"</span>
            </div>
          </div>`;
        searchResults.style.display = 'block';
        return;
      }

      results.slice(0, 8).forEach(item => {
        const a = document.createElement('a');
        a.className = 'search-item';
        a.href = item.url;
        a.innerHTML = `
          <div class="search-icon">${item.ikon}</div>
          <div class="search-info">
            <strong>${highlight(item.judul, q)}</strong>
            <span>${item.tipe.toUpperCase()} • ${highlight(item.ringkas, q)}</span>
          </div>`;
        searchResults.appendChild(a);
      });

      if (results.length > 8) {
        const more = document.createElement('a');
        more.className = 'search-more';
        more.href = 'pencarian.html?q=' + encodeURIComponent(e.target.value.trim());
        more.textContent = `Lihat semua ${results.length} hasil →`;
        searchResults.appendChild(more);
      }

      searchResults.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-box')) {
        searchResults.style.display = 'none';
      }
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.value.trim() !== '') {
        window.location.href = 'pencarian.html?q=' + encodeURIComponent(e.target.value.trim());
      }
    });
  }

  // ============ HALAMAN PENCARIAN LENGKAP ============
  const fullSearchInput = document.getElementById('fullSearchInput');
  const fullSearchResults = document.getElementById('fullSearchResults');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (fullSearchInput && fullSearchResults && typeof SITE_INDEX !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    fullSearchInput.value = params.get('q') || '';

    let activeFilter = 'semua';

    function renderFullResults() {
      const q = fullSearchInput.value.trim().toLowerCase();
      fullSearchResults.innerHTML = '';

      const results = SITE_INDEX.filter(item => {
        const matchQ = q === '' ||
          item.judul.toLowerCase().includes(q) ||
          item.ringkas.toLowerCase().includes(q);
        const matchFilter = activeFilter === 'semua' || item.tipe === activeFilter;
        return matchQ && matchFilter;
      });

      const countEl = document.getElementById('resultCount');
      if (countEl) countEl.textContent = results.length + ' hasil ditemukan';

      if (results.length === 0) {
        fullSearchResults.innerHTML = `
          <div class="form-card" style="text-align:center;color:#666;grid-column:1/-1;">
            <div style="font-size:40px;margin-bottom:10px;">🔍</div>
            <p>Tidak ada hasil${q ? ` untuk "<strong>${q}</strong>"` : ''}.</p>
          </div>`;
        return;
      }

      results.forEach(item => {
        const a = document.createElement('a');
        a.className = 'card';
        a.href = item.url;
        a.style.textDecoration = 'none';
        a.innerHTML = `
          <div class="card-img" style="height:120px;font-size:30px;">${item.ikon}</div>
          <div class="card-body">
            <div class="date">${item.tipe.toUpperCase()}${item.tanggal ? ' • ' + item.tanggal : ''}</div>
            <h3>${highlight(item.judul, q)}</h3>
            <p>${highlight(item.ringkas, q)}</p>
          </div>`;
        fullSearchResults.appendChild(a);
      });
    }

    fullSearchInput.addEventListener('input', renderFullResults);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        renderFullResults();
      });
    });

    renderFullResults();
  }

  // ============ FORM KONTAK ============
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Terima kasih! Pesan Anda telah terkirim (demo).');
      contactForm.reset();
    });
  }

  // ============ FORM LAYANAN ============
  const layananForm = document.getElementById('layananForm');
  if (layananForm) {
    layananForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = document.getElementById('namaLayanan').value;
      const jenis = document.getElementById('jenisLayanan').value;
      const hasil = document.getElementById('hasilLayanan');
      if (hasil) {
        hasil.innerHTML = `
          <div class="form-card" style="margin-top:20px;border-left:4px solid #ffd700;">
            <h3 style="color:#0b3d2e;margin-bottom:8px;">Permohonan Diterima</h3>
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Jenis Layanan:</strong> ${jenis}</p>
            <p><strong>Status:</strong> Menunggu verifikasi (demo)</p>
            <p style="font-size:13px;color:#666;margin-top:10px;">Nomor Tiket: NX-${Date.now().toString().slice(-6)}</p>
          </div>`;
        layananForm.reset();
      }
    });
  }

  // ============ ANIMASI BAR CHART ============
  document.querySelectorAll('.bar').forEach(bar => {
    const h = bar.dataset.height || '50';
    bar.style.height = '0';
    setTimeout(() => { bar.style.height = h + '%'; }, 200);
  });

  // ============ DETAIL BERITA DINAMIS ============
  const beritaDetail = document.getElementById('beritaDetail');
  if (beritaDetail) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const beritaData = {
      '1': {
        judul: 'Pemprov NarzX Luncurkan Program Digitalisasi Layanan Publik',
        tanggal: '19 September 2026',
        ikon: '📰',
        isi: [
          'Pemerintah Provinsi NarzX resmi meluncurkan program digitalisasi layanan publik yang bertujuan mempercepat proses administrasi dan meningkatkan kenyamanan masyarakat. Program ini mencakup berbagai layanan, mulai dari perizinan, kesehatan, pendidikan, hingga layanan kependudukan.',
          'Gubernur NarzX dalam sambutannya menyampaikan bahwa digitalisasi merupakan langkah strategis untuk mewujudkan tata kelola pemerintahan yang transparan dan akuntabel. "Kami ingin masyarakat bisa mengakses layanan kapan saja dan di mana saja tanpa harus datang ke kantor," ujarnya.',
          'Program ini akan diimplementasikan secara bertahap di 35 kecamatan. Pada tahap pertama, sebanyak 10 kecamatan akan menjadi pilot project. Masyarakat dapat mengakses layanan melalui portal resmi NarzX Gov atau aplikasi mobile yang akan segera dirilis.',
          'Selain itu, Pemprov juga menyiapkan pelatihan bagi aparatur desa dan kecamatan agar dapat mendampingi masyarakat dalam menggunakan layanan digital. Dengan demikian, diharapkan tidak ada kesenjangan digital di wilayah NarzX.'
        ]
      },
      '2': {
        judul: 'Gubernur NarzX Resmikan Infrastruktur Jalan Baru',
        tanggal: '18 September 2026',
        ikon: '🛣️',
        isi: [
          'Gubernur NarzX resmi meresmikan jalan penghubung antar kecamatan yang telah lama ditunggu masyarakat. Jalan sepanjang 12 kilometer ini menghubungkan Kecamatan NarzX Timur dengan NarzX Selatan.',
          'Peresmian ditandai dengan penandatanganan prasasti dan pemotongan pita. Turut hadir dalam acara tersebut sejumlah pejabat daerah, tokoh masyarakat, dan warga setempat.',
          'Pembangunan jalan ini menelan anggaran sekitar Rp 45 miliar yang bersumber dari APBD Provinsi dan bantuan pusat. Diharapkan jalan ini dapat memperlancar distribusi hasil pertanian dan meningkatkan perekonomian warga.',
          'Pemerintah Provinsi berkomitmen untuk terus mengembangkan infrastruktur di seluruh wilayah NarzX secara merata dan berkelanjutan.'
        ]
      },
      '3': {
        judul: 'Festival Budaya NarzX 2026 Segera Digelar',
        tanggal: '17 September 2026',
        ikon: '🎭',
        isi: [
          'Festival Budaya NarzX 2026 akan digelar pada 5–7 Oktober 2026 di Alun-Alun Kota NarzX. Acara tahunan ini akan menampilkan berbagai pertunjukan seni, pameran kerajinan, dan kuliner khas daerah.',
          'Menurut Kepala Dinas Pariwisata, festival ini akan diikuti oleh 35 kecamatan dengan total peserta lebih dari 1.500 orang. Berbagai lomba tradisional juga akan digelar untuk memeriahkan acara.',
          'Festival ini diharapkan dapat meningkatkan kunjungan wisatawan dan memperkenalkan budaya NarzX ke tingkat nasional. Pemerintah Provinsi juga menyiapkan penginapan dan transportasi bagi pengunjung dari luar kota.'
        ]
      },
      '4': {
        judul: 'Program Penghijauan di 35 Kecamatan Dimulai',
        tanggal: '15 September 2026',
        ikon: '🌱',
        isi: [
          'Pemerintah Provinsi NarzX memulai program penghijauan serentak di 35 kecamatan. Program ini menargetkan penanaman 100.000 pohon dalam satu tahun.',
          'Jenis pohon yang ditanam meliputi mahoni, trembesi, dan berbagai tanaman buah seperti mangga, rambutan, dan durian. Selain itu, pohon bakau juga akan ditanam di kawasan pesisir.',
          'Program ini melibatkan pelajar, komunitas lingkungan, dan masyarakat umum. Diharapkan program ini dapat mengurangi emisi karbon dan memperbaiki kualitas udara di Provinsi NarzX.'
        ]
      },
      '5': {
        judul: 'Pelatihan Digital Marketing untuk UMKM',
        tanggal: '14 September 2026',
        ikon: '💻',
        isi: [
          'Ratusan pelaku UMKM di Provinsi NarzX mengikuti pelatihan digital marketing yang diselenggarakan oleh Dinas Koperasi dan UMKM. Pelatihan ini bertujuan meningkatkan penjualan produk UMKM melalui platform online.',
          'Materi pelatihan meliputi pembuatan konten, foto produk, pemasaran media sosial, dan penggunaan marketplace. Peserta juga dibimbing praktik langsung membuat toko online.',
          'Pemerintah Provinsi berkomitmen untuk terus mendampingi UMKM dalam bertransformasi digital. Diharapkan produk UMKM NarzX dapat bersaing di pasar nasional bahkan internasional.'
        ]
      },
      '6': {
        judul: 'Puskesmas di NarzX Dapat Alat Kesehatan Baru',
        tanggal: '12 September 2026',
        ikon: '🏥',
        isi: [
          'Pemerintah Provinsi NarzX menyalurkan bantuan alat kesehatan ke 35 puskesmas yang tersebar di seluruh kecamatan. Bantuan ini berupa alat pemeriksaan tekanan darah, alat USG, dan alat laboratorium sederhana.',
          'Kepala Dinas Kesehatan menyampaikan bahwa bantuan ini merupakan bagian dari program peningkatan kualitas layanan kesehatan dasar. Diharapkan masyarakat dapat memperoleh layanan kesehatan yang lebih baik.',
          'Selain bantuan alat, Pemprov juga mengadakan pelatihan bagi tenaga kesehatan di puskesmas agar dapat menggunakan peralatan baru dengan optimal.'
        ]
      }
    };

    const data = beritaData[id] || beritaData['1'];
    document.title = data.judul + ' - NarzX Gov';
    beritaDetail.innerHTML = `
      <div style="font-size:13px;color:#888;margin-bottom:8px;">${data.tanggal} | Oleh Admin NarzX Gov</div>
      <h1 style="color:#0b3d2e;font-size:26px;line-height:1.4;margin-bottom:16px;">${data.judul}</h1>
      <div style="height:240px;background:linear-gradient(135deg,#cbd5e1,#94a3b8);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:60px;margin-bottom:20px;">${data.ikon}</div>
      ${data.isi.map(p => `<p style="line-height:1.9;color:#444;margin-bottom:14px;">${p}</p>`).join('')}
      <div style="margin-top:24px;">
        <a href="berita.html" class="btn btn-outline">&larr; Kembali ke Berita</a>
      </div>`;
  }

});
