const Header = ({setTheme, Theme}) => {
    return (
        <>
            <div className="head" style={Theme}>
                <h1 style={{color:Theme.color}}>Overreacted</h1>
                <button type="button" onClick={()=>{
                    console.log(Theme.backgroundColor);
                    if(Theme.backgroundColor === "white"){
                        setTheme({backgroundColor:"#282C35",color:"white"})
                    }else{
                        setTheme({backgroundColor:"white", color:"black"})
                    }
                }}>Toggle</button>
            </div>
            <main>
                <div className="card">
                    <h2>The WET Codbase</h2>
                    <p style={{color:Theme.color}}>
                        <i>Sunday 4th 2020 11min read</i> 
                        Come waste your time with me
                    </p>
                </div>
                <div className="card">
                    <h2>Goodby, Clean Code</h2>
                    <p style={{color:Theme.color}}>
                        <i>Friday 22th 2019 5min read</i> 
                        Let clean code guide you. Then let it go
                    </p>
                </div>
                <div className="card">
                    <h2>My Decade In Review</h2>
                    <p style={{color:Theme.color}}>
                        <i>Saturday 11th 2018 5min read</i> 
                        A person reflection
                    </p>
                </div>
                <div className="card">
                    <h2>What Are The React Team Principle</h2>
                    <p style={{color:Theme.color}}>
                        <i>Thursday 4th 2015 5min read</i>
                    </p>
                </div>
            </main>
        </>
    )
}

export default Header;