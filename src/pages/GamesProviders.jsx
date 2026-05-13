import { useState } from "react";
import { useNavigate } from "react-router-dom";

const providers = [
  {
    id: "jdb",
    name: "JDB",
    logo: "/providers/jdb.png",
    games: 83,
  },
  {
    id: "pragmatic",
    name: "Pragmatic Play",
    logo: "/providers/pragmatic.png",
    games: 93,
  },
  {
    id: "pg",
    name: "PG Soft",
    logo: "/providers/pg-soft.png",
    games: 71,
  },
  {
    id: "relax",
    name: "Relax Gaming",
    logo: "/providers/relax.png",
    games: 71,
  },
  {
    id: "funta",
    name: "FunTa Gaming",
    logo: "/providers/funta.png",
    games: 53,
  },
  {
    id: "evoplay",
    name: "Evoplay",
    logo: "/providers/evoplay.png",
    games: 45,
  },
];

const categories = [
  {
    name: "LIVE CASINO",
    icon: "/category-icons/live-casino.png",
    bg: "from-[#efff8a] to-[#6dffd2]",
  },
  {
    name: "LOTTERY",
    icon: "/category-icons/lottery.png",
    bg: "from-[#ff9be2] to-[#ff55b4]",
  },
  {
    name: "SLOT",
    icon: "/category-icons/slot.png",
    bg: "from-[#c69aff] to-[#744dff]",
  },
  {
    name: "SPORT",
    icon: "/category-icons/sport.png",
    bg: "from-[#e5f4ff] to-[#8fc8ff]",
  },
  {
    name: "CHESS",
    icon: "/category-icons/chess.png",
    bg: "from-[#ffedaa] to-[#d9aa37]",
  },
  {
    name: "FISHING",
    icon: "/category-icons/fishing.png",
    bg: "from-[#9eeaff] to-[#4daeff]",
  },
  {
    name: "ANIMAL ATHLETICS",
    icon: "/category-icons/animal-athletics.png",
    bg: "from-[#ffd0a0] to-[#ff934d]",
  },
  {
    name: "E SPORT",
    icon: "/category-icons/e-sport.png",
    bg: "from-[#c89bff] to-[#8652ff]",
  },
];

const gameBase = [
  "/games/five-dragons.png",
  "/games/book-of-gold.png",
  "/games/bounty-hunter.png",
  "/games/guan-shi-huang.png",
  "/games/cowboy.png",
  "/games/crazy-doctor.png",
  "/games/angry-bear.png",
  "/games/game-01.png",
];

const providerGames = {
  jdb: [
    gameBase[2],
    gameBase[0],
    gameBase[4],
    gameBase[1],
    gameBase[6],
    gameBase[3],
    gameBase[5],
    gameBase[7],
  ],
  pragmatic: [
    gameBase[0],
    gameBase[1],
    gameBase[2],
    gameBase[3],
    gameBase[4],
    gameBase[5],
    gameBase[6],
    gameBase[7],
  ],
  pg: [
    gameBase[5],
    gameBase[6],
    gameBase[1],
    gameBase[7],
    gameBase[0],
    gameBase[2],
    gameBase[4],
    gameBase[3],
  ],
  relax: [
    gameBase[3],
    gameBase[4],
    gameBase[6],
    gameBase[0],
    gameBase[2],
    gameBase[7],
    gameBase[1],
    gameBase[5],
  ],
  funta: [
    gameBase[6],
    gameBase[5],
    gameBase[4],
    gameBase[3],
    gameBase[2],
    gameBase[1],
    gameBase[0],
    gameBase[7],
  ],
  evoplay: [
    gameBase[1],
    gameBase[3],
    gameBase[5],
    gameBase[7],
    gameBase[0],
    gameBase[2],
    gameBase[4],
    gameBase[6],
  ],
};

export default function GamesProviders() {
  const navigate = useNavigate();
  const [activeProvider, setActiveProvider] = useState("pg");

  const activeGames = providerGames[activeProvider] || providerGames.pragmatic;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#f4f1ff]">
      {/* Background */}
      <img
        src="/images/home-bg.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
        draggable="false"
      />

      {/* Left circle decoration */}
      <img
        src="/images/circle-glow.png"
        alt=""
        className="
          pointer-events-none
          absolute
          -left-[310px]
          top-1/2
          z-0
          w-[700px]
          -translate-y-1/2
          select-none
          opacity-90
          mix-blend-screen
        "
        draggable="false"
      />

      {/* Header */}
      <header
        className="
          absolute
          left-1/2
          top-[22px]
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          text-center
        ">
        <img
          src="/images/logo-api.png"
          alt="Api logo"
          className="
            mb-5
            h-[32px]
            w-auto
            object-contain
          "
          draggable="false"
        />

        <h1 className="text-[42px] font-extrabold leading-none tracking-[-0.04em] text-[#151630]">
          Games{" "}
          <span className="bg-gradient-to-r from-[#7138ff] to-[#4b8cff] bg-clip-text text-transparent">
            & Providers
          </span>
        </h1>

        <p className="mt-5 text-[17px] font-medium text-[#272650]/80">
          Explore our top game providers and their exciting games
        </p>
      </header>

      {/* Logout */}
      <button
        type="button"
        onClick={handleLogout}
        className="
          absolute
          right-[76px]
          top-[30px]
          z-30
          h-[36px]
          rounded-full
          bg-gradient-to-r
          from-[#a83dff]
          to-[#4a9cff]
          px-8
          text-[11px]
          font-extrabold
          uppercase
          text-white
          shadow-[0_12px_28px_rgba(103,85,255,0.35)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:scale-105
          active:scale-95
        ">
        Log out
      </button>

      {/* Content */}
      <section
        className="
          relative
          z-10
          grid
          h-screen
          w-full
          grid-cols-[448px_minmax(0,1fr)]
          gap-6
          px-[60px]
          pb-[24px]
          pt-[215px]
        ">
        {/* Provider */}
        <aside className="flex w-[448px] flex-col gap-[12px] pt-[0px]">
          {providers.map((provider, index) => {
            const isActive = activeProvider === provider.id;

            return (
              <button
                key={provider.id}
                type="button"
                onClick={() => setActiveProvider(provider.id)}
                style={{ animationDelay: `${index * 70}ms` }}
                className={`
                  provider-card
                  group
                  relative
                  flex
                  h-[100px]
                  items-center
                  justify-between
                  overflow-visible
                  rounded-[14px]
                  border
                  px-9
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:translate-x-2
                  hover:scale-[1.015]
                  ${
                    isActive
                      ? "active-provider-card w-[448px] border-[#9d63ff] bg-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-24px_40px_rgba(126,83,255,0.08),0_28px_80px_rgba(126,83,255,0.38)]"
                      : "w-[392px] border-white/70 bg-white/28 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_14px_35px_rgba(93,73,188,0.08)] hover:w-[420px] hover:border-[#b48cff] hover:bg-white/40"
                  }
                `}>
                {isActive && (
                  <>
                    <span
                      className="
                        provider-active-aura
                        pointer-events-none
                        absolute
                        -inset-[5px]
                        rounded-[18px]
                      "
                    />

                    <span
                      className="
                        provider-active-surface
                        pointer-events-none
                        absolute
                        inset-[2px]
                        rounded-[12px]
                      "
                    />

                    <span
                      className="
                        provider-active-border
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[14px]
                      "
                    />

                    <span
                      className="
                        provider-active-shine
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[14px]
                      "
                    />

                    <span
                      className="
                        provider-logo-halo
                        pointer-events-none
                        absolute
                        left-[28px]
                        top-1/2
                        h-[72px]
                        w-[190px]
                        -translate-y-1/2
                        rounded-full
                      "
                    />

                    <span
                      className="
                        provider-arrow
                        absolute
                        -left-[30px]
                        top-1/2
                        h-0
                        w-0
                        -translate-y-1/2
                        border-y-[10px]
                        border-l-[14px]
                        border-y-transparent
                        border-l-[#744cff]
                      "
                    />
                  </>
                )}

                <img
                  src={provider.logo}
                  alt={provider.name}
                  className={`
                    relative
                    z-10
                    object-contain
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? "active-provider-logo max-h-[64px] max-w-[216px] translate-x-1 scale-110"
                        : "max-h-[56px] max-w-[190px]"
                    }
                  `}
                  draggable="false"
                />

                <span
                  className={`
                    relative
                    z-10
                    rounded-full
                    border
                    px-5
                    py-2.5
                    text-[12px]
                    font-semibold
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? "active-provider-badge border-white/60 bg-gradient-to-r from-[#9d63ff] to-[#4b9bff] text-white shadow-[0_8px_22px_rgba(110,88,255,0.32)]"
                        : "border-white/70 bg-white/35 text-[#7c8199] group-hover:bg-white/50"
                    }
                  `}>
                  {provider.games} Games
                </span>
              </button>
            );
          })}
        </aside>

        {/* Right content */}
        <section className="flex min-w-0 flex-col overflow-visible">
          {/* Categories */}
          <div
            className="
              relative
              z-20
              mb-[18px]
              grid
              grid-cols-8
              gap-4
              overflow-visible
              pr-[42px]
              pt-[12px]
              pb-[10px]
            ">
            {categories.map((category, index) => (
              <button
                key={category.name}
                type="button"
                style={{ animationDelay: `${index * 60}ms` }}
                className="
                  category-card
                  group
                  relative
                  z-20
                  flex
                  overflow-visible
                  flex-col
                  items-center
                  gap-[10px]
                ">
                <span
                  className={`
                    category-glass-circle
                    relative
                    z-20
                    flex
                    h-[80px]
                    w-[80px]
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    bg-gradient-to-br
                    ${category.bg}
                    transition
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:scale-105
                  `}>
                  <span className="category-glass-refraction" />
                  <span className="category-glass-light" />
                  <span className="category-glass-frost" />

                  <img
                    src={category.icon}
                    alt={category.name}
                    className="
                      category-icon-image
                      relative
                      z-10
                      h-[56px]
                      w-[56px]
                      object-contain
                      transition
                      duration-300
                      group-hover:scale-110
                    "
                    draggable="false"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </span>

                <span className="text-center text-[14px] font-bold uppercase leading-tight text-[#1A1A3A]">
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          {/* Game rows */}
          <div
            key={activeProvider}
            className="games-panel relative min-h-0 flex-1 overflow-hidden">
            <GameRow
              images={activeGames}
              speed="24s"
              direction="right"
              rowIndex={1}
            />
            <GameRow
              images={[...activeGames].reverse()}
              speed="28s"
              direction="left"
              rowIndex={2}
            />
            <GameRow
              images={rotateGames(activeGames, 3)}
              speed="26s"
              direction="right"
              rowIndex={3}
            />
            <GameRow
              images={rotateGames(activeGames, 5).reverse()}
              speed="30s"
              direction="left"
              rowIndex={4}
            />
          </div>
        </section>
      </section>
    </main>
  );
}

function rotateGames(list, count) {
  const start = list.slice(count);
  const end = list.slice(0, count);
  return [...start, ...end];
}

function GameRow({ images, speed, direction = "left", rowIndex }) {
  const duplicatedImages = [...images, ...images];

  return (
    <div
      className="game-marquee-row mb-[12px]"
      style={{ animationDelay: `${rowIndex * 80}ms` }}>
      <div
        className={`
          game-marquee-track
          ${direction === "right" ? "game-marquee-right" : "game-marquee-left"}
        `}
        style={{ "--speed": speed }}>
        {duplicatedImages.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            className="
              group
              relative
              h-[132px]
              w-[246px]
              shrink-0
              overflow-hidden
              rounded-[10px]
              border
              border-white/80
              bg-white/30
              p-[3px]
              shadow-[0_14px_30px_rgba(67,43,150,0.16)]
              backdrop-blur-xl
              transition
              duration-300
              hover:-translate-y-1
              hover:scale-[1.03]
            ">
            <img
              src={image}
              alt=""
              className="block h-full w-full rounded-[8px] object-cover"
              draggable="false"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-t from-black/10 via-transparent to-white/20 opacity-0 transition group-hover:opacity-200" />
          </button>
        ))}
      </div>
    </div>
  );
}
