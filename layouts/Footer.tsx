import Container from 'components/Container';
import Socials from 'components/Socials';
import siteData from 'data/siteData';

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t mt-12 dark:bg-slate-900 dark:border-slate-800">
      <Container>
        <div className="md:flex md:items-center md:justify-between">
          <Socials />
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-base text-center text-gray-400 dark:text-gray-100">{siteData.footerText}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
