const About = () => {
  return (
    <div
      name="about"
      className=" flex flex-col justify-start items-center my-32"
    >
      <div className="max-w-[1260px] mx-auto px-2">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-red-900">
            𝑴𝒐𝒍𝒂𝒗𝒆 𝒀𝒐𝒖𝒏𝒈𝒔 𝑴𝒊𝒍𝒍𝒊𝒏𝒈 𝑪𝒐𝒓𝒑𝒐𝒓𝒂𝒕𝒊𝒐𝒏
          </h2>
          <p className="text-sm py-6 mt-2 text-justify text-gray-800    ">
            We started as Tiao Seng Sons Bazar in the late 1970s, as a grocery
            store in the center of Molave, Zamboanga del Sur. It was founded by
            the father of the empire, Mr. Jose Yu (Chinese Name: Yu Teekiong).
            He was accompanied by her wife Ms. Betty Ong Yu in developing the
            family business. Along with their booming business evolving from
            grocery store to hardware, cement distribution and rice milling.
            After the death of the monarch Mr. Jose Yu on 17th of May 1993, the
            whole clan adapted the Chinese full name of their late father and
            used at as their last name thus, the rise of the Yuteekiongs. By the
            start of the 90s era, Mr. Johnston Yuteekiong took over as President
            of the family business. After many years of being known as Youngs
            Marketing, it was only last November 10 of 2011 that the company is
            registered as Molave Youngs Milling Corporation and Yuteekiong
            Marketing Corporation engaging in Fertilizer and Cement
            Distribution, Palay buy and sell, Rice Manufacturing, lending and
            trucking. At present, we have clients all over Mindano such as in
            Zamboanga del Sur, Zamboanga del Norte, Lanao del Norte, Misamis
            Occidental and Misamis Oriental.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-2 px-2 text-center">
          <div className="border py-20 rounded-xl shadow-xl">
            <p className="font-bold text-3xl text-red-900">Vision</p>
            <p className="text-gray-800 mt-2 mx-3">
              To be the leading provider of high quality products and services,
              which demonstrates principled and excellent service towards our
              customers, suppliers, partners, and the community.
            </p>
          </div>
          <div className="border py-20 rounded-xl shadow-xl">
            <p className="font-bold text-3xl text-red-900">Mission</p>
            <p className="text-gray-800 mt-2 mx-3">
              To be highly competitive in the manufacturing, supply and demand
              of premium products while maintaining an equitable relationship
              with our business partners and providing outstanding customer
              service.
            </p>
          </div>
          {/* <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
