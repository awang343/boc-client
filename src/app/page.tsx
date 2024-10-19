import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="bg-splash_page_background container-xl">

        <div className="w-1/2 absolute right-0">
            <NavBar></NavBar>
        </div>

        <div className="h-full p-9 container mx-auto py-10 w-1/2 ml-20">
            <section className="flex-auto justify-end mb-8">
                <h2 className="text-6xl text-white font-montserrat font-semibold mb-4">BROWN OUTING CLUB </h2>
                <p className="mb-2 text-white font-montserrat text-justify ">
                    The Brown Outing Club facilitates getting students together and into the outdoors. 
                    The club runs trips throughout the school year in New England and along the east coast. 
                    The BOC is entirely student organized and operated, with new students joining the leadership every year. 
                    If you are looking to explore the mountains, woods, rivers, and bays of the east during college, the BOC will help you get there!
                </p>
            </section>
        </div>
    </div>
  );
}
