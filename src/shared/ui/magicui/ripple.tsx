import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/shared/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  // Рассчитываем максимальное количество кругов для разных экранов
  const limits = {
    base: 2,   // мобильные
    md: 5,     // планшеты
    lg: 8,     // ноутбуки
    xl2: 12,   // большие экраны
  };

  // Корректируем лимиты, чтобы не превышали переданное количество кругов
  const actualLimits = {
    base: Math.min(limits.base, numCircles),
    md: Math.min(limits.md, numCircles),
    lg: Math.min(limits.lg, numCircles),
    xl2: Math.min(limits.xl2, numCircles),
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        // Определяем видимость круга для разных разрешений
        const visibilityClasses = [
          i < actualLimits.base ? "block" : "hidden",
          i < actualLimits.md ? "md:block" : "md:hidden",
          i < actualLimits.lg ? "lg:block" : "lg:hidden",
          i < actualLimits.xl2 ? "2xl:block" : "2xl:hidden",
        ].join(" ");

        return (
          <div
            key={i}
            className={cn(
              "absolute animate-ripple rounded-full border bg-foreground/25 shadow-xl",
              visibilityClasses
            )}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";