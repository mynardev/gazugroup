import Link from 'next/link';
import '../styles/main.css';

const Home = () => {
  return (
    <div>
      <h1>Vitej na strankach projektu GAZU Group s.r.o. Na webovych strankach se prave pracuje. Ocekavana doba spusteni projektu: 11123/8 2024.</h1>
      <ul>
        <li><Link href="/subpages/page1">Domky</Link></li>
        <li><Link href="/subpages/page2">Haly</Link></li>
        <li><Link href="/subpages/page3">Fotovoltaika</Link></li>
        <li><Link href="/subpages/page4">Kamenne koberce</Link></li>
        <li><Link href="/subpages/page5">Betonove ploty</Link></li>
      </ul>
    </div>
  );
};

export default Home;
