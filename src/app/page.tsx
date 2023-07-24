import LeftNav from '@/components/left-nav/index';
import TweetFeed from './components/main-feed';
import RightNav from './components/right-nav';

export default function App() {
  return (
    <div className="flex min-h-screen w-[1294px] mx-auto">
      <LeftNav />
      <main className='flex justify-start'>
        <TweetFeed />
        <RightNav />
      </main>
    </div >
  )
}

