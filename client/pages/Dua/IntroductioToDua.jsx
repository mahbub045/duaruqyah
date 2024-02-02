import Image from "next/image";

const IntroductioToDua = () => {
  return (
    <>
      <div className="bg-white p-5 mb-5 rounded-md">
        <h3 className="text-gray-600 font-semibold">
          <span className="text-[#1FA45B]">Session:</span> The servent is
          dependent on his Lord
        </h3>
      </div>
      {/* cart start */}
      <div className="bg-white p-5 mb-5 rounded-md">
        {/* content start */}
        <div>
          <div className="flex justify-start items-center gap-5">
            <Image src="/images/duacard.svg" alt="Logo" width={35} height={35} />
            <h2 className="text-lg font-bold text-[#1FA45B]">
              2. The servent is dependent on his Lord #2
            </h2>
          </div>
          <p className="my-5 text-lg font-semibold">
            Prophet (ﷺ) used to say after every compulsory prayer, The servant
            will ask his Lord for all of his religiously and worldly needs,
            because the treasure of all things is in the hands of Allah. Allah
            says (interpretation of the meaning): “And there is not a thing but
            that with Us are its depositories, and We do not send it down except
            according to a known measure.” (Sura Al-Hijr 15:21) No one can
            withhold what Allah gives; And, no one can give what he resists.
          </p>
          <p className="my-5 text-3xl text-right leading-[50px]">
            لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
            مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا
            يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
          </p>
          <p className="my-5 text-lg font-semibold text-gray-800 italic">
            <span className="text-gray-950 font-semibold">
              Transliteration:
            </span>{" "}
            Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
            lahul-hamdu wa huwa &apos;alaa kulli shay&apos;in qadir. Allaahumma
            laa maani&apos;a limaa a&apos;taita wa laa mu&apos;tia limaa
            mana&apos;ta wa laa yanfa&apos;u dhal-jaddi minka al-jaddu
          </p>
          <p className="my-5 text-lg font-semibold text-gray-600">
            <span className="text-gray-800 font-semibold">Translation:</span>{" "}
            There is none worthy of worship except Allah alone with no partner
            or associate. He is the Dominion and to Him be all praise, and He is
            able to do all things. O Allah, one can withhold what You have given
            and none can give what You have withheld, and no wealth or fortune
            can benefit anyone for from You comes all wealth and fortune.
          </p>
          <h4 className="font-semibold text-xl">
            <span className="block text-[#1FA45B]">Reference:</span>
            Bukhari: 884
          </h4>
        </div>
        {/* icon start */}
        <div className="mt-10 flex justify-between">
          <div>
            <div className="bg-[#1FA45B] p-3 rounded-full">
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
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
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
    </>
  );
};

export default IntroductioToDua;
