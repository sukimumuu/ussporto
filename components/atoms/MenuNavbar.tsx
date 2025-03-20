import Link from "next/link"

const MenuNavbar = () => {
  return (
    <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/project">Project</Link>
    </li>
    <li><a>About</a></li>
    </>
  )
}

export default MenuNavbar