import { useState } from "react";
import menuData from "../data/menuData";

const Menu = () => {
  const [menuActive, setMenuActive] = useState("all");

  const categories = [
    "all",
    "dessert",
    "hot",
    "cold",
    "refreshment",
    "combo",
    "snack",
  ];
  const filterMenu =
    menuActive === "all"
      ? menuData
      : menuData.filter((item) => item.category === menuActive);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  // pagination logique
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterMenu.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filterMenu.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="menu">
      <div className="containe">
        <div className="menuList flex flex-col justify-center items-center">
          <h2 className="title text-white">our menu</h2>
          <div className="linkMenu flex gap-5">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => {
                  setMenuActive(cat);
                  setCurrentPage(1);
                }}
                className={`capitalize border transition-all rounded-[15px]
                    ${
                      menuActive === cat
                        ? "bg-[#f3961c] text-[#3b141c] font-semibold"
                        : "cursor-pointer border-white hover:bg-white hover:text-black hover:scale-105"
                    }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="case grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
          {currentItems.length === 0 ? (
            <p className="text-center col-span-full text-lg font-medium text-gray-400">
              No menu available in this category.
            </p>
          ) : (
            currentItems.map((item) => (
              <div
                key={item.image}
                className="flex flex-col justify-center items-center"
              >
                <img
                  src={item.image}
                  alt="menu"
                  className="w-[180px] h-[180px]"
                />
                <h3 className="capitalize text-xl lg:text-2xl font-medium sm:font-semibold lg:font-bold">
                  {item.title}
                </h3>
                <p className="">{item.description}</p>
              </div>
            ))
          )}
        </div>

        {filterMenu.length > itemsPerPage && (
          <div className="pagination flex justify-center gap-3 flex-wrap">
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                    currentPage === page
                      ? "bg-[#f3961c] text-black"
                      : "bg-white text-[#3b141c] hover:bg-[#f3961c] hover:text-black"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;

/* return (
    <section className="menu">
      <h2 className="title txt">our menu</h2>
      <div className="containe">
        <div className="case">
          <img
            src="../images/hot-beverages.png"
            alt="menu"
            className="w-[50%] h-[50%]"
          />
          <h3 className="text-white">hot beverages</h3>
          <p className="text-white">
            whide ronge of streaming hot coffee to make you fresh and light
          </p>
        </div>
        <div className="case w-3/6">
          <img
            src="../images/cold-beverages.png"
            alt="menu"
            className="w-[50%] h-[50%]"
          />
          <h3 className="text-white">cold beverages</h3>
          <p className="text-white">
            Creamy and frotty cold coffee to make you cool
          </p>
        </div>
        <div className="case">
          <img
            src="../images/refreshment.png"
            alt="menu"
            className="w-[50%] h-[50%]"
          />
          <h3 className="text-white">Refreshment</h3>
          <p className="text-white">
            Fruit and icy refreshing drink to make food refresh
          </p>
        </div>
        <div className="case">
          <img
            src="../images/special-combo.png"
            alt="menu"
            className="w-[50%] h-[50%]"
          />
          <h3 className="text-white">special combos</h3>
          <p className="text-white">Your favorite eating and drinking combo</p>
        </div>
        <div className="case">
          <img
            src="../images/desserts.png"
            alt="menu"
            className="w-[50%] h-[50%]"
          />
          <h3 className="text-white">Dessert</h3>
          <p className="text-white">
            Satiate your pallate and take you a cullinary treat
          </p>
        </div>
        <div className="case">
          <img
            src="../images/burger-frenchfries.png"
            alt="menu"
            className="w-[50%] h-[50%]"
          />
          <h3 className="text-white">burger & french fries</h3>
          <p className="text-white">
            Quick bites to satisfy your smail size hunger
          </p>
        </div>
      </div>
    </section>
  ); */
