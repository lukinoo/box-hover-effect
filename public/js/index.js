const cards = document.querySelectorAll(".container__card");

const initialCardAnimate = (card, index) => {
  card.animate(
    [
      {
        transform: "scale(0)",
        opacity: 0,
      },
      {
        transform: "scale(1)",
        opacity: 1,
      },
    ],
    {
      duration: 500,
      delay: index,
    }
  );
};

const handleAnimate = (e, x, y) => {
  e.target.style.setProperty("--x-pos", `${x}px`);
  e.target.style.setProperty("--y-pos", `${y}px`);
};

const handleMouseMove = (e) => {
  let [x, y] = [0, 0];

  const { clientX, clientY } = e;

  const { left, top } = e.target.getBoundingClientRect();

  x = clientX - left;
  y = clientY - top;

  handleAnimate(e, x, y);
};

cards.forEach((card, index) => {
  initialCardAnimate(card, index);

  card.addEventListener("mousemove", handleMouseMove);
});
