import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const images = [
  {
    url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d",
    caption: "Sustainable Farming Practices",
  },
  {
    url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    caption: "Conservation Agriculture",
  },
  {
    url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9",
    caption: "Food Security",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((curr) => (curr + 1) % images.length);
    };

    timeoutRef.current = window.setTimeout(nextSlide, 5000);
    return () => window.clearTimeout(timeoutRef.current);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            idx === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{image.caption}</h2>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              idx === currentSlide ? "bg-white w-4" : "bg-white/50"
            )}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}