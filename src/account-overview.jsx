import React from 'react';

import './account-overview.css';
import {Overview} from "./components/overview";
import {SalesDetailsContainer} from "./components/salesDetailsContainer";

export const AccountOverview = ({data}) => {
    console.log(data);

    return (
        <>
            <div className="contact-page">
                <Overview name={data.supportContact.name} email={data.supportContact.email} />
            </div>

            <div className="contact-page">
                <SalesDetailsContainer
                    linesAttempted={data.salesOverview.linesAttempted}
                    linesSaved={data.salesOverview.linesSaved}
                    successfulUploads={data.salesOverview.successfulUploads}
                    uploads={data.salesOverview.uploads}
                />
            </div>
        </>
        // <div className="AccountOverview">
        //   <FontAwesomeIcon icon={faHardHat} />
        //   Build your components here
        // </div>
    )
}

export default AccountOverview;
