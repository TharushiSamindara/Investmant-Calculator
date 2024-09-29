import logo from '../assects/investment-calculator-logo.png'

export default function Header(){
    return(
        <header id="header">
            <img src = {logo} alt = "Investment logo"/>
            <h1>Investment Calculator</h1>
        </header>
    );
    
}