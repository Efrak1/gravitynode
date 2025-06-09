import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/shared/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  mobileCircles?: number;
  tabletCircles?: number;
  laptopCircles?: number;
  xlCircles?: number;
  xxlCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  mobileCircles = 3,
  tabletCircles = 5,
  laptopCircles = 8,
  xlCircles = 10,
  xxlCircles = 12,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      {...props}
    >
      {/* Mobile: 3 circles */}
      <div className="block md:hidden">
        {Array.from({ length: mobileCircles }, (_, i) => (
          <RippleCircle 
            key={`mobile-${i}`}
            i={i}
            mainCircleSize={mainCircleSize}
            mainCircleOpacity={mainCircleOpacity}
          />
        ))}
      </div>

      {/* Tablet: 5 circles */}
      <div className="hidden md:block lg:hidden">
        {Array.from({ length: tabletCircles }, (_, i) => (
          <RippleCircle 
            key={`tablet-${i}`}
            i={i}
            mainCircleSize={mainCircleSize}
            mainCircleOpacity={mainCircleOpacity}
          />
        ))}
      </div>

      {/* Laptop: 8 circles */}
      <div className="hidden lg:block xl:hidden">
        {Array.from({ length: laptopCircles }, (_, i) => (
          <RippleCircle 
            key={`laptop-${i}`}
            i={i}
            mainCircleSize={mainCircleSize}
            mainCircleOpacity={mainCircleOpacity}
          />
        ))}
      </div>

      {/* XL: 10 circles */}
      <div className="hidden xl:block 2xl:hidden">
        {Array.from({ length: xlCircles }, (_, i) => (
          <RippleCircle 
            key={`xl-${i}`}
            i={i}
            mainCircleSize={mainCircleSize}
            mainCircleOpacity={mainCircleOpacity}
          />
        ))}
      </div>

      {/* 2XL: 12 circles */}
      <div className="hidden 2xl:block">
        {Array.from({ length: xxlCircles }, (_, i) => (
          <RippleCircle 
            key={`xxl-${i}`}
            i={i}
            mainCircleSize={mainCircleSize}
            mainCircleOpacity={mainCircleOpacity}
          />
        ))}
      </div>
    </div>
  );
});

// Вынесенный компонент круга для избежания дублирования кода
function RippleCircle({ i, mainCircleSize, mainCircleOpacity }: { 
  i: number; 
  mainCircleSize: number; 
  mainCircleOpacity: number 
}) {
  const size = mainCircleSize + i * 70;
  const opacity = mainCircleOpacity - i * 0.03;
  const animationDelay = `${i * 0.06}s`;

  return (
    <div
      className={`absolute animate-ripple rounded-full border bg-foreground/25 shadow-xl`}
      style={{
        "--i": i,
        width: `${size}px`,
        height: `${size}px`,
        opacity,
        animationDelay,
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "var(--foreground)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(1)",
      } as CSSProperties}
    />
  );
}

Ripple.displayName = "Ripple";