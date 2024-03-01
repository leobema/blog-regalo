import "../globals.css";
import Link from "next/link";

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
    label: 'Posts',
    route: '/posts'
}
]


export function Navigation () {
    return (
        <nav >
          <ul className="flex flex-auto gap-8 items-center border">
          {links.map(({label, route}) => (
            <li key={route} >
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
          </ul>
        </nav>
)}