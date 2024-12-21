import chefClaudeLogo from "./images/chef-claude.jpg"

export default function Header(){
    return(
        <header>
            <img src={chefClaudeLogo} height="85px"/>
            <h1>Chef Claude</h1>
        </header>
    )
}