// CarouselSkills.tsx
import React, { useState, useEffect, useRef } from "react";
import "./carouselSkills.css";

const IMAGES = [
  "https://forkpoint.com/wp-content/uploads/js-logo.png",
  "https://th.bing.com/th/id/R.b614f9a05650e9b96dec4790c1e53bfa?rik=ngGg6OoyStpMEA&pid=ImgRaw&r=0",
  "https://www.softorks.com/Images/css.jpg",
  "https://th.bing.com/th/id/R.785df5444d71022977e06196da29aec0?rik=ihC44eWn%2bnhJKw&pid=ImgRaw&r=0",
  "https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_logo_icon_146389.png",
  "https://th.bing.com/th/id/R.be9251182f1c4d05f3f836cc3f39898b?rik=1VqP9hKmb5D%2beg&pid=ImgRaw&r=0",
  "https://letstacle.com/wp-content/uploads/2020/12/java-icon-transpaarent.png",
  "https://assets.website-files.com/5fd6b43c52d14e3344a5e396/607f9bc7fc8bd3f846edfef8_unnamed-p-500.png",
  "https://th.bing.com/th/id/R.8251fe76d7487a28b07603515b300964?rik=H7lrBp652zDaWg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f5848309bcef1014c0b5e4a9a.png&ehk=N%2fi7UuvK4YyoLcxusdDEWeftPaGIfNJl2VmpTOtLt%2bA%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.4dfe01148ebce3a9de8ab55279b0b4bc?rik=Cb%2f46GSGyzIMJA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.8075e9fb9d9e4d38ab81dae248c6dbd0?rik=m8wEkmr8R1U1gA&riu=http%3a%2f%2fpnbmobile.com%2fimages%2ftypescript_logo.png&ehk=wde0lVRVQLeiYmCgdeE%2bTbW2qlCyP7smtUsY5bfYKwI%3d&risl=&pid=ImgRaw&r=0",
  "https://www.pngrepo.com/png/354380/512/spring-icon.png",
  "https://th.bing.com/th/id/R.a622bc6f9ad036d090ccde2f37fa2202?rik=GLEVSaIgpiiIDg&pid=ImgRaw&r=0",

  // ... add all your image URLs here ...
];
const CarouselSkills = () => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCarousel = () => {
      setOffset((prev) => {
        const childWidth = containerRef.current?.firstChild
          ? (containerRef.current.firstChild as HTMLElement).clientWidth
          : 0;
        const newOffset = prev - 2; // The speed of movement, adjust as needed

        if (-newOffset >= childWidth) {
          // Rotate the images
          IMAGES.push(IMAGES.shift() as string);
          return newOffset + childWidth - 2; // Adjust the offset to account for the image width, but keep moving it at the same speed
        }
        return newOffset;
      });
    };

    const interval = setInterval(moveCarousel, 40); // This is the rate of "frame" update

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="carousel-container"
      ref={containerRef}
      style={{ transform: `translateX(${offset}px)` }}
    >
      {IMAGES.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="carousel-image"
          className="carousel-image"
        />
      ))}
    </div>
  );
};

export default CarouselSkills;
