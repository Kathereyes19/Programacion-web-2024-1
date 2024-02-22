import { FooterSummary } from "../FooterSummary/FooterSummary"
import { TermsConditions } from "../TermsConditions/Terms-Conditions"
import { LowerNavbar } from "../LowerNavbar/LowerNavbar"
import { FooterToggle } from "../FooterToggle/FooterToggle"

export function Footer (){
    return(
        <>
        <FooterSummary/>
        <FooterToggle/>
        <TermsConditions/>
        <LowerNavbar/>
        </>
    )
}