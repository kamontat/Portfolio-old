import React from 'react'
import styled from 'react-emotion'

const Shift = styled('div')`
padding-top: 4px;
padding-bottom: 4px;
`

const Root = styled('div')`
height: 100% !important;
width: 100% !important;
`

const CenterContainer = styled('div')`
display:flex; 
position:absolute; 
top:0; 
bottom:0; 
right:0; 
left:0;
text-align: center;
border-style: solid;
border-width: 13px;
`

const InsideCenterContainer = styled('div')`
display:flex;
flex-direction: column;
justify-content: center;
margin:auto;
border-style: dashed;
border-width: 2px;
padding: 12px;
min-height: 30% !important;
min-width: 40% !important;
`


const Row = styled('div')`
display:flex;
align-self: center;
padding-top: 30px;
padding-bottom: 30px;
`

const Column = styled('div')`
display:flex;
flex-direction: column;
padding-left: 5px;
padding-right: 5px;
`

export {
  Shift,
  Root,
  CenterContainer,
  InsideCenterContainer,
  Row,
  Column
}
