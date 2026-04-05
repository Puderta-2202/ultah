import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Heart,
  Sparkles,
  Cake,
  Gift,
  PartyPopper,
  Play,
  Music,
  VolumeX,
  ChevronLeft, // Tambahan untuk panah kiri
  ChevronRight, // Tambahan untuk panah kanan
} from "lucide-react";

export default function App() {
  // State bawaan Anda
  const [showConfetti, setShowConfetti] = useState(false);

  // State untuk Welcome Screen & Audio
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // === STATE UNTUK HALAMAN SCRAPBOOK ===
  const [currentPage, setCurrentPage] = useState(0);

  // Ref untuk mengontrol tag <audio> bawaan HTML
  const audioRef = useRef<HTMLAudioElement>(null);

  // Fungsi untuk memulai website & musik
  const handleStart = () => {
    setHasStarted(true);
    setShowConfetti(true); // Memanggil konfeti setelah tombol diklik

    // Mulai memutar musik saat tombol kejutan diklik
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.log("Gagal memutar audio:", err));
      setIsPlaying(true);
    }
  };

  // DAFTAR MEDIA LOKAL
  const mediaItems = [
    { type: "image", url: "/assets/images/1.jpeg", alt: "First Date" },
    { type: "video", url: "/assets/video/1.mp4", alt: "Momen Spesial Ultah" },
    { type: "image", url: "/assets/images/2.jpeg", alt: "Kenangan 2" },
    { type: "video", url: "/assets/video/3.mp4", alt: "Momen Spesial Ultah" },
    { type: "image", url: "/assets/images/3.jpeg", alt: "Kenangan 3" },
    { type: "video", url: "/assets/video/2.mp4", alt: "Berbagi Bersama" },
    { type: "image", url: "/assets/images/4.jpeg", alt: "Kenangan 4" },
    { type: "video", url: "/assets/video/4.mp4", alt: "Berbagi Bersama" },
    { type: "image", url: "/assets/images/5.jpeg", alt: "Kenangan 5" },
    { type: "video", url: "/assets/video/5.mp4", alt: "Berbagi Bersama" },
    { type: "image", url: "/assets/images/6.jpeg", alt: "Kenangan 6" },
    { type: "image", url: "/assets/images/7.jpeg", alt: "Kenangan 7" },
    { type: "video", url: "/assets/video/6.mp4", alt: "Berbagi Bersama" },
    { type: "image", url: "/assets/images/8.jpeg", alt: "Kenangan 8" },
    { type: "image", url: "/assets/images/9.jpeg", alt: "Kenangan 9" },
    { type: "video", url: "/assets/video/7.mp4", alt: "Berbagi Bersama" },
    { type: "image", url: "/assets/images/10.jpeg", alt: "Kenangan 10" },
    { type: "image", url: "/assets/images/11.jpeg", alt: "Kenangan 11" },
    { type: "image", url: "/assets/images/12.jpeg", alt: "Kenangan 12" },
    { type: "video", url: "/assets/video/8.mp4", alt: "Berbagi Bersama" },
    { type: "image", url: "/assets/images/13.jpeg", alt: "Kenangan 13" },
    { type: "image", url: "/assets/images/14.jpeg", alt: "Kenangan 14" },
    { type: "image", url: "/assets/images/15.jpeg", alt: "Kenangan 15" },
    { type: "image", url: "/assets/images/16.jpeg", alt: "Kenangan 16" },
    { type: "image", url: "/assets/images/17.jpeg", alt: "Kenangan 17" },
    { type: "image", url: "/assets/images/18.jpeg", alt: "Kenangan 18" },
    { type: "image", url: "/assets/images/19.jpeg", alt: "Kenangan 19" },
    { type: "image", url: "/assets/images/20.jpeg", alt: "Kenangan 20" },
    { type: "image", url: "/assets/images/21.jpeg", alt: "Kenangan 21" },
    { type: "image", url: "/assets/images/22.jpeg", alt: "Kenangan 22" },
    { type: "image", url: "/assets/images/23.jpeg", alt: "Kenangan 23" },
    { type: "image", url: "/assets/images/24.jpeg", alt: "Kenangan 24" },
  ];

  // === ISI HALAMAN SCRAPBOOK ===
  // Anda bisa mengubah atau menambah halaman di sini
  const scrapbookPages = [
    {
      title: "10 April 2026 🎉🎂",
      text1:
        "Dii harii yangg istimewaa inii, akuu inginn kamuu tauu bahwaa kamuu begituu berartinyaa didalamm hidupkuu. Setiapp detikk bersamaa kamuu adalahhh hadiahh terindahh yangg pernahh akuu terimaa. Senyumann yangg kamuu berikann ialahh cahayaaa yangg menerangii harikuu, tawaa yangg kamuu berikann ialah musikk termerduu di telingakuu.",
      text2:
        "Semogaa setiapp langkahh yangg kamuu langkahkann selaluu diberkatii, semuaa impiann kamuu menjadii kenyataann, dan setiapp harii dalamm hidupmuu dipenuhii dengann kebahagiaann yangg takk terhinggaa. Makasiii telahh lahirr kee duniaa inii dann menjadii bagiann terpentingg dalamm hidupkuu. Happy Birthdayy, Sayanggg💕💕! Lovee youuu ✨❤️",
    },
    {
      title: "📸 🎞️ 💕",
      text1:
        "Mengingatt kembalii harii-harii yangg sudahh kitaa laluii selaluu membuatkuu tersenyumm sendiriii. Ndaa pernahh terbayangkann sebelumnyaa bahwaa kamuuu akann jadii bagiann terpentingg dalamm ceritaa hidupkuu.",
      text2:
        "Melewatii berbagaii harii bersamaa kamuu, dengann segalaa candaan, tawaa, sedihh, dann hall lainnyaa, membuatkuu sadarr bahwaa akuu takk inginn melakukann inii semuaa dengann orangg lainn selainn kamuu. 🧸💕",
    },
    {
      title: "🎂 🎈 🕊️",
      text1:
        "Semogaa dii usiaa ke-22 iniii, kamuu selaluu dikelilingii kebaikann, selaluu diberii kesehatann, dann dilancarkann rezekinyaa. Tetaplahh menjadii diriii kamuu yangg luar biasaa dann membanggakann.",
      text2:
        "Kejarlahh semuaa mimpii kamuu, dan ingatlahh bahwaa akuu akann selaluu adaa disinii dan menjadii tempatt kamuu pulang saatt kamuu lelahh. I lovee youu so much! 🎂🎉",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden relative bg-black">
      {/* Element Audio Background (Lokal MP3) */}
      <audio ref={audioRef} loop>
        <source src="/assets/music/Euphoria.mp3" type="audio/mpeg" />
      </audio>

      {/* --- WELCOME SCREEN OVERLAY --- */}
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-pink-600 via-purple-700 to-blue-800 text-white p-6 text-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-md"
            >
              <Heart
                className="mx-auto mb-6 text-pink-300 animate-pulse"
                size={60}
                fill="currentColor"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hai Sayanggg... ❤️
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-8 leading-relaxed">
                "Sebelumm kamuu melihatt surprisee yangg akuu berii, akuu
                inginnn kamuuu tahuuu bahwaaa setiappp detikkk bersamamuuu
                adalahhh anugerahhh terindahhh. Selamattt datanggg dii ruangg
                kecilll penuhh kenangannn kitaa."
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:bg-pink-50 transition-colors flex items-center gap-2 mx-auto"
              >
                Please Open My Heart <Heart color="red" size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- KONTEN UTAMA WEBSITE --- */}
      {hasStarted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Background Media Slideshow */}
          <div className="absolute inset-0 z-0">
            {mediaItems.map((media, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 4,
                  delay: index * 4,
                  repeat: Infinity,
                  repeatDelay: (mediaItems.length - 1) * 4,
                }}
              >
                {media.type === "video" ? (
                  <video
                    src={media.url}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover grayscale brightness-50"
                  />
                ) : (
                  <ImageWithFallback
                    src={media.url}
                    alt={media.alt}
                    className="w-full h-full object-cover grayscale"
                  />
                )}
              </motion.div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-blue-900/40" />
          </div>

          {/* Animated floating elements */}
          {showConfetti && (
            <>
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute z-20"
                  initial={{
                    y: -100,
                    x: Math.random() * window.innerWidth,
                    opacity: 0,
                  }}
                  animate={{
                    y: window.innerHeight + 100,
                    opacity: [0, 1, 1, 0],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "linear",
                  }}
                >
                  {i % 5 === 0 && (
                    <Heart
                      className="text-pink-300"
                      size={20 + Math.random() * 10}
                    />
                  )}
                  {i % 5 === 1 && (
                    <Sparkles
                      className="text-yellow-300"
                      size={20 + Math.random() * 10}
                    />
                  )}
                  {i % 5 === 2 && (
                    <Cake
                      className="text-purple-300"
                      size={20 + Math.random() * 10}
                    />
                  )}
                  {i % 5 === 3 && (
                    <Gift
                      className="text-blue-300"
                      size={20 + Math.random() * 10}
                    />
                  )}
                  {i % 5 === 4 && (
                    <PartyPopper
                      className="text-pink-300"
                      size={20 + Math.random() * 10}
                    />
                  )}
                </motion.div>
              ))}
            </>
          )}

          <div className="container mx-auto px-4 py-8 relative z-10 h-full overflow-y-auto overflow-x-hidden hilangkan-scrollbar">
            {/* Main Heading */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1,
              }}
              className="text-center mb-12 mt-10"
            >
              <motion.h1
                className="text-6xl md:text-8xl mb-4 inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                🎉🎂🎈
              </motion.h1>
              <motion.h2
                className="text-4xl md:text-6xl mb-2 text-white drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Selamatt Ulangg Tahunn Sayangkuuu! 💕
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-pink-200 drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Untukk seseorangg yangg sangatt istimewaa dii hatikuuu ✨
              </motion.p>
            </motion.div>

            {/* Scrapbook Message Card MULTI HALAMAN */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="max-w-2xl mx-auto mb-16 relative"
            >
              {/* Emojis Lucu di Atas Card */}
              <div className="text-center text-4xl mb-6 space-x-3 drop-shadow-md">
                <span>🥺</span>
                <span>💝</span>
                <span>👩‍❤️‍👨</span>
                <span>🧸</span>
                <span>🎀</span>
              </div>

              <div className="bg-[#fdfcf5] p-10 rounded-xl shadow-2xl relative border-2 border-[#e9e4d0] rotate-[-1deg] min-h-[400px] flex flex-col justify-center">
                {/* Efek Torn Edges (Sobekan Kertas) */}
                <div className="absolute top-0 left-0 w-full h-3 bg-paper-edge-top bg-repeat-x -mt-1" />

                {/* Selotip Kiri Atas (CSS Murni) */}
                <div
                  className="absolute -top-3 -left-4 w-20 h-6 bg-pink-200/80 backdrop-blur-sm rotate-[-15deg] z-20 shadow-sm"
                  style={{
                    clipPath: "polygon(5% 0%, 100% 2%, 95% 100%, 0% 98%)",
                  }}
                />

                {/* Selotip Kanan Bawah (CSS Murni) */}
                <div
                  className="absolute -bottom-3 -right-4 w-20 h-6 bg-blue-200/80 backdrop-blur-sm rotate-[15deg] z-20 shadow-sm"
                  style={{
                    clipPath: "polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)",
                  }}
                />

                {/* Ikon Scrapbook (Bintang) */}
                <div className="absolute top-4 right-4 opacity-70">
                  <Sparkles className="text-[#a8dadc]" size={28} />
                </div>

                {/* Tombol Navigasi Kiri (Prev) */}
                {currentPage > 0 && (
                  <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-pink-400 hover:text-pink-600 transition-colors z-30"
                  >
                    <ChevronLeft size={36} />
                  </button>
                )}

                {/* Tombol Navigasi Kanan (Next) */}
                {currentPage < scrapbookPages.length - 1 && (
                  <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-pink-400 hover:text-pink-600 transition-colors z-30"
                  >
                    <ChevronRight size={36} />
                  </button>
                )}

                {/* Teks Konten dengan Animasi Transisi */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="px-8"
                  >
                    <h4 className="font-handwritten text-3xl font-bold text-[#1d3557] mb-6 text-center drop-shadow-sm">
                      {scrapbookPages[currentPage].title}
                    </h4>

                    <p className="font-handwritten text-xl text-gray-800 leading-relaxed mb-6 text-center">
                      {scrapbookPages[currentPage].text1}
                    </p>
                    <p className="font-handwritten text-xl text-gray-800 leading-relaxed text-center">
                      {scrapbookPages[currentPage].text2}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Indikator Halaman (Titik-titik di bawah tulisan) */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {scrapbookPages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${currentPage === index ? "bg-pink-400 w-4" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Media Gallery Thumbnails */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.h3
                className="text-3xl md:text-4xl text-center mb-8 text-white drop-shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Kenangan Indah Kita Bersama 💕📸
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                {mediaItems.map((media, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      delay: 1.5 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                      transition: { duration: 0.3 },
                    }}
                    className="relative overflow-hidden rounded-xl shadow-lg bg-white p-2"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                      {media.type === "video" ? (
                        <video
                          src={media.url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      ) : (
                        <ImageWithFallback
                          src={media.url}
                          alt={media.alt}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      )}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent flex items-center justify-center"
                      >
                        {media.type === "video" ? (
                          <Play className="text-white fill-white" size={24} />
                        ) : (
                          <Heart className="text-white fill-white" size={24} />
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="text-center mt-16 mb-8"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-5xl mb-4"
              >
                💝
              </motion.div>
              <p className="text-2xl text-white drop-shadow-lg mb-2">
                Akuu beruntungg memilikimuu dalamm hidupkuu
              </p>
              <p className="text-xl text-pink-200 drop-shadow-md">
                Happyy Birthdayy, my lovee..! 🎊💕
              </p>
            </motion.div>
          </div>

          {/* Tombol Kontrol Musik Floating */}
          <button
            onClick={() => {
              if (isPlaying) {
                audioRef.current?.pause();
              } else {
                audioRef.current?.play();
              }
              setIsPlaying(!isPlaying);
            }}
            className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-full text-white shadow-2xl hover:bg-white/20 transition-all"
          >
            {isPlaying ? <Music className="animate-bounce" /> : <VolumeX />}
          </button>
        </motion.div>
      )}
    </div>
  );
}
