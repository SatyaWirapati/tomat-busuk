import Hero from "../components/Hero"
import TopTenMovies from "../components/TopTenMovies"

const Home = () => {
    return (
        <div className="bg-gray-100 text-gray-900">
            <Hero/>
            <TopTenMovies/>

        </div>
    )
}

export default Home