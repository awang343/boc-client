'use client';
import NavBar from "../../components/NavBar";
import bear_vector from "../../imgs/bear_vector.svg";
import WhiteWaterBanner from "../../components/WhiteWaterBanner";

export default function LandAcknowledgement() {
    return (
        
        <div className="h-full min-h-screen w-full">
            <div className=" w-screen flex justify-between px-8 py-4 z-10">
                <img src={bear_vector.src} alt="Bear Vector" />
                <NavBar></NavBar>
            </div>
            {/* Dynamic spacer based on header height */}
            <div style={{ minHeight: `5px` }}></div>

            <div id="content" className="text-center p-5">
                <div>
                    <h1 className="mx-60 text-black text-7xl font-bold mb-20 text-left leading-12">
                    Land Acknowledgement
                    </h1>
                </div>
                <div>
                    <h2 id="paragraph" className="mx-60 mb-8 text-lg font-light text-left leading-9 italic text-grey-50" style={{ color: '#3b3b3b' }}>
                “Brown University is located in Providence, Rhode Island, on lands that are within the ancestral 
                homelands of the Narragansett Indian Tribe. We acknowledge that beginning with colonization and 
                continuing for centuries the Narragansett Indian Tribe have been dispossessed of most of their 
                ancestral lands in Rhode Island by the actions of individuals and institutions. We acknowledge our 
                responsibility to understand and respond to those actions. The Narragansett Indian Tribe, whose ancestors 
                stewarded these lands with great care, continues as a sovereign nation today. We commit to working together 
                to honor our past and build our future with the truth.” 
                    </h2>
                </div>
                <hr className="border-t-1.5 border-gray-300 w-24 mx-auto my-4" />
                <div id="paragraph" className="mx-60 mt-8 mb-8 text-xl font-[100] text-left leading-10">
                    <p> As an Outing Club, where almost all of our activities relate to places and landscapes, remembering 
                        and respecting the people whose land we’re on is important. 
                    </p>
                </div>

                <div id="paragraph2" className="mx-60 mt-8 mb-8 text-xl font-[100] text-left leading-10">
                    <p> This is Brown the Land Acknowledgement statement developed by Brown for use by the community; we 
                        realize that it is incomplete for our purposes as we venture away from campus, but we are still 
                        learning and developing a better practice. 
                    </p>
                </div>

                <div id="paragraph3" className="mx-60 mt-8 mb-8 text-xl font-[100] text-left leading-10">
                    <p> Always feel free to reach out to us if you have any concerns, comments, or advice.
                    </p>
                </div>

                <div>
                    <img src="/images/about/landacknowledgement/treeslandacknowledgement.png" 
                    className="w-3/5 mx-auto mb-12"></img>
                </div>
                <div>
                    <img src="/images/about/landacknowledgement/riverlandacknowledgement.png"
                    className="w-3/5 mx-auto"></img>
                </div>
            </div>

        </div>
    )
}