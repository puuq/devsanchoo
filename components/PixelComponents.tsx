import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

// Pixel Button
const pixelButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 pixel-corners pixel-border pixel-shadow",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        pixel: "bg-[hsl(var(--pixel-primary))] text-white hover:bg-[hsl(var(--pixel-primary))/90]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "pixel",
      size: "default",
    },
  }
);

export interface PixelButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pixelButtonVariants> {
  children: ReactNode;
}

export function PixelButton({
  className,
  variant,
  size,
  children,
  ...props
}: PixelButtonProps) {
  return (
    <button
      className={cn(pixelButtonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="pixel-text text-xs">{children}</span>
    </button>
  );
}

// Pixel Card
export interface PixelCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  noBorder?: boolean;
}

export function PixelCard({
  className,
  children,
  noBorder = false,
  ...props
}: PixelCardProps) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground pixel-corners",
        !noBorder && "pixel-border pixel-shadow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function PixelCardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function PixelCardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("pixel-text text-lg font-semibold leading-relaxed tracking-wider", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function PixelCardDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function PixelCardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export function PixelCardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}