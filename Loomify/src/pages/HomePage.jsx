import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



export const HomePage = () => {
  const languages = [
    "Hindi", "English", "Gujarati", "Marathi", "Telugu",
    "Kannada", "Malayalam", "Spanish", "Urdu", "Japanese"
  ];

  const categories = [
    { name: "Sad", img: "/Category1.png" },
    { name: "Happy", img: "/Category2.png" },
    { name: "Romance", img: "/Category3.png" },
    { name: "Friendship", img: "/Category4.png" },
    { name: "Breakup", img: "/Category5.png" },
  ];

  const topArtists = [
    { name: "Neha Kakkar", img: "/Artist1.png" },
    { name: "Badshah", img: "/Artist2.png" },
    { name: "Pritam", img: "/Artist3.png" },
    { name: "YoYo", img: "/Artist4.png" },
    { name: "Arijit Sing", img: "/Artist5.png" },
  ];

  const topSongs = [
    { title: "All time top 50", artist: "Arijit Sing", img: "/Top50_1.png" },
    { title: "Nonstop Garba", artist: "Geeta Rabari", img: "/Top50_2.png" },
    { title: "Punjab di Kudi", artist: "Sheehnaz Gill", img: "/Top50_3.png" },
    { title: "Maro Desh", artist: "Bhaisa Malpani", img: "/Top50_4.png" },
    { title: "Best of Nirvana", artist: "Nirvana", img: "/Top50_5.png" },
  ];
  const carouselImages = [
    { img: "/card1.png" },
    { img: "/card2.png" },
    { img: "/card3.png" },
    { img: "/card4.jpg" },
    { img: "/card5.png" },
    { img: "/card6.png" },
    { img: "/card7.png" }
  ];
  const [activeLang, setActiveLang] = useState("Hindi");

  return (
    <div className="relative flex flex-col min-h-screen">
    <main className="flex-grow bg-black p-4">
      {/* Swiper Carousel */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={7} // Ensuring multiple cards show up
        spaceBetween={30}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-20xl mx-auto mt-6"
      >
        {carouselImages.map((item, index) => (
          <SwiperSlide key={index} className="w- h-80 bg-gray-700 rounded-lg overflow-hidden">
            <img src={item.img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Most Viewed Languages Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-white font-semibold">Most Viewed Languages</h2>
          <Link to="/languages" className="hidden md:block text-gray-400 text-sm hover:text-white">Explore all &gt;</Link>
        </div>

        <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-6 py-2 rounded-full text-sm w-28 text-center transition-colors ${
                activeLang === lang ? "bg-gray-500 text-white" : "bg-[rgba(30,30,30,0.52)] text-gray-400"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

        {/* Categories Section */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl text-white font-semibold">Categories</h2>
            <Link to="/categories" className="hidden md:block text-gray-400 text-sm hover:text-white">
              Explore all &gt;
            </Link>
          </div>

          <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black">
            {categories.map((category, index) => (
              <div key={index} className="w-52 flex-shrink-0 text-center">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-50 h-50 rounded-lg object-cover"
                />
                <p className="text-white mt-2 text-left">{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Artists Section */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-lg text-white font-normal">Top Artists</h2>
            <Link to="/artists" className="hidden md:block text-gray-400 text-sm hover:text-white">
              Explore all &gt;
            </Link>
          </div>

          <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black">
            {topArtists.map((artist, index) => (
              <div key={index} className="w-48 flex-shrink-0 text-center">
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="w-48 h-48 rounded-full object-cover"
                />
                <p className="text-white mt-2">{artist.name}</p>
              </div>
            ))}
          </div>
        </div>

       {/* Top 50 Songs Section */}
       <div className="mt-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg text-white font-semibold">Top 50 Songs</h2>
            <Link to="/top50" className="hidden md:block text-gray-400 text-sm hover:text-white">
              Explore all &gt;
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-white">
            {topSongs.map((song, index) => (
              <div key={index} className="min-w-[200px] text-left">
                <img
                  src={song.img}
                  alt={song.title}
                  className="w-49 h-49 rounded-lg object-cover"
                />
                <p className="text-white mt-2 font-medium">{song.title}</p>
                <p className="text-gray-400 text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};