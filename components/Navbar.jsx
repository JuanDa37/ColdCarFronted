import Link from 'next/link';

export default function Navbar(){
    return(
        <nav className='flex justify-around items-center p-4 bg-gray-950 text-blue-50 fixed w-full top-0 z-10'>
                <Link href="/">
                    <h1 className="flex font-bold hover:opacity-80 uppercase text-2xl items-center">
                        <i className='bxr bxs-toy-car text-4xl'></i> <div className="flex">Cold<div className="text-blue-500 font-bold">Car</div></div>
                    </h1>
                </Link>
                <ul className='flex gap-10 align-middle items-center'>
                    <Link href="/">
                     <li className=" hover:text-blue-600 hover:font-bold font-bold">Home</li>
                    </Link>
                    <Link href="/about">
                     <li className=" hover:text-blue-600 hover:font-bold font-bold">About</li>   
                    </Link>
                    <Link href="/tienda">
                     <li className=" hover:text-blue-600 hover:font-bold font-bold"   >Tienda</li>   
                    </Link>
                    <Link href="/ingreso">
                     <li className="hover:text-blue-100 hover:font-bold font-bold rounded-md px-4 py-2 bg-blue-600"   >Ingreso</li>   
                    </Link>
                </ul>
            </nav>
    );
}