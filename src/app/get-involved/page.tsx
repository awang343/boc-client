'use client';
function FormElt({ label, name, type }: { label: string, name: string, type: string }) {
    let inputElt;
    if(type == "area") {
        inputElt = (<textarea name={name} className="rounded-sm p-1 border border-black w-full"/>)
    } else if(type == "text") {
        inputElt = (<input type="text" name={name} className="rounded-sm p-1 border border-black w-full" required/>)
    } else {
        inputElt = (<div>Check Code</div>)
    }
    return (
        <div className="p-2 w-full">
            <div className="text-left text-lg">{label}</div>
            {inputElt}
        </div>
    );
}

function Form() {
    const submitBtn = <button id="submit" type="submit" value="Submit"
    className="w-28 border-black bg-primary-red rounded-xl text-white h-10 mt-5 text-lg">Submit</button>

    return (
        <form id="data-form" action="#" target="_blank" method="POST" className="w-1/2 min-w-[340px] text-left">
            <div className="flex text-center">   
                <FormElt label="First name: " name="first-name" type="text" />
                <FormElt label="Last name: " name="last-name" type="text" />
            </div>
            
            <FormElt label="Email: *" name="email" type="text" />
            <FormElt label="Institution/affiliation: *" name="org" type="text"/>
            <FormElt label="Reason for downloading: *" name="reason" type="text"/>

            <FormElt label="Plan to merge with another source?" name="merge" type="area"/>
            <FormElt label="How did you hear about us?" name="hear" type="area"/>

            <div className="text-lg flex px-2 items-start">
                <input type="checkbox" name="mail" className="basis-1 mr-5 mt-[5px] w-5 h-5" />
                <span>Join our mailing list?</span>
            </div>
            <div className="text-lg flex px-2 items-start">
                <input className="mr-5 mt-[5px] w-5 h-5 basis-1" type="checkbox" name="tos" required/>
                <span>Agree to terms and conditions</span>
            </div>
            <div className="mb-5"></div>
            {submitBtn}
        </form>
    )
}

export default function GetInvolved() {
    return (
    <div className="h-full min-h-screen w-full">
        {/* Dynamic spacer based on header height */}
        <div style={{ minHeight: `10px` }}></div>

        {/* Site content */}
        <div id="content" className="text-center p-5">
            <div id="title-text" className="mt-[5vh] mb-4 text-4.5xl-responsive font-bold text-primary font-circ-std">
                Mailing List Signup
                <div id="explanation" className="mb-8 text-lg font-[100]">
                    Fill out the form to sign up for the mailing list.
                </div>
            </div>
            
            <div className="flex justify-center">
            <Form/>
            </div>
        </div>
        <div className="mb-[5vh]"></div>
    </div>);
}

