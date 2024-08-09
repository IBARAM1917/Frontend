import React from 'react';
import { Footer } from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const FooterCom = () => {
    return (
      <Footer  container className="border border-t-8">
      <div className="w-full px-9 py-5">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-3">
          <div className='px-5'>
            <Footer.Brand
              href="#"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEpOGl9WzSH-zmcAVqUx8lp-DZUzJLDmFMg&s"
              alt="Logo"
              name="IBA Service"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link href="https://github.com/IBARAM1917">
                Github
              </Footer.Link>
              <Footer.Link href="#">LinkedIn</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between font-bold">
        <Footer.Copyright
          href="#"
          by="Abirami"
          year={new Date().getFullYear()}
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="https://github.com/IBARAM1917" icon={BsGithub} />
          <Footer.Icon href="#" icon={BsLinkedin} />
        </div>
      </div>
      </div>
    </Footer>
    );
};

export default FooterCom;