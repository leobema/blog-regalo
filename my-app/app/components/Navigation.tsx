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
      <main className="p-5 justify-items-center mx-20">
        <nav>
          <ul className="flex flex-auto gap-8 border">
          {links.map(({label, route}) => (
            <li key={route} className="ml-4">
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
          </ul>
        </nav>
        </main>
)}