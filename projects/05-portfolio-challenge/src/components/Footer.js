import { Stack } from "react-bootstrap"
import { EnvelopeFill, Facebook, Instagram, Pinterest, TelephoneFill, Twitter } from "react-bootstrap-icons"

export const Footer = () => {
    return(
        <Stack>
            <div className="border  rounded-top-3 d-flex flex-col justify-content-evenly">
                
                <div >
                    <h2>Contact Us</h2>
                    <Stack>
                        <div className="d-flex flex-row">
                            <TelephoneFill/> 
                            <p className="m-0">+44 7689723612</p>
                        </div>
                        <div className="d-flex flex-row">
                            <EnvelopeFill/>
                            <p className="m-0">____@gmail.com</p>
                        </div>
                    </Stack>   
                </div>
                <div>
                    <h2>Social Media</h2>
                    <Stack direction="horizontal" gap={3}>
                        <Facebook/>
                        <Instagram/>
                        <Twitter/>
                        <Pinterest/>
                    </Stack>
                </div>
            </div>
        </Stack>
    )
}