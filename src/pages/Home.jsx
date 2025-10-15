import SlideShow from "../components/Slideshow"
import ArticleList from "../components/ArticleList"
const Home = () => {
    return (
        <div className="bg-gray-100 text-gray-900">

            {/* ---------------- BAGIAN UTAMA: SLIDESHOW DAN ARTIKEL ---------------- */}
            <div className="p-4 md:p-8">

                {/* Flex Container Utama: 
              - items-stretch: Memastikan item anak merentang tingginya.
          */}
                <div className="flex flex-col md:flex-row md:space-x-6 md:items-stretch">

                    {/* KOLOM ARTIKEL / SIDEBAR (1/3 Lebar di Desktop) */}
                    {/* Tambahkan flex-grow untuk memastikan elemen ini mengisi sisa ruang vertikal 
                 di desktop, didukung oleh item-stretch pada parent.
                 bg-white dan rounded-lg membuat sidebar terlihat jelas merentang. */}
                    <div className="md:w-1/3 order-2 md:order-1 mb-6 md:mb-0 bg-white rounded-lg shadow-md flex">
                        {/* Wrap ArticleList di dalam div yang fleksibel untuk mengisi sisa tinggi */}
                        <ArticleList />
                    </div>

                    {/* KOLOM SLIDESHOW (2/3 Lebar di Desktop) */}
                    <div className="md:w-2/3 order-1 md:order-2">
                        {/* TrailerSlideshow menentukan tinggi (h-[250px] md:h-[400px]), 
                      yang akan diambil oleh parent (flex container). */}
                        <SlideShow/>
                    </div>

                </div>

            </div>

            {/* ... (Konten lainnya) ... */}
        </div>
    )
}

export default Home