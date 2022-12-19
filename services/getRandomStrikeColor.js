import { colors } from "../constants/colors";

export const getRandomStrikeColor = () =>
  `strike-through-${colors[Math.floor(Math.random() * colors.length)]}`;
