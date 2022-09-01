import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag"


const OutsideLink = ({href, extraCssClasses, extraStyle, children}) => {

    return (
        <OutboundLink href={href} target="_blank" rel="noopener nofollow noreferrer" style={extraStyle} className={`${extraCssClasses ? extraCssClasses : ""}`}>
            {children}
        </OutboundLink>
    )
}

export default OutsideLink;