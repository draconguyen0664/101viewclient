import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigate("/games-providers");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f1ff]">
      {/* Background */}
      <img
        src="/images/login-bg.png"
        alt="Login background"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
        draggable="false"
      />

      {/* Circle glow */}
      <img
        src="/images/circle-glow.png"
        alt="Circle glow"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-10
          w-[min(56vw,860px)]
          min-w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          select-none
          mix-blend-screen
        "
        draggable="false"
      />

      {/* Content */}
      <section className="relative z-20 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="flex w-full max-w-[520px] flex-col items-center text-center">
          {/* Logo */}
          <img
            src="/images/logo-api.png"
            alt="Api logo"
            className="mb-6 h-[clamp(46px,5vw,70px)] w-auto object-contain"
            draggable="false"
          />

          {/* Title */}
          <h1 className="text-[clamp(48px,7vw,76px)] font-extrabold leading-none tracking-[-0.04em] text-[#151630]">
            Wel
            <span className="bg-gradient-to-r from-[#7138ff] to-[#4b8cff] bg-clip-text text-transparent">
              come
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-[clamp(16px,1.5vw,22px)] font-medium leading-[1.45] text-[#1c1b3f]">
            This website is only for our clients
            <br />
            Please contact us to get the password
          </p>

          {/* Divider */}
          <div className="my-8 flex w-full items-center justify-center">
            <img
              src="/images/divider-line.png"
              alt="Divider"
              className="pointer-events-none w-full max-w-[560px] select-none object-contain"
              draggable="false"
            />
          </div>

          {/* Password input */}
          <div
            className="
              box-border
              flex
              h-[64px]
              w-[450px]
              max-w-full
              items-center
              gap-3
              rounded-full
              border
              border-white
              bg-white/10
              px-5
              shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-10px_24px_rgba(255,255,255,0.08),0_18px_45px_rgba(105,88,255,0.12)]
              backdrop-blur-[22px]
            ">
            <LockKeyhole className="h-5 w-5 shrink-0 text-[#9aa3bd]" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="
                h-full
                min-w-0
                flex-1
                bg-transparent
                text-[18px]
                font-medium
                text-[#1c1b3f]
                outline-none
                placeholder:text-[#9aa3bd]
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                text-[#8f99b5]
                transition
                hover:bg-white/20
                hover:text-[#7138ff]
                active:scale-95
              ">
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Login button */}
          <button
            type="button"
            onClick={handleLogin}
            className="
              mt-8
              h-[64px]
              w-[450px]
              max-w-full
              rounded-full
              bg-gradient-to-r
              from-[#a93dff]
              via-[#7a55ff]
              to-[#4b9bff]
              text-[20px]
              font-extrabold
              tracking-wide
              text-white
              shadow-[0_20px_50px_rgba(109,91,255,0.38)]
              transition
              hover:scale-[1.015]
              hover:shadow-[0_24px_60px_rgba(109,91,255,0.48)]
              active:scale-[0.98]
            ">
            LOGIN
          </button>
        </div>
      </section>
    </main>
  );
}
