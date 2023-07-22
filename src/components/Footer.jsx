import React from "react";
import { logo } from "../assets";

import { categoriesFooter, explorerFooter, socialsFooter } from "../data/Data";

const Footer = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px] px-7">
        <div className="col-span-2">
          <img src={logo} className="h-[25px]" />
          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className="py-2 text-[#6D737A]">Call : +123 400 123</h3>
          <h3 className="py-2 text-[#6D737A]">
            Praesent nulla massa, hendrerit <br></br> vestibulum gravida in,
            feugiat auctor felis.
          </h3>
          <h3 className="py-2 text-[#363A3D]">Email: example@mail.com</h3>
          <div className="flex gap-4 py-4">
            {socialsFooter.map((item, i) => {
              return (
                <a
                  href="#"
                  target="_blank"
                  className="p-4 bg-[#E9F8F3] rounded-xl text-primary hover:bg-primary hover:text-[#E9F8F3] text-3xl"
                  key={i}
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Explore</h3>
          <ul className="py-6 text-[#6D737A]">
            {explorerFooter.map((item, i) => {
              return (
                <li className="py-2" key={i}>
                  <a href="#" className="hover:text-primary">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Category</h3>
          <ul className="py-6 text-[#6D737A]">
            {categoriesFooter.map((item, i) => {
              return (
                <li className="py-2" key={i}>
                  <a href="#" className="hover:text-primary">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="max-[780px]:col-span-2">
          <h3 className="text-2xl font-bold">Subscribe</h3>
          <h3 className="py-2 text-[#6D737A]">
            Praesent nulla massa, hendrerit <br></br> vestibulum gravida in,
            feugiat auctor felis.
          </h3>
          <form className="py-4">
            <input
              className="bg-[#F2F3F4] p-4 w-full rounded"
              placeholder="Email here"
            />
            <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
