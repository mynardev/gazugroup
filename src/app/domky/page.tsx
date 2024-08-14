"use client";
import "../styles/home_banner.css";
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
          style={{ backgroundImage: "url(/images/ext1.jpg)" }} // Ensure the image path is correct
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-0 text-center text-white">
          <div className="h1-container bg-black bg-opacity-50 p-2">
            <h1 className="text-2xl sm:text-4xl font-bold">
              Splňte si Svůj sen ještě dnes
            </h1>
          </div>
          <a
            href="tel:+12345678910"
            className="btn border-2 border-white text-white py-3 px-6 rounded transition duration-300 hover:bg-primary/30 hover:text-white hover:border-primary/80"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
            {/* Text for different screen sizes */}
            <p className="hidden text-gray-500 md:mt-4 md:block">
              Vítejte v ECO, kde spojujeme moderní architekturu s vašimi
              představami o domově. Naše domy kombinují eleganci a moderní
              design s funkcionalitou a pohodlím. Připravte se na bydlení, které
              nejen oslní svým vzhledem, ale také poskytne ten správný pocit
              domova.
            </p>
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
          src="/images/underhome1.jpeg" // Ensure the image path is correct
          alt="Moderní architektura"
          className="h-full w-full object-cover sm:h-[calc(100% - 2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100% - 4rem)] md:rounded-ss-[60px]"
        />
      </section>

      {/* Features Section */}
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
              technologiím umožňuje snadnou a rychlou realizaci vašeho
              vysněného domova.
            </p>
          </div>
          {/* Repeat for other features */}
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              Moderní výrobní technologie
            </h2>
            <p className="mt-2 text-gray-600">
              Naše domy jsou vyráběny pomocí pokročilých výrobních technologií,
              které zajišťují jejich vysokou kvalitu a odolnost.
            </p>
          </div>
          {/* Add your content here */}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Kontaktujte nás
            </h2>
            <p className="mt-2 text-gray-600">
              Pokud máte jakékoli dotazy nebo přání, neváhejte nás kontaktovat
              prostřednictvím tohoto formuláře.
            </p>
          </div>
          <form className="mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Jméno
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Vaše jméno"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Váš e-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Zpráva
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Vaše zpráva"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block rounded bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-primary/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Odeslat
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Domky;
