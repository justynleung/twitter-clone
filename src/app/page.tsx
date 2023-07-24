import LeftNav from '@/components/left-nav/index';
import TweetFeed from './components/main-feed';
import RightNav from './components/right-nav';

export default function App() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex flex-row min-h-screen w-3/5">
        <LeftNav />
        <TweetFeed />
        <RightNav />
      </div >
    </div >
  )
}

