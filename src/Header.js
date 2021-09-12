function Header() {
    return (
    <header>
    <div className='header-inner'>
      <nav>
        <ul>
          <li>
            <a href='/'>Resume</a>
          </li>
          <li>
            <a href='/'>Projects</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className = "about">
      <h1>Piyush</h1>
      <h1>Singh</h1>
      <h3 style = {{marginTop:30}}>web developer /</h3>
      <h3 style = {{marginTop:10}}>a programmer. </h3>
    </div>
  </header>
  );
}

export default Header;