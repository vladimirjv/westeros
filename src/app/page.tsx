import { Accordion } from "@/components/ui/accordion";
import { fetchHouses } from "@/lib/api";
import { TitleWesteros } from "@/components/Title";
import HouseCard from "@/components/HouseCard";
import { Paginator } from "@/components/Paginator";
import { TitlePageWesteros } from "@/components/TitlePage";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const maxPage = 45;
  const pageNumber = Number(searchParams?.page);
  const page = pageNumber ? pageNumber > maxPage ? 45 : pageNumber : 1;

  const houses = await fetchHouses(page);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      {page === 1 && <TitleWesteros />}
      {page !== 1 && <TitlePageWesteros page={page} totalPages={maxPage} />}

      <Accordion type="single" collapsible className="w-full">
        {houses.map((house) => (
          <HouseCard key={house.url} house={house} />
        ))}
      </Accordion>
      <Paginator totalPages={maxPage} page={page} />
    </main>
  );
}
