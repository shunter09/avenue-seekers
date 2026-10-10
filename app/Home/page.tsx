

import BTNComponent2 from "@/app/components/explorebtn";
import SubscribeUser from "@/app/components/subscribeUser";



export default function Home() {


  return (

      <main>
        {/* Page 1: Hero */}
        <section
            className="snap-start min-h-[calc(100dvh-5.25rem)] font-fredoka text-[#405068] flex flex-col justify-center p-7 gap-13">
          <h1 className="text-6xl text-left">
            Find Volunteer, Internship, <br/>and Job Opportunities<br/> Right
            <span
                className="bg-linear-to-r from-[#db1a1a] to-[#405068] bg-clip-text text-transparent"> Here</span>,
            Right{" "}
            <span
                className="bg-linear-to-r from-[#db1a1a] to-[#405068] bg-clip-text text-transparent">Now</span>
          </h1>
          <p>Explore 1000+ listings filtered in the way you want</p>
          <div className="flex flex-row gap-10">
            <a href="#why-us"
               className="font-fredoka bg-[#2c687b] text-white hover:bg-[#2c687b]/80 transition w-40 h-10 border-none rounded-lg flex justify-center items-center">
              Why Us
            </a>
            <BTNComponent2/>
          </div>
        </section>

        {/* Page 2: Problem */}
        <section className="snap-start min-h-[calc(100dvh-5.25rem)] bg-white px-9 flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <p className="font-fredoka text-[#405068] text-7xl font-bold">10-15%</p>
            <h2 className="font-fredoka text-[#405068] text-3xl mt-4">
              of scraped jobs remain on a board well after an employer has closed recruitment
            </h2>

          </div>
        </section>

        <section className="snap-start min-h-[calc(100dvh-5.25rem)] bg-white px-9 flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <p className="font-fredoka text-[#405068] text-7xl font-bold">One Click Apply is an issue</p>
            <h2 className="font-fredoka text-[#405068] text-3xl mt-4">
              that floods Employers with unqualified applications, and puts a Job Seekers resume into a
              third-party pile
            </h2>

          </div>
        </section>

        <section className="snap-start min-h-[calc(100dvh-5.25rem)] bg-white px-9 flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <p className="font-fredoka text-[#405068] text-7xl font-bold">Free for Job Seekers</p>
            <h2 className="font-fredoka text-[#405068] text-3xl mt-4">
              and ample exposure for employers
            </h2>

          </div>
        </section>

        {/* Page 3: Why us */}
        <section
            className="snap-start min-h-[calc(100dvh-5.25rem)] bg-white px-9 flex flex-col items-center justify-center"
            id="why-us">
          <div className="w-full max-w-5xl">
            <h2 className="font-fredoka text-[#405068] text-2xl text-center mb-8">Why us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {title: "Verified listings", text: "We re-check jobs so closed roles disappear."},
                {title: "Save your time", text: "Apply only to roles that are actually open."},
                {title: "Always fresh", text: "Every job shows when it was last verified."},
                {
                  title: "No One Click Apply ",
                  text: "When you click to apply, get directly taken to the job application website."
                },
                {title: "No Log-In or Sign-Up", text: "Free to use for searching and applying"},
              ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-[#f5f7fa] p-6 text-center">
                    <h3 className="font-fredoka text-[#405068] text-xl mb-2">{item.title}</h3>
                    <p className="text-[#405068]/80">{item.text}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

          <SubscribeUser/>
      </main>

  )
}
