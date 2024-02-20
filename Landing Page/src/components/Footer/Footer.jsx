import { FooterSummary } from "../FooterSummary/FooterSummary"
import { TermsConditions } from "../TermsConditions/Terms-Conditions"
import { LowerNavbar } from "../LowerNavbar/LowerNavbar"

export function Footer (){
    return(
        <>
        <FooterSummary/>
        <TermsConditions/>
        <LowerNavbar/>
        </>
    )
}