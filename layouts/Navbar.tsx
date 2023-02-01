import Container from 'components/Container';
import Socials from 'components/Socials';
import siteData from 'data/siteData';
import Link from 'next/link';
import ThemeToggler from '../components/ThemeToggler';

export default function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-white border-b">
      <Container>
        <div className="flex justify-between py-4 ">
          <Link href="/" passHref>
            <div className="justify-start text-xl font-bold cursor-pointer">{siteData.author}</div>
          </Link>
            <div className='flex justify-end'>
            <ThemeToggler />
            <Socials />
            </div>
        </div>
        
      </Container>
    </div>
  );
}
