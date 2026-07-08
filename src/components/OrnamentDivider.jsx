// A repeating interlace pattern inspired by Armenian khachkar (cross-stone)
// carving, used as a quiet structural divider between sections.
export default function OrnamentDivider({ flip = false }) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex',
        justifyContent: 'center',
        transform: flip ? 'scaleY(-1)' : 'none',
      }}
    >
      <svg width="220" height="18" viewBox="0 0 220 18" fill="none">
        <path
          d="M0 9 C 10 1, 20 1, 27.5 9 C 35 17, 45 17, 55 9 C 65 1, 75 1, 82.5 9 C 90 17, 100 17, 110 9 C 120 1, 130 1, 137.5 9 C 145 17, 155 17, 165 9 C 172.5 1, 182.5 1, 192.5 9 C 200 17, 210 17, 220 9"
          stroke="#B8923F"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="110" cy="9" r="3" fill="#A5322A" />
      </svg>
    </div>
  );
}
