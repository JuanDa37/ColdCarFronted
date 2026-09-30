export default function AboutUs(){
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Sobre Nosotros</h1>
            <p>En ColdCar, nos dedicamos a ofrecer servicios de reparación y mantenimiento de vehículos de alta calidad. Nuestro equipo de profesionales está comprometido con la excelencia y la satisfacción del cliente.</p>
            <div className="flex flex-col sm:flex-row gap-10 my-5">
                <div className="bg-gray-300 p-5 rounded">
                <h2 className="font-bold text-xl">Nuestra Misión</h2>
                <p>Proporcionar servicios automotrices confiables y asequibles que superen las expectativas de nuestros clientes.</p>
                </div>
                <div className="bg-gray-300 p-5 rounded">
                <h2 className="font-bold text-xl">Nuestra Visión</h2>
                <p>Ser el taller de reparación de vehículos más reconocido y respetado en la industria, conocido por nuestra integridad y calidad.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center my-5">
                <div>
                    <h2 className="font-bold text-4xl">4</h2>
                    <p>Años de experiencia</p>
                </div>
                <div>
                    <h2 className="font-bold text-4xl">+3000</h2>
                    <p>Clientes satisfechos</p>
                </div>
                <div>
                    <h2 className="font-bold text-4xl">20</h2>
                    <p>Mécanicos expertos</p>
                </div>
                <div>
                    <h2 className="font-bold text-4xl">12</h2>
                    <p>Marcas atendidas</p>
                </div>
            </div>
        </div>
    );
}