import { styled } from "@mui/material/styles";
import Image from "next/image";

const image = (props: any) => {
    return(
        <StyledImage 
        alt={props.alt}
        sx={{
            
        }}
        sizes="100vw"
        width="0"
        height="0"
        {...props}
        />
    );
}

export default image;

const StyledImage = styled(Image)`
{
    margin: '0 auto',
    width: '120%',
    display: 'block',
    height: 'auto',
}`;