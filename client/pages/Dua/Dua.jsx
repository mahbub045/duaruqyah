import Image from "next/image";
import { useEffect, useState } from "react";

const Dua = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [duaData, setDuaData] = useState([]);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const duaResult = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_ENPOINT}/dua`
        );
        const duaDataRes = await duaResult.json();
        setDuaData(duaDataRes);
        // console.log(categoryData);
      } catch (error) {
        console.error("Error fetching data!");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [audioStates, setAudioStates] = useState({});

  useEffect(() => {
    // Check if audioStates has changed
    const handleAudioStateChange = (duaId) => {
      if (audioStates[duaId] && audioStates[duaId].isPlaying) {
        console.log("Audio is playing");
      } else {
        console.log("Audio is paused");
      }
    };

    // Loop through each duaId
    Object.keys(audioStates).forEach((duaId) => {
      handleAudioStateChange(duaId);
    });
  }, [audioStates]);

  const handlePlayPause = (audioUrl, duaId) => {
    // If an audio element is already present for the given duaId
    if (audioStates[duaId] && audioStates[duaId].audio) {
      const { audio } = audioStates[duaId];
      audio.pause();
      setAudioStates({
        ...audioStates,
        [duaId]: { ...audioStates[duaId], audio: null, isPlaying: false },
      });
    } else {
      const newAudio = new Audio(audioUrl);
      newAudio
        .play()
        .then(() => {
          setAudioStates({
            ...audioStates,
            [duaId]: { audio: newAudio, isPlaying: true },
          });
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });

      newAudio.addEventListener("ended", () => {
        setAudioStates({
          ...audioStates,
          [duaId]: { ...audioStates[duaId], isPlaying: false },
        });
      });
    }
  };

  return (
    <>
      {categoryData.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          {subCategoryData
            .filter((subCategory) => subCategory.cat_id === category.cat_id)
            .map((subCategory, subCategoryIndex) => (
              <div key={subCategoryIndex}>
                <div className="bg-white px-5 py-3 mb-5 rounded-md">
                  <h3 className="text-gray-600 font-semibold">
                    <span className="text-[#1FA45B]">Session:</span>{" "}
                    {subCategory.subcat_name_en}
                  </h3>
                </div>
                {duaData
                  .filter((dua) => dua.subcat_id === subCategory.subcat_id)
                  .map((item, duaIndex) => (
                    <div
                      className="bg-white p-5 mb-5 rounded-md"
                      key={duaIndex}
                    >
                      {/* Your existing content rendering logic */}
                      <div>
                        <div className="flex justify-start items-center gap-5">
                          <Image
                            src="/images/duacard.svg"
                            alt="Logo"
                            width={35}
                            height={35}
                          />
                          <h2 className="text-lg font-bold text-[#1FA45B]">
                            {item.dua_id}. {item?.dua_name_en}
                          </h2>
                        </div>
                        <p className="my-5 text-lg font-semibold">
                          {item.top_en}
                        </p>
                        <p className="my-5 text-3xl text-right leading-[50px]">
                          {item.dua_arabic}
                        </p>
                        {item.transliteration_en !== null && (
                          <p className="my-5 text-lg font-semibold text-gray-800 italic">
                            <span className="text-gray-950 font-semibold">
                              Transliteration:
                            </span>{" "}
                            {item.transliteration_en}
                          </p>
                        )}
                        {item.translation_en !== null && (
                          <p className="my-5 text-lg font-semibold text-gray-600">
                            <span className="text-gray-800 font-semibold">
                              Translation:
                            </span>{" "}
                            {item.translation_en}
                          </p>
                        )}
                        {item.refference_en !== null && (
                          <h4 className="font-semibold text-xl">
                            <span className="block text-[#1FA45B]">
                              Reference:
                            </span>
                            {item.refference_en}
                          </h4>
                        )}
                      </div>
                      {/* icon start */}
                      <div className="mt-10 flex justify-end gap-[310px]">
                        {item.audio !== null ? (
                          <button
                            onClick={() =>
                              handlePlayPause(item.audio, item.dua_id)
                            }
                          >
                            <div className="bg-[#1FA45B] p-3 rounded-full">
                              {audioStates[item.dua_id] &&
                              audioStates[item.dua_id].isPlaying ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-player-pause-filled text-white"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path
                                    d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
                                    strokeWidth="0"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
                                    strokeWidth="0"
                                    fill="currentColor"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-player-play-filled text-white"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path
                                    d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                    strokeWidth="0"
                                    fill="currentColor"
                                  />
                                </svg>
                              )}
                            </div>
                          </button>
                        ) : null}
                        <div className="flex items-center gap-10">
                          <a href="" className="">
                            <Image
                              src="/images/icon/copy.svg"
                              alt="copy"
                              title="Copy"
                              width={24}
                              height={24}
                            />
                          </a>
                          <a href="">
                            <Image
                              src="/images/icon/bookmark.svg"
                              alt="bookmark"
                              title="Bookmark"
                              width={24}
                              height={24}
                            />
                          </a>
                          <a href="">
                            <Image
                              src="/images/icon/plan.svg"
                              alt="plan"
                              title="Memorize"
                              width={24}
                              height={24}
                            />
                          </a>
                          <a href="">
                            <Image
                              src="/images/icon/share.svg"
                              alt="share"
                              title="Share"
                              width={24}
                              height={24}
                            />
                          </a>
                          <a href="">
                            <Image
                              src="/images/icon/report.svg"
                              alt="report"
                              title="Report"
                              width={24}
                              height={24}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

export default Dua;
