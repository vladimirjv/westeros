import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type TitleWesterosProps = {
  page: number;
  totalPages: number;
};
const TitlePageWesteros = ({ page, totalPages }: TitleWesterosProps) => {
  return (
    <h1
      className={`${cinzelDecorative.className} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
    >
      Page {page}/{totalPages}
    </h1>
  );
};

export { TitlePageWesteros };
