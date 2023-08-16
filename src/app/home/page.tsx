import LeftNav from '&/components/left-nav/index';
import TweetFeed from '&/components/main-feed';
import RightNav from '&/components/right-nav/index';

export default function App() {
    return (
        <main className="main-wrapper min-h-screen w-100vw">
            <div className="main-sub-wrapper flex justify-center min-h-screen w-min mx-auto">
                <LeftNav />
                <div className='flex justify-start'>
                    <TweetFeed />
                    <RightNav />
                </div>
            </div>
        </main >
    )
}
