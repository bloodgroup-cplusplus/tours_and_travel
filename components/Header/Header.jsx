'use client'
import React from "react";
import { Container,Row,Button } from "reactstrap";
import Link from "next/link";
import next_logo from "../../public/next.svg"

const Header=()=>{
    return (
        <header className="header">
            <Container>
                <Row>
                    <div className="nav_wrapper d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <img src={next_logo} alt="Tours and Travel Logo"/>
                        </div>
                        <div className="navigation">
                            <ul className="menu d-flex align-items-center gap-5">
                                <Link href="/">Home</Link>
                                <Link href="/login">Login</Link>
                                <Link href="/register">Register</Link>
                                <Link href="/tours">Tours</Link>                                
                            </ul>
                        </div>

                        <div className="nav__right d-flex align-items-center gap-4">

                        </div>

                    </div>
                </Row>
                </Container>
        </header>
    )
}

export default Header