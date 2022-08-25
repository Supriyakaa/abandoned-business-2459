import { Box } from "@chakra-ui/react"
import { Container } from '@chakra-ui/react'
import { Button, ButtonGroup} from '@chakra-ui/react'
// import "../css/navbar"
// import { Box } from "@chakra-ui/react"
// import { } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




export const  Navbar  = () => {

     return (
       <Container style={{height:"100px",  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width:"100%"
       }}>

<Container  style={{display:"flex", justifyContent:"space-Between", fontSize:"20px",}}>
    <img src="https://mms.businesswire.com/media/20220302005343/en/1376587/22/Calendly_Primary_Logo_2_%282%29.jpg" alt="calendly" width="60px" />
<h1>Individul</h1>
<h1>Teams</h1>
<h1>Enterprice</h1>
<h1>Products</h1>
<h1>Price</h1>
<Button colorScheme='blue'>get start</Button>

  </Container>
  <Container style={{display:""}}>

  <Text fontSize='50px' color='#0b3558'>Easy scheduling

</Text>
<Text fontSize='50px' color='#49ade4'>ahead</Text>
<Text
fontSize='20px' color='#0b3558'
    fontFamily= 'Gilroy, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol'
    lineHeight= '2'>Calendly is your hub for scheduling meetings professionally and efficiently,
     eliminating the hassle of back-and-forth emails so you can get back to work.</Text>
     <Box boxSize='sm'>
  <Image src='https://storage.googleapis.com/leadpages-home.appspot.com/leadpages_blog/2018/09/Calendly@2x-1024x670.png' alt='Dan Abramov' />
</Box>
  </Container>
  <Carousel>
                <div>
                    <img src="https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBD…/f34b8ee5d40aa13af7b0fb015e86e8d3/Vector__19_.svg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.ctfassets.net/k0lk9kiuza3o/42drnxHf…r/7a7cf32f65bd03e0d1d48a6b02bde3d5/Loreal__1_.svg" />
                    <p className="legend">Legend 2</p>
                </div>
                
                <div>
                    <img src="https://images.ctfassets.net/k0lk9kiuza3o/4AUQ47IN…76e2e3b2fc5489cfa7b3f11c/Zendesk_wordmark__1_.svg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="	https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMR…/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="	https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBD…/f34b8ee5d40aa13af7b0fb015e86e8d3/Vector__19_.svg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="	https://images.ctfassets.net/k0lk9kiuza3o/5DR8HfsF…183fc00336917d96cef59832b5403/Twilio-logo-red.svg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://images.ctfassets.net/k0lk9kiuza3o/56cjEhKM…YD/e576716034690751c9781af8f41a5b3b/EBay_logo.svg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
       </Container>

 

      )
}
