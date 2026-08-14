import { cn } from "@/lib/utils";

function toPoints(
  data: number[],
  width: number,
  height: number,
  pad: number
): Array<[number, number]> {
  const max = Math.max(...data, 0) || 1;
  return data.map((value, i) => {
    const x = data.length === 1 ? width / 2 : (i / (data.length - 1)) * width;
    const y = pad + (1 - value / max) * (height - pad * 2);
    return [x, y] as [number, number];
  });
}

/** Small sparkline used inside KPI cards. */
export function Sparkline({
  data,
  color = "#2563eb",
  className,
}: {
  data: number[];
  color?: string;
  className?: string;
}) {
  const width = 100;
  const height = 28;
  const points = toPoints(data, width, height, 2);
  const line = points.map((p) => `${p[0]},${p[1]}`).join(" ");
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("h-7 w-full", className)}
      aria-hidden
    >
      <polyline
        points={line}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Responsive area/line chart (flat tint fill — no gradients). */
export function LineChart({
  data,
  color = "#2563eb",
  gridlines = true,
  className,
}: {
  data: number[];
  color?: string;
  gridlines?: boolean;
  className?: string;
}) {
  const width = 100;
  const height = 40;
  const pad = 4;
  const points = toPoints(data, width, height, pad);
  const line = points.map((p) => `${p[0]},${p[1]}`).join(" ");
  const area = `M ${points[0][0]} ${height - pad} L ${line
    .split(" ")
    .join(" L ")} L ${points[points.length - 1][0]} ${height - pad} Z`;

  const gridY = [8, 18, 28];

  return (
    <div className={cn("h-full w-full", className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden
      >
        {gridlines &&
          gridY.map((y) => (
            <line
              key={y}
              x1="0"
              x2={width}
              y1={y}
              y2={y}
              stroke="#e4e4e7"
              strokeWidth="1"
              strokeDasharray="2 3"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        <polygon points={area} fill={color} opacity="0.07" />
        <polyline
          points={line}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx={points[points.length - 1][0]}
          cy={points[points.length - 1][1]}
          r="2"
          fill="#ffffff"
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

/** Simple HTML bar chart with labels. */
export function BarChart({
  data,
  color = "#2563eb",
  heightClassName = "h-36",
  className,
}: {
  data: { label: string; value: number }[];
  color?: string;
  heightClassName?: string;
  className?: string;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className={cn("w-full", className)}>
      <div className={cn("flex w-full items-end gap-2", heightClassName)}>
        {data.map((d) => (
          <div
            key={d.label}
            className="group flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <div
              className="w-full rounded-[3px] transition-colors"
              style={{ height: `${(d.value / max) * 100}%`, backgroundColor: color }}
            />
            <span className="text-[10px] text-zinc-400">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Grouped HTML bars for two series (e.g. revenue vs expenses). */
export function GroupedBarChart({
  data,
  colors = ["#2563eb", "#a1a1aa"],
  heightClassName = "h-36",
  className,
}: {
  data: { label: string; values: [number, number] }[];
  colors?: [string, string];
  heightClassName?: string;
  className?: string;
}) {
  const max = Math.max(
    ...data.flatMap((d) => d.values),
    1
  );
  return (
    <div className={cn("w-full", className)}>
      <div className={cn("flex w-full items-end gap-3", heightClassName)}>
        {data.map((d) => (
          <div
            key={d.label}
            className="flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <div className="flex h-full w-full items-end justify-center gap-1">
              {d.values.map((value, i) => (
                <div
                  key={i}
                  className="w-1/2 max-w-5 rounded-[2px]"
                  style={{
                    height: `${(value / max) * 100}%`,
                    backgroundColor: colors[i],
                  }}
                />
              ))}
            </div>
            <span className="text-[10px] text-zinc-400">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export type DonutSlice = {
  label: string;
  value: number;
  color: string;
};

/** SVG donut chart with an optional center label. */
export function DonutChart({
  slices,
  size = 148,
  thickness = 14,
  center,
}: {
  slices: DonutSlice[];
  size?: number;
  thickness?: number;
  center?: React.ReactNode;
}) {
  const total = slices.reduce((sum, s) => sum + s.value, 0) || 1;
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const fractions = slices.map((s) => s.value / total);
  const offsets = fractions.map(
    (_, i) =>
      fractions.slice(0, i).reduce((sum, f) => sum + f, 0) * circumference
  );

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} aria-hidden>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {slices.map((slice, i) => {
            const dash = fractions[i] * circumference;
            return (
              <circle
                key={slice.label}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={slice.color}
                strokeWidth={thickness}
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offsets[i]}
              />
            );
          })}
        </g>
      </svg>
      {center && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {center}
        </div>
      )}
    </div>
  );
}
