/** Semi-transparent SAMPLE watermark — discourages clean screenshots of demos. */
export function SampleWatermark() {
  return (
    <div className="tvi-sample-watermark" aria-hidden>
      <div className="tvi-sample-watermark-pattern">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i}>The Virtual Invite · SAMPLE</span>
        ))}
      </div>
    </div>
  );
}
