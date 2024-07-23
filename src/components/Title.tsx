import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const TitleWesteros = () => {
  return (
    <h1 className={`${cinzelDecorative.className} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}>
      Welcome to westeros
    </h1>
  );
};

export { TitleWesteros };