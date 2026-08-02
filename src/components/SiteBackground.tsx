const BG_LEFT = "#48A9F5";
const BG_RIGHT = "#7152D2";

/**
 * Exact LAYA logo yin-yang fill (unchanged curve math):
 *   R = H/2, r = R/2
 *   Top semicircle bulges RIGHT; bottom semicircle bulges LEFT
 *   Bottom apex at (CX - r, CY + r)
 *
 * Wide 3:1 viewBox + full-bleed SVG so fills reach viewport edges
 * (no square side seams / hard gradient split).
 */
const H = 887;
const W = 2661; // 3:1 — height-fill on normal/wide screens
const CX = W / 2;
const CY = H / 2;
const R = H / 2;
const r = R / 2;

const BOTTOM_APEX_X = CX - r;
const BOTTOM_APEX_Y = CY + r;

const BLUE_PATH = [
  `M 0 0`,
  `L ${CX} 0`,
  `A ${r} ${r} 0 0 1 ${CX} ${CY}`,
  `A ${r} ${r} 0 0 0 ${BOTTOM_APEX_X} ${BOTTOM_APEX_Y}`,
  `A ${r} ${r} 0 0 0 ${CX} ${H}`,
  `L 0 ${H}`,
  `Z`,
].join(" ");

const SiteBackground = () => (
  <div aria-hidden="true" className="laya-site-bg" style={{ backgroundColor: BG_LEFT }}>
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={W} height={H} fill={BG_RIGHT} />
      <path d={BLUE_PATH} fill={BG_LEFT} />
    </svg>
  </div>
);

export default SiteBackground;
