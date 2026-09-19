// Indeks konten untuk pencarian
const SITE_INDEX = [
  // ===== BERITA =====
  {
    tipe: 'berita',
    judul: 'Pemprov NarzX Luncurkan Program Digitalisasi Layanan Publik',
    ringkas: 'Program ini bertujuan mempercepat proses administrasi dan meningkatkan kenyamanan masyarakat.',
    url: 'berita-detail.html?id=1',
    tanggal: '19 September 2026',
    ikon: '📰'
  },
  {
    tipe: 'berita',
    judul: 'Gubernur NarzX Resmikan Infrastruktur Jalan Baru',
    ringkas: 'Pembangunan jalan penghubung antar kecamatan resmi dibuka untuk umum.',
    url: 'berita-detail.html?id=2',
    tanggal: '18 September 2026',
    ikon: '🛣️'
  },
  {
    tipe: 'berita',
    judul: 'Festival Budaya NarzX 2026 Segera Digelar',
    ringkas: 'Acara tahunan ini akan menampilkan berbagai pertunjukan seni dan kuliner khas daerah.',
    url: 'berita-detail.html?id=3',
    tanggal: '17 September 2026',
    ikon: '🎭'
  },
  {
    tipe: 'berita',
    judul: 'Program Penghijauan di 35 Kecamatan Dimulai',
    ringkas: 'Pemprov menargetkan penanaman 100.000 pohon dalam satu tahun.',
    url: 'berita-detail.html?id=4',
    tanggal: '15 September 2026',
    ikon: '🌱'
  },
  {
    tipe: 'berita',
    judul: 'Pelatihan Digital Marketing untuk UMKM',
    ringkas: 'Ratusan pelaku UMKM mengikuti pelatihan untuk meningkatkan penjualan online.',
    url: 'berita-detail.html?id=5',
    tanggal: '14 September 2026',
    ikon: '💻'
  },
  {
    tipe: 'berita',
    judul: 'Puskesmas di NarzX Dapat Alat Kesehatan Baru',
    ringkas: 'Pemerintah Provinsi menyalurkan bantuan alat kesehatan ke 35 puskesmas.',
    url: 'berita-detail.html?id=6',
    tanggal: '12 September 2026',
    ikon: '🏥'
  },

  // ===== PENGUMUMAN =====
  {
    tipe: 'pengumuman',
    judul: 'Pendaftaran CPNS Provinsi NarzX 2026 Dibuka',
    ringkas: 'Pendaftaran dibuka 1–15 Oktober 2026 melalui portal SSCASN. Tersedia 250 formasi.',
    url: 'pengumuman.html',
    tanggal: '20 September 2026',
    ikon: '📢'
  },
  {
    tipe: 'pengumuman',
    judul: 'Pengumuman Libur Nasional dan Cuti Bersama',
    ringkas: 'Kantor Pemprov NarzX tutup pada tanggal 25–27 September 2026.',
    url: 'pengumuman.html',
    tanggal: '18 September 2026',
    ikon: '📢'
  },
  {
    tipe: 'pengumuman',
    judul: 'Hasil Seleksi Administrasi Beasiswa NarzX Cerdas 2026',
    ringkas: 'Daftar nama peserta yang lolos seleksi administrasi beasiswa.',
    url: 'pengumuman.html',
    tanggal: '16 September 2026',
    ikon: '📢'
  },
  {
    tipe: 'pengumuman',
    judul: 'Pemeliharaan Sistem Layanan Online',
    ringkas: 'Layanan online tidak dapat diakses sementara pada 22 September 2026 pukul 00.00–04.00 WIB.',
    url: 'pengumuman.html',
    tanggal: '15 September 2026',
    ikon: '📢'
  },

  // ===== AGENDA =====
  {
    tipe: 'agenda',
    judul: 'Rapat Koordinasi Perangkat Daerah',
    ringkas: '09.00 WIB - Gedung Serbaguna NarzX',
    url: 'agenda.html',
    tanggal: '22 September 2026',
    ikon: '📅'
  },
  {
    tipe: 'agenda',
    judul: 'Peluncuran Program Desa Digital',
    ringkas: '10.30 WIB - Kecamatan NarzX Timur',
    url: 'agenda.html',
    tanggal: '25 September 2026',
    ikon: '📅'
  },
  {
    tipe: 'agenda',
    judul: 'Musyawarah Perencanaan Pembangunan',
    ringkas: '08.00 WIB - Aula Pemprov NarzX',
    url: 'agenda.html',
    tanggal: '30 September 2026',
    ikon: '📅'
  },
  {
    tipe: 'agenda',
    judul: 'Festival Budaya NarzX 2026',
    ringkas: '15.00 WIB - Alun-Alun Kota NarzX',
    url: 'agenda.html',
    tanggal: '5 Oktober 2026',
    ikon: '📅'
  },

  // ===== LAYANAN =====
  {
    tipe: 'layanan',
    judul: 'Perizinan Online',
    ringkas: 'Ajukan perizinan usaha, bangunan, dan lainnya secara online.',
    url: 'layanan.html',
    tanggal: '',
    ikon: '📄'
  },
  {
    tipe: 'layanan',
    judul: 'Layanan Kesehatan',
    ringkas: 'Informasi puskesmas, rumah sakit, dan program kesehatan daerah.',
    url: 'layanan.html',
    tanggal: '',
    ikon: '🏥'
  },
  {
    tipe: 'layanan',
    judul: 'Layanan Pendidikan',
    ringkas: 'Beasiswa, bantuan sekolah, dan program pendidikan daerah.',
    url: 'layanan.html',
    tanggal: '',
    ikon: '🎓'
  },
  {
    tipe: 'layanan',
    judul: 'Infrastruktur',
    ringkas: 'Permohonan perbaikan jalan, jembatan, dan fasilitas umum.',
    url: 'layanan.html',
    tanggal: '',
    ikon: '🛣️'
  },
  {
    tipe: 'layanan',
    judul: 'Tenaga Kerja',
    ringkas: 'Kartu AK-1, pelatihan kerja, dan informasi lowongan kerja.',
    url: 'layanan.html',
    tanggal: '',
    ikon: '💼'
  },
  {
    tipe: 'layanan',
    judul: 'Data Statistik',
    ringkas: 'Data penduduk, ekonomi, dan statistik sektoral NarzX.',
    url: 'data.html',
    tanggal: '',
    ikon: '📊'
  },

  // ===== HALAMAN =====
  {
    tipe: 'halaman',
    judul: 'Profil Provinsi NarzX',
    ringkas: 'Visi, misi, dan sejarah Provinsi NarzX.',
    url: 'profil.html',
    tanggal: '',
    ikon: 'ℹ️'
  },
  {
    tipe: 'halaman',
    judul: 'Pemerintahan',
    ringkas: 'Struktur organisasi, pejabat, dinas, dan badan.',
    url: 'pemerintahan.html',
    tanggal: '',
    ikon: '🏛️'
  },
  {
    tipe: 'halaman',
    judul: 'PPID',
    ringkas: 'Pejabat Pengelola Informasi dan Dokumentasi Provinsi NarzX.',
    url: 'ppid.html',
    tanggal: '',
    ikon: '📁'
  },
  {
    tipe: 'halaman',
    judul: 'Kontak',
    ringkas: 'Alamat, telepon, email, dan formulir kontak.',
    url: 'kontak.html',
    tanggal: '',
    ikon: '✉️'
  }
];
