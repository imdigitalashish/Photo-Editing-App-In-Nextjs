import React from 'react'
import styled from 'styled-components'

import styles from "../styles/Home.module.css"

import { useRouter } from 'next/router'
const CenterThis = styled.div`
display: flex;
justify-content: center;
`
export default function HeaderComponent() {


  const router = useRouter();


  const Header = styled.h1`
    color: white;
    width: fit-content;
    margin: 0 auto;
  `

  const NextPageButton = styled.button`
    padding-inline: 20px;
    padding-block: 10px;
    font-size: 18px;
    color: white;
    background-color: #379dec;
    border-radius: 10px;
    width: fit-content;
    display: flex;
    justify-content: center;
    cursor: pointer;
  `




  return (
    <div>

      <Header>Next Photo App</Header>
      <CenterThis>
        <NextPageButton onClick={() => router.push('/photoEdit')}>Button</NextPageButton>
      </CenterThis>
    </div>
  )
}
