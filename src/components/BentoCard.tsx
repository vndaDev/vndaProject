import { useState, useRef, useEffect } from "react";
import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

interface BentoCardProps {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  className?: string;
  large?: boolean;
  status?: string;
}

const BentoCard = ({ icon: Icon, tag, title, description, className = "", large = false, status }: BentoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const statusType = status === "En desarrollo" ? "en-desarrollo" : status === "Próximamente" ? "proximo" : null;

  const normalBorderColor = "hsl(182 100% 29%)";
  const highlightBorderColor = statusType === "en-desarrollo" ? "hsl(44 100% 58%)" : statusType === "proximo" ? "hsl(268 100% 56%)" : normalBorderColor;

  const normalShadow = "0 0 30px -5px rgba(0, 141, 148, 0.15)";
  const highlightShadow = statusType === "en-desarrollo" ? "0 0 28px -5px rgba(234, 179, 8, 0.4)" : statusType === "proximo" ? "0 0 28px -5px rgba(167, 139, 250, 0.4)" : normalShadow;

  const isHighlight = !!statusType && isHovered;
  const hoverTransitionTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTransitionTimeout.current !== null) {
        window.clearTimeout(hoverTransitionTimeout.current);
      }
    };
  }, []);

  return (
    <div
      className={`group relative rounded-lg p-6 transition-all duration-500 cursor-pointer ${large ? "md:col-span-2" : ""} ${className}`}
      style={{
        background: "#121214",
        border: "1px solid #1f1f22",
        transition: "border-color 250ms ease, box-shadow 250ms ease"
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        const target = e.currentTarget as HTMLElement;
        target.style.borderColor = normalBorderColor;
        target.style.boxShadow = normalShadow;

        if (statusType) {
          if (hoverTransitionTimeout.current !== null) {
            window.clearTimeout(hoverTransitionTimeout.current);
          }
          hoverTransitionTimeout.current = window.setTimeout(() => {
            target.style.borderColor = highlightBorderColor;
            target.style.boxShadow = highlightShadow;
          }, 150);
        } else {
          target.style.borderColor = normalBorderColor;
          target.style.boxShadow = normalShadow;
        }
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        if (hoverTransitionTimeout.current !== null) {
          window.clearTimeout(hoverTransitionTimeout.current);
          hoverTransitionTimeout.current = null;
        }
        (e.currentTarget as HTMLElement).style.borderColor = "#1f1f22";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg transition-colors duration-300" style={{
          background: isHighlight
            ? statusType === "proximo"
              ? "rgba(167, 139, 250, 0.2)"
              : "rgba(234, 179, 8, 0.2)"
            : "rgba(0, 141, 148, 0.1)",
        }}>
          <Icon
            className={`w-5 h-5 transition-colors duration-300 ${
              isHighlight
                ? statusType === "proximo"
                  ? "text-purple-300"
                  : "text-yellow-300"
                : "text-primary"
            }`}
            strokeWidth={1.5}
          />
        </div>
        <span
          className="text-[10px] font-medium tracking-wider uppercase px-2 py-1 rounded-full transition-colors duration-300"
          style={{
            background: isHighlight
              ? statusType === "proximo"
                ? "rgba(167, 139, 250, 0.2)"
                : "rgba(234, 179, 8, 0.2)"
              : "rgba(0, 141, 148, 0.1)",
            color: isHighlight
              ? statusType === "proximo"
                ? "hsl(268 100% 56%)"
                : "hsl(44 100% 58%)"
              : "hsl(182 100% 29%)",
          }}
        >
          {tag}
        </span>
      </div>
      <h3 className="text-foreground font-semibold text-base mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default BentoCard;
