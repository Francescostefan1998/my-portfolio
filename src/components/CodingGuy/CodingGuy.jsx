import "./codingGuy.css";
import React, { useEffect, useRef, useState } from "react";
const CodingGuy = () => {
  const imageContainerRef = useRef(null);
  useEffect(() => {
    const imageUrl =
      "https://webstockreview.net/images/desk-clipart-desk-job-12.png";
    // const elementsToTargetBackGround = document.querySelectorAll(".skill-item");
    const elementToTargetBackGround =
      document.getElementsByClassName("coding-guy-image");
    const piecesPerRow = 25;
    const piecesPerColumn = 25;

    const createPieces = () => {
      const container = imageContainerRef.current;
      container.innerHTML = ""; // Clear the container

      for (let row = 0; row < piecesPerRow; row++) {
        for (let col = 0; col < piecesPerColumn; col++) {
          const piece = document.createElement("div");
          piece.className = "piece";
          piece.style.backgroundImage = `url(${imageUrl})`;
          piece.style.backgroundPosition = `calc((${-col * 100}%) + ${
            col * container.clientWidth
          }px) calc((${-row * 100}%) + ${row * container.clientHeight}px)`;

          // Store original position in data attributes
          piece.dataset.originalLeft = `${
            col * (container.clientWidth / piecesPerColumn)
          }px`;
          piece.dataset.originalTop = `${
            row * (container.clientHeight / piecesPerRow)
          }px`;

          // Set initial position to a further random location
          piece.style.left = `${
            (Math.random() - 0.5) * container.clientWidth * 2
          }px`;
          piece.style.top = `${
            (Math.random() - 0.5) * container.clientHeight * 2
          }px`;

          // Set initial opacity to 0
          piece.style.opacity = "0";

          piece.style.width = `${container.clientWidth / piecesPerColumn}px`;
          piece.style.height = `${container.clientHeight / piecesPerRow}px`;

          container.appendChild(piece);
        }
      }
      requestAnimationFrame(() => {
        setTimeout(() => {
          const pieces = container.querySelectorAll(".piece");
          const piecesArray = Array.from(pieces).reverse(); // Reverse the order of elements

          piecesArray.forEach((piece, index) => {
            const delay = ((0.5 + Math.random()) / 1.5) * index * 10;
            setTimeout(() => {
              // Animate the piece to its original position
              piece.style.left = piece.dataset.originalLeft;
              piece.style.top = piece.dataset.originalTop;

              // Set opacity to 1 during the transition
              piece.style.opacity = "1";
              piece.style.transform = "rotate(0deg)";

              if (index === piecesArray.length - 1) {
              }
            }, delay);
          });
        }, 500);
      });
    };

    createPieces();
  }, []);

  return (
    <div id="coding-guy-nerd">
      <div className="image-container" ref={imageContainerRef}>
        <div className="coding-guy-image"></div>
      </div>
    </div>
  );
};

export default CodingGuy;
