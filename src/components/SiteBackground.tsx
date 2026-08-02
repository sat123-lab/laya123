import { useEffect } from "react";
import siteBg from "@/assets/laya-bg-filled-v15.png";

// Sampled from the background image edges (left blue / right purple)
const BG_LEFT = "#48A9F5";
const BG_RIGHT = "#7053D3";

const SiteBackground = () => {
  useEffect(() => {
    const img = new Image();
    img.src = siteBg;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="laya-site-bg"
      style={{
        backgroundImage: [
          `url(${siteBg})`,
          `linear-gradient(to right, ${BG_LEFT} 50%, ${BG_RIGHT} 50%)`,
        ].join(", "),
        backgroundSize: "78%, cover",
        backgroundPosition: "center bottom, center center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {/* Header-under strip only — force blue across that thin rectangle, nothing else */}
      <div
        className="absolute top-0 left-0 right-0 h-[96px] lg:h-[120px] pointer-events-none"
        style={{ backgroundColor: BG_LEFT }}
      />
    </div>
  );
};

export default SiteBackground;
