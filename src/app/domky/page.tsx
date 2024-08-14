"use client";

import "../../styles/home_banner.css";

import React, { useState } from "react";

const Domky = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <section className="home_banner relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/ext1.jpg)" }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-0 text-center text-white">
          <div className="h1-container bg-black bg-opacity-50 p-2">
            <h1 className="text-2xl sm:text-4xl font-bold ">
              Splňte si Svůj sen ještě dnes
            </h1>
          </div>
          <a
            href="tel:+12345678910"
            className="btn border-2 border-white text-white py-3 px-6 rounded transition duration-300 hover:bg-primary/30 hover:text-white hover:border-primary/80 "
          >
            +1 (234) 567-8910
          </a>
        </div>
      </section>

      {/* Popup content */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-700 bg-opacity-75">
          <div className="w-96 h-auto p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between h-full">
                <svg
                  className="w-12 h-12 m-auto mt-4 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
                  V ECO spojujeme moderní architekturu s Vašimi představami o
                  domově. Naše domy kombinují eleganci a moderní design s
                  funkcionalitou a pohodlím. Připravte se na bydlení, které
                  nejen oslní svým vzhledem, ale také poskytne ten správný pocit
                  domova. Naše modulární domky oslní nejen designem ale i svou
                  výdrží. Jsou tvořeny z toho nejlepšího dostupného materiálu.
                </p>
                <div className="flex items-center justify-between w-full gap-4 mt-8">
                  <button
                    type="button"
                    onClick={togglePopup}
                    className="py-2 px-4 bg-primary hover:bg-green-700 focus:ring-primary focus:ring-offset-green-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  >
                    Zavřít
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End of Popup content */}

      <section className="mt-16 overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mt-6">
              Moderní architektura
            </h2>

            {/* pc */}
            <p className="hidden text-gray-500 md:mt-4 md:block">
              Vítejte v ECO, kde spojujeme moderní architekturu s vašimi
              představami o domově. Naše domy kombinují eleganci a moderní
              design s funkcionalitou a pohodlím. Připravte se na bydlení, které
              nejen oslní svým vzhledem, ale také poskytne ten správný pocit
              domova.
            </p>
            {/* 2 mobile */}
            <p className="block mt-4 md:hidden text-gray-500">
              Vítejte v ECO, kde spojujeme nejmodernější architekturu s vašimi
              osobními představami.
              <br />
              Naše domy nejenže vynikají svou elegancí a moderním designem, ale
              také nabízejí prostor, který vyhovuje každé vaší potřebě.
            </p>

            <div className="mt-4 md:mt-6">
              <a
                className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition duration-300 hover:bg-primary/80 hover:text-white focus:outline-none focus:ring focus:ring-green-400 cursor-pointer"
                onClick={togglePopup}
              >
                Zjistit více
              </a>
            </div>
          </div>
        </div>

        <img
          src="/images/underhome1.jpeg"
          className="h-full w-full object-cover sm:h-[calc(100% - 2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100% - 4rem)] md:rounded-ss-[60px]"
        />
      </section>

      <section className="mt-12 mb-12">
        <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
          <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 cursor-pointer">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
              Rychlá výstavba
            </h3>
            <p className="py-4 text-gray-500 text-md">
              Rychlá výstavba díky našemu odbornému know-how a inovativním
              technologiím umožňuje efektivní a promptní realizaci projektů.
            </p>
          </div>

          <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 cursor-pointer">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
              Nízkoenergetické
            </h3>
            <p className="py-4 text-gray-500 text-md">
              Celoročně obyvatelné domy díky našim odborným znalostem a moderním
              technologiím nabízejí komfortní bydlení po celý rok.
            </p>
          </div>

          <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 cursor-pointer">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-primary rounded-md">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
              Dlouhá životnost
            </h3>
            <p className="py-4 text-gray-500 text-md">
              Díky pokročilým výrobním technologiím a pečlivému výběru vysoce
              kvalitních materiálů, které zajištují trvanlivost a spolehlivost
              našich konstrukcí.
            </p>
          </div>
        </div>
      </section>

      {/* Popup content */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-700 bg-opacity-75">
          <div className="w-96 h-auto p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between h-full">
                <svg
                  className="w-12 h-12 m-auto mt-4 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
                  Díky našim pokročilým výrobním technologiím jsme schopni
                  garantovat precizní a efektivní výrobní procesy, které stojí
                  na špičce současných trendů průmyslu. Tyto technologie nejenže
                  maximalizují kvalitu našich produktů a zvyšují jejich
                  spolehlivost, ale také výrazně snižují naši ekologickou stopu.
                  Integrace moderních výrobních procesů nám umožňuje flexibilně
                  reagovat na požadavky trhu a rychle se adaptovat na nové
                  technologické inovace.
                </p>
                <div className="flex items-center justify-between w-full gap-4 mt-8">
                  <button
                    type="button"
                    onClick={togglePopup}
                    className="py-2 px-4 bg-primary hover:bg-green-700 focus:ring-primary focus:ring-offset-green-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  >
                    Zavřít
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End Popup content */}
      <section className="mt-24 overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center">
        <img
          alt=""
          src="/images/modular3-dw.jpeg"
          className="h-full w-full object-cover sm:h-[calc(100% - 2rem)] sm:self-start sm:rounded-se-[30px] md:h-[calc(100% - 4rem)] md:rounded-se-[60px]"
        />

        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center rtl:sm:text-left ltr:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Pokročilé výrobní technologie
            </h2>

            <p className="text-gray-500 mt-4 md:mt-4 md:block">
              Díky pokročilým výrobním technologiím jsme schopni zabezpečit
              precizní a efektivní výrobní procesy. Tyto technologie nejenže
              maximalizují kvalitu našich produktů, ale také minimalizují
              ekologický dopad a zvyšují naši schopnost inovovat a přizpůsobit
              se měnícím se potřebám trhu.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary/80 focus:outline-none focus:ring focus:ring-green-400 cursor-pointer"
                onClick={togglePopup}
              >
                Zjistit více
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-16 bg-white">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              <span className="block">Nepřestávejte snít...</span>
              <span className="mt-2 block text-black">Výběr je na Vás</span>
            </h2>
            <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
              Modulové domy představují revoluční přístup k moderní
              architektuře. Jsou ideální volbou pro ty, kteří hledají
              flexibilitu a rychlost při stavbě bez kompromisů na kvalitě.
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <a
                  href="/catalog"
                  className="btn py-4 px-12 bg-primary hover:bg-green-700 focus:ring-primary focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Katalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 mb-16">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
              <p className="text-3xl text-center">Zaslat nezávaznou poptávku</p>
              <form className="flex flex-col pt-3 md:pt-8">
                <div className="flex flex-col pt-4">
                  <div className="flex relative">
                    <span className="inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="contact-name"
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Vaše jméno"
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-4">
                  <div className="flex relative">
                    <span className="inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="contact-email"
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-4">
                  <div className="flex relative">
                    <span className="inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="contact-phone"
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Telefonní číslo"
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-4 mb-12">
                  <div className="flex relative">
                    <span className="inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
                      </svg>
                    </span>
                    <textarea
                      id="contact-message"
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Vaše zpráva"
                      required
                      style={{ resize: "vertical" }}
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-primary shadow-md hover:text-white hover:bg-primary/80 focus:outline-none focus:ring-2"
                >
                  <span className="w-full">Odeslat</span>
                </button>
              </form>
              <div className="pt-12 pb-12 text-center">
                <p>
                  Nebo nám zavolejte&nbsp;
                  <a
                    href="#"
                    className="font-semibold underline hover:text-gray-400 transition duration-300"
                  >
                    +420 224 334 445
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 shadow-2xl">
            <img
              className="hidden object-cover w-full h-screen md:block"
              src="/images/ext1.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Domky;
