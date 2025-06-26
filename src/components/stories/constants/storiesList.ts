import type { Props as StoryCard } from "../ui/StoryCard.astro";

export const storiesList: StoryCard[] = [
  {
    photo: "https://source.unsplash.com/featured/800x600?nature,mountains",
    category: "nature",
    date: "June 22, 2025",
    title: "Explorando las alturas de los Andes",
    description:
      "Un recorrido por los paisajes imponentes de la cordillera de los Andes, donde la naturaleza muestra su majestuosidad entre picos nevados y cielos infinitos.",
  },
  {
    photo: "https://source.unsplash.com/featured/800x600?beach,sunset",
    category: "travel",
    date: "June 20, 2025",
    title: "Atardeceres mágicos en las costas del Pacífico",
    description:
      "El sol cae lentamente sobre el horizonte, tiñendo el cielo de colores cálidos y -  dejando una sensación de paz en cada rincón de la playa.",
  },
  {
    photo: "https://source.unsplash.com/featured/800x600?forest,river",
    category: "adventure",
    date: "June 18, 2025",
    title: "Senderismo entre ríos y bosques encantados",
    description:
      "Descubrimos rutas ocultas dentro de frondosos bosques, donde el sonido del agua y la brisa forman una melodía perfecta para desconectar.",
  },
  {
    photo: "https://source.unsplash.com/featured/800x600?desert,dunes",
    category: "exploration",
    date: "June 17, 2025",
    title: "La inmensidad dorada del desierto",
    description:
      "Entre dunas interminables y cielos despejados, el desierto ofrece una experiencia única, donde el silencio y la belleza se funden en cada paso.",
  },
];
