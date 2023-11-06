import TimelineHeader from './timelineHeader';
import Intro from './intro';
import Photos from './photos';
import CreatePost from './createPost';
import MainPost from './mainPost';

export default function MinHanKyaw() {
  return (
    <div className="antialiased">
      <TimelineHeader />

      <div className="bg-gray-200 bg-opacity-80 px-52 grid grid-cols-12 pt-4 gap-4 z-0 pb-56">
        <div className="col-span-5 col-start-1 row-start-1 space-y-4">
          <Intro />
          <Photos />
        </div>
        <div className="flex-row row-start-1 col-span-7 col-start-6 space-y-4">
          <CreatePost />
          <MainPost />
        </div>
      </div>
    </div>
  );
}
