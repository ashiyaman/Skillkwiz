import Link from "next/link";

export default function WhyChooseSection() {
  return (
    <section className="py-16 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[45%]">
          <img
            src="/images/homepage/why_choose_banner_2.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[45%]">
          <img
            src="/images/homepage/why_choose_banner_2.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-60">
            <img
              src="/images/homepage/home_globe.gif"
              alt=""
              className="w-full max-w-2xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2">
          Why Choose{" "}
          <span className="text-white">
            Skill<span className="text-[#f73e5d]">Kwiz</span>
          </span>{" "}
          ?
        </h2>

        <p className="text-center max-w-3xl mx-auto mb-12 text-sm">
          Discover our unique value propositions designed to enhance your
          recruitment strategy.
          <br />
          Experience the difference SkillKwiz can make in your organization.
        </p>

        {/* Cards */}
        <div
          className="
            flex flex-col md:flex-row
            justify-center items-center
            gap-6 md:gap-4
            mb-12
            relative
            h-auto md:h-[400px]
          "
        >
          {/* Skill Library */}
          <div
  className="
    bg-white rounded-lg p-6 text-black
    w-[92%] max-w-sm md:w-64 md:h-[350px]
    shadow-lg z-10
    transition-transform duration-300
    hover:-translate-y-2
    md:absolute md:left-[calc(50%-280px)] md:top-4
    md:-rotate-[25deg]
  "
>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/homepage/books.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>

            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3">
              Skill Library
            </h3>

            <p className="text-gray-700 text-center text-sm leading-6">
              Access our extensive library of skill assessments covering
              technical, professional, and soft skills for comprehensive
              candidate evaluation.
            </p>
          </div>

          {/* Secure Testing */}
          <div
            className="
              bg-white rounded-lg p-6 text-black
              w-full max-w-sm md:w-64 md:h-[350px]
              shadow-lg
              z-20
              transition-transform duration-300
              hover:-translate-y-2
              md:absolute md:left-[calc(50%-130px)]
            "
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/homepage/guard.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>

            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3">
              Secure Testing
            </h3>

            <p className="text-gray-700 text-center text-sm leading-6">
              Our testing is done in secure content-aware environments.
              Candidates are authenticated through multiple identification
              layers including biometric verification such as facial
              recognition, security numbers, which are then periodically
              validated throughout the test.
            </p>
          </div>

          {/* Flexible Pricing */}
          <div
            className="
              bg-white rounded-lg p-6 text-black
              w-full max-w-sm md:w-64 md:h-[350px]
              shadow-lg
              z-10
              transition-transform duration-300
              hover:-translate-y-2
              md:absolute md:right-[calc(50%-280px)] md:top-4
              md:rotate-[25deg]
            "
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/homepage/dollar.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>

            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3">
              Flexible Pricing
            </h3>

            <p className="text-gray-700 text-center text-sm leading-6">
              Our pricing model is designed to scale with your needs. Pay only
              for what you use with our credit-based system. Larger
              organizations can benefit from our Enterprise plan with unlimited
              testing and custom features.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-24 relative z-20">
          <h3 className="text-2xl font-bold mb-4">
            Join the Talent Revolution
          </h3>

          <p className="max-w-2xl mx-auto mb-8 text-sm">
            Take the first step towards transforming your hiring process. Make
            selections in line with our tried and tested platform.
          </p>

          <Link
            href="/services"
            className="
              inline-flex items-center justify-center
              bg-[#f7d03e] text-black
              px-8 py-3 rounded-md
              font-medium
              hover:bg-opacity-90
              transition-all
            "
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}