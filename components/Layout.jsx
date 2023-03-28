const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className='px-10'>
          <h1>Alicia Keys</h1>
          <button>Menu</button>
        </div>
      </header>

      <main>{children}</main>
    </>
  )
}

export default Layout
