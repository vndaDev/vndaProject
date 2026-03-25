interface StatusBadgeProps {
  label: string;
}

const StatusBadge = ({ label }: StatusBadgeProps) => {
  return (
    <span
      className="inline-flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full"
      style={{
        background: "rgba(253, 224, 71, 0.15)", // amarillo suave translúcido
        color: "#fde047", // amarillo suave de Tailwind (yellow-400)
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
      {label}
    </span>
  );
};

export default StatusBadge;