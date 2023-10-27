import React from 'react'
import { Linker } from './LinkButton.style'

interface LinkButtonProps{
    linkerText:string
    linkerHref:string
}
export const LinkButton = ({linkerText, linkerHref}: LinkButtonProps) => {
    return(
        <Linker href={linkerHref}>{linkerText}</Linker>
    )
}