// Toggle menu mobile
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  if (toggle && navUl) {
    toggle.addEventListener('click', () => {
      navUl.classList.toggle('open');
    });
  }

  // Pencarian sederhana (tekan Enter)
  const searchInput = document.querySelector('.search-box input');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.value.trim() !== '') {
        alert('Mencari: "' + e.target.value + '"\n\nFitur pencarian demo — silakan integrasikan ke backend atau indeks statis.');
      }
    });
  }

  // Form kontak
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Terima kasih! Pesan Anda telah terkirim (demo).');
      contactForm.reset();
    });
  }

  // Form pencarian layanan
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

  // Animasi bar chart
  document.querySelectorAll('.bar').forEach(bar => {
    const h = bar.dataset.height || '50';
    bar.style.height = '0';
    setTimeout(() => { bar.style.height = h + '%'; }, 200);
  });
});
