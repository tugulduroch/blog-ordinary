import siteData from 'data/siteData';
import Container from './Container';

export default function HeroHeader() {
  return (
    <div className="py-24 text-center bg-gray-100">
      <Container>
        {siteData?.profileUrl && (
          <img
            src={siteData.profileUrl}
            className="w-28 h-28 mx-auto rounded-full"
            alt="profile"
          />        
          )}
        <div className="mt-4 text-3xl font-extrabold text-gray-900">
          {siteData.headerTitle}
        </div>
        <div className="max-w-2xl mx-auto mt-2 text-xl text-gray-500">
          {siteData.headerDescription}
        </div>
      </Container>
    </div>
  );
}
