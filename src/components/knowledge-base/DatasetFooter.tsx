'use client';

// import { useTranslation } from "react-i18next"

const DatasetFooter = () => {
  return (
    <footer className="px-12 py-6 grow-0 shrink-0">
      <h3 className="text-xl font-semibold leading-tight text-gradient">
        {'dataset.didYouKnow'}
      </h3>
      <p className="mt-1 text-sm font-normal leading-tight text-gray-200">
        {'dataset.intro1'}
        <a
          className="inline-flex items-center gap-1 link"
          target="_blank"
          href="/"
        >
          {'dataset.intro2'}
        </a>
        {'dataset.intro3'}
        <br />
        {'dataset.intro4'}
        <a
          className="inline-flex items-center gap-1 link"
          target="_blank"
          href="/"
        >
          {'dataset.intro5'}
        </a>
        {'dataset.intro6'}
      </p>
    </footer>
  );
};

export default DatasetFooter;
