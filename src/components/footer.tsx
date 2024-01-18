import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="rounded-t-3xl bg-indigo-500">
      <div className="flex flex-col px-5 py-10 md:px-20 md:flex-row md:py-20">
        <div className="mr-20 menu ">
          <h4 className="text-lg font-semibold text-white">MENU</h4>
          <ul className="mt-2 text-sm text-white">
            <li className="py-3">
              <Link href="#">
                Home
              </Link>
            </li>
            <li className="py-3">
              <Link href="#">
                About Us
              </Link>
            </li>
            <li className="py-3">
              <Link href="#">
                Contact Us
              </Link>
            </li>
            <li className="py-3">
              <Link href="#">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-5 mr-20 legal md:mt-0">
          <h4 className="text-lg font-semibold text-white">LEGAL</h4>
          <ul className="mt-2 text-sm text-white">
            <li className="py-3">
              <Link href="#">
                Term Of Service
              </Link>
            </li>
            <li className="py-3">
              <Link href="#">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-5 legal md:mt-0">
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <ul className="flex mt-2 text-2xl text-white">
            <li className="mr-3">
              <Link href="#">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="#">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-5 ml-0 md:ml-auto md:mt-0">
          <h2 className="text-2xl font-bold text-white">Bless Travel.</h2>
        </div>
      </div>
    </div>
  );
};
