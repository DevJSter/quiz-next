import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <h1>Mental Strength Test</h1>
        <Link href='/quiz'>
          <button>Start The test</button>
        </Link>
      </div>
    </main>
  );
}
