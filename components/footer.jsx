import Link from "next/link";

export default function Footer(){
    return (
        <div>
            <footer className="bg-gray-950 text-center p-4 mt-10 text-blue-50 grid">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 mb-6">
                    <div>
                        <h2 className="font-bold text-2xl">Horarios de ateción</h2>
                        <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                        <p>Sábados: 9:00 AM - 4:00 PM</p>
                        <p>Domingos: Cerrado</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">Contacto</h2>
                        <p>Teléfono: +1 234 567 890</p>
                        <p>Email: ColdCar@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">Dirección</h2>
                        <p>Calle Falsa 123, Ciudad, País</p>
                        <p>Código Postal 45678</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">Síguenos</h2>
                        <div className="flex gap-5 justify-center mt-2">
                        <Link href="https://www.facebook.com/ColdCar" target="_blank" className="hover:text-blue-600">
                            <img src="images/logo-facebook.jpg" className="w-10 h-10"></img>
                        </Link>
                            <Link href="https://www.whatsapp.com/ColdCar" target="_blank" className="hover:text-blue-600">
                                <img src="images/logo-whatsapp.jpg" className="w-10 h-10"></img>
                            </Link>
                        <Link href="https://www.instagram.com/ColdCar" target="_blank" className="hover:text-blue-600">
                            <img src="images/logo-instagram.jpg" alt="" className="w-10 h-10"/>
                        </Link>
                        <Link href="https://www.youtube.com/ColdCar" target="_blank" className="hover:text-blue-600">
                            <img src="images/logo-youtube.png" alt="" className="w-14 h-10"/>
                        </Link>
                        </div>
                    </div>
                </div>
                <p className="font-bold text-blue-50">© 2025 ColdCar. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}