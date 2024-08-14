import Link from 'next/link';
import '../styles/main.css';

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link href="/domky">Domky</Link></li>
        <li><Link href="/subpages/page2">Haly</Link></li>
        <li><Link href="/subpages/page3">Fotovoltaika</Link></li>
        <li><Link href="/subpages/page4">Kamenne koberce</Link></li>
        <li><Link href="/subpages/page5">Betonove ploty</Link></li>
      </ul>
    </div>
  );
};

export default Home;
