import { useEffect, useState } from "react";
import { ResidentCard } from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

export const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(1)

  }, [residents])
  

  return (
    <section>
      <section className="grid grid-cols-[repeat(auto-fit,_300px)] justify-center gap-6 max-w-[1000px] mx-auto py-10">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentEndpoint={resident} />
        ))}
      </section>

      {}
      <ul className="text-lg flex gap-3 justify-center flex-wrap pb-10">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`bg-white text-black p-2 ${
                page === currentPage && "bg-green-400"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
