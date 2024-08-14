import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Gazu Group</h1>
      <ul>
        <li><Link href="/subpages/page1">Subpage 1</Link></li>
        <li><Link href="/subpages/page2">Subpage 2</Link></li>
        <li><Link href="/subpages/page3">Subpage 3</Link></li>
        <li><Link href="/subpages/page4">Subpage 4</Link></li>
        <li><Link href="/subpages/page5">Subpage 5</Link></li>
      </ul>
    </div>
  );
};

export default Home;
