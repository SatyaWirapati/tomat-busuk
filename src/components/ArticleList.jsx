const ArticleList = () => {
  const articles = [
    {
      title: "James Gunn Incar Garap 2 Serial Spin-off Superman",
      category: "News",
      url: "https://www.cnnindonesia.com/hiburan/20250711230358-220-1249802/james-gunn-incar-garap-2-serial-spin-off-superman"
    },
    {
      title: "Sinopsis Chainsaw Man: Reze Arc The Movie Sudah Tayang di Bioskop",
      category: "News",
      url: "https://kumparan.com/berita-terkini/sinopsis-chainsaw-man-reze-arc-the-movie-sudah-tayang-di-bioskop-25vtszti0Uj"
    },
    {
      title: "Christopher Nolan’s The Odyssey: Everything We Know",
      category: "Exclusive",
      url: "https://www.vanityfair.com/hollywood/story/christopher-nolan-odyssey-trailer-leak?srsltid=AfmBOoqMeXSLBrA6YCnK8pNR40SM2EdwAauDW95oK0EkgqjIdeR8x64w"
    },
    {
      title: "Review Film Avatar: The Way of Water",
      category: "Review",
      url: "https://www.cnnindonesia.com/hiburan/20221216171459-220-888422/review-film-avatar-the-way-of-water"
    },
    {
      title: "The Conjuring: Last Rites Movie Review",
      category: "Review",
      url: "https://thecosmiccircus.com/the-conjuring-last-rites-movie-review/"
    },
    {
      title: "Sinopsis Tron: Ares, Kehadiran Jared Leto Picu Gejolak Dunia Manusia",
      category: "News",
      url: "https://www.cnnindonesia.com/hiburan/20251007202914-220-1282057/sinopsis-tron-ares-kehadiran-jared-leto-picu-gejolak-dunia-manusia"
    },
    {
      title: "Sinopsis Film Sore: Istri dari Masa Depan, Ceritakan Kisah Cinta Lintas Waktu",
      category: "News",
      url: "https://www.tempo.co/teroka/sinopsis-film-sore-istri-dari-masa-depan-ceritakan-kisah-cinta-lintas-waktu-1835315"
    },
    {
      title: "Black Phone 2, Teror Dari Masa Lalu Yang Kembali Lagi!",
      category: "News",
      url: "https://www.tix.id/black-phone-2-teror-dari-masa-lalu-yang-kembali-lagi/"
    }
  ];

  return (
    <div className="p-4 w-full flex flex-col h-full">
      <h3 className="text-xl font-bold mb-4 text-red-700">
        📰 Artikel Terbaru
      </h3>

      {/* Scroll hanya aktif jika konten melebihi tinggi container */}
      <div className="flex-grow overflow-y-auto space-y-3 pr-2">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-gray-300 pb-3 text-sm hover:text-red-700 transition"
          >
            <span className="text-xs font-semibold uppercase text-gray-500 mr-2">
              [{article.category}]
            </span>
            {article.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
