import Link from "next/link";

export default function HamburgerMenu() {
    return (

        <ul className="mb-4 text-center">
            <li className="px-4 py-2 w-60">
                <Link href='/'>Cars</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Drivers</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Cart</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Appointments</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Account</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Contact</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Login</Link>
            </li>
        </ul>

    );
}