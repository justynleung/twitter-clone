import LeftNav from '&/components/left-nav/index';
import TweetFeed from '&/components/main-feed';
import RightNav from '&/components/right-nav';

export default function App() {
  return (
    <main className="min-h-screen w-100vw">
      <div className="flex min-h-screen w-[1294px] mx-auto">
        <LeftNav />
        <div className='flex justify-start'>
          <TweetFeed />
          <RightNav />
        </div>
      </div>
    </main >
  )
}

