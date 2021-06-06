import './Header.css'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";


function Header() {
    return (
        <div className="header">
            <img
        src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1622691568/image-removebg-preview_21_hnx02c.png"
        width={190}
        height={50}
        alt="logo"
      />
        <div className="socialLogos">
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <YouTubeIcon/>

        </div>
            

        </div>
    )
}

export default Header
