//====> .Dependencies. <====//
import React from 'react';

//====> Header Component <====//
export default function Header() {
    return (
        <header className="bg-white pdy-10 pdx-30 container-fluid align-center-y align-between position-st pos-top-0 z-index-header">
            {/*===> Logo <===*/}
            <a href="/" className="logo">
                <img src="/logo-rtl.png" alt="Mitanok Editor" className="hidden-sm-down" width="121" height="36" />
                <img src="/fevicon.png" alt="Mitanok Editor" className="hidden-md-up" width="36" height="36" />
            </a>
            {/*===> Buttons <===*/}
            <div className="flexbox">

            </div>
        </header>
    );
}