"use client";
import { useEffect, useState } from "react";

const Categories = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResult = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_ENPOINT}/category`
        );
        const categoryDataRes = await categoryResult.json();
        setCategoryData(categoryDataRes);
      } catch (error) {
        console.error("Error fetching data!");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const subCategoryResult = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_ENPOINT}/sub-category`
        );
        const subCategoryDataRes = await subCategoryResult.json();
        setSubCategoryData(subCategoryDataRes);
        // console.log(categoryData);
      } catch (error) {
        console.error("Error fetching data!");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="bg-[#1FA45B] rounded-t-md p-2">
        <h2 className="text-center text-xl font-semibold text-white">
          Categories
        </h2>
      </div>
      <div className="relative m-2">
        <input
          type="text"
          className="px-10 py-2 pr-8 min-w-full bg-white text-black rounded border outline-offset-2 outline-1 focus:outline-[#1FA45B]"
          placeholder="Search by Categories"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-18 p-2 rounded-md text-gray-400 absolute left-0 top-1/2 transform -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5.2-5.2"
          ></path>
          <circle cx="10" cy="10" r="8"></circle>
        </svg>
      </div>
      <div className="overflow-y-auto h-[1000px]" style={{ scrollbarWidth: 'thin' }}>
        {categoryData &&
          categoryData.map((item, index) => (
            <div className="p-2 relative" key={index}>
              {/* button start */}
              <button
                className="hover:bg-[#E8F0F5] p-2 w-full rounded-md flex items-center justify-between"
                onClick={() => handleDropdownToggle(index)}
              >
                {/* Your existing button content */}
                <div className="flex items-center">
                  <img
                    src={`/images/${item.cat_icon}.svg`} // Assuming you have image files named after category icons
                    alt="Category Icon"
                    className="w-16 h-16 rounded-md p-2 cursor-pointer bg-[#CFE0E5]"
                  />
                  <div className="ml-2">
                    <h3 className="text-lg font-semibold text-[#1FA45B]">
                      {item.cat_name_en}
                    </h3>
                    <h6 className="text-sm text-gray-600 text-start">
                      Subcategory: {item.no_of_subcat}
                    </h6>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="text-xl font-bold text-gray-800">
                    {item.no_of_dua}
                  </h5>
                  <p className="text-xl text-gray-600">Duas</p>
                </div>
              </button>

              {/* Check if the dropdown is open before rendering */}
              {openDropdownIndex === index && (
                <ol className="relative mt-2 ml-5 border-l border-dotted border-[#1FA45B]">
                  {/* Filter subCategoryData based on the current category's cat_id */}
                  {subCategoryData &&
                    subCategoryData
                      .filter((subItem) => subItem.cat_id === item.cat_id)
                      .map((filteredSubItem, subIndex) => (
                        <li key={subIndex} className="mb-8 ml-4">
                          <div className="absolute w-2 h-2 mt-2 bg-[#1FA45B] rounded-full -left-1 border border-[#1FA45B]"></div>
                          <button
                            className="text-sm text-black hover:text-emerald-700"
                            id={`${filteredSubItem.subcat_name_en}`}
                          >
                            {filteredSubItem.subcat_name_en}
                          </button>
                        </li>
                      ))}
                </ol>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;

// export async function getServerSideProps() {
//   try {
//     const categoryResult = await fetch(
//       `${process.env.NEXT_PUBLIC_BACKEND_ENPOINT}/category`
//     );
//     const categoryData = await categoryResult.json();

//     const subCategoryResult = await fetch(
//       `${process.env.NEXT_PUBLIC_BACKEND_ENPOINT}/sub-category`
//     );
//     const subCategoryData = await categoryResult.json();

//     return {
//       props: {
//         categoryData: categoryData,
//         subCategoryData: subCategoryData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching products data:", error);
//     return {
//       props: {
//         categoryData: null,
//         subCategoryData: null,
//       },
//     };
//   }
// }
