import { Introduction } from "../Introduction/Introduction"
import { PlansCards } from "../PlansCards/PlansCards"
import { ToolsCards } from "../ToolsCards/ToolsCards"
import { Companies } from "../Companies/Companies"
import { StepsCards } from "../StepsCards/StepsCards"
import { Templates } from "../Templates/Templates"
import { DesignTeams } from "../DesignTeams/DesignTeams"
import { CarouselCards } from "../CarouselCards/CarouselCards"


export function Body (){
    return(
        <>
        <Introduction/>
        <PlansCards/>
        <StepsCards/>
        <Companies/>
        <ToolsCards/>
        <Templates/>
        <DesignTeams/>
        <CarouselCards/>
        </>
    )
}