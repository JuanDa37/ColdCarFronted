
export default function Services(){
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Nuestros Servicios</h1>
            <p className="text-center">Ofrecemos una variedad de servicios para mantener tu vehículo en óptimas condiciones.</p>
            <div className="grid grid-cols-1 gap-4 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-5">
                <div className="text-center bg-gray-950 p-5 rounded-lg">
                    <i className='bxr  bxs-spanner text-blue-600 text-8xl xl:text-9xl'></i> 
                    <h2 className="font-bold text-xl xl:text-3xl text-blue-50">Reparación de vehículos</h2>
                </div>
                <div className="text-center bg-gray-950 p-5 rounded-lg">
                    <i className='bxr  bxs-cog text-blue-600 text-8xl xl:text-9xl'></i> 
                    <h2 className="font-bold text-xl xl:text-3xl text-blue-50">Mantenimiento preventivo</h2>
                </div>
                <div className="text-center bg-gray-950 p-5 rounded-lg">
                    <i className='bxr  bxs-analyze text-blue-600 text-8xl xl:text-9xl'></i> 
                    <h2 className="font-bold text-xl xl:text-3xl text-blue-50">Diagnóstico general y servicio de scanner</h2>
                </div>
                <div className="text-center bg-gray-950 p-5 rounded-lg">
                    <i className='bxr  bxs-block text-blue-600 text-8xl xl:text-9xl'></i> 
                    <h2 className="font-bold text-xl xl:text-3xl text-blue-50">Servicio de prenos y suspensión</h2>
                </div>
                <div className="text-center bg-gray-950 p-5 rounded-lg">
                    <i className='bxr  bxs-shield-circle text-blue-600  text-8xl xl:text-9xl'></i> 
                    <h2 className="font-bold text-xl xl:text-3xl text-blue-50">Cambio de llantas y balanceo</h2>
                </div>
                <div className="text-center bg-gray-950 p-5 rounded-lg">
                    <i className='bxr  bxs-user text-blue-600 text-8xl xl:text-9xl'></i> 
                    <h2 className="font-bold text-xl xl:text-3xl text-blue-50">Asesorías profesionales</h2>
                </div>
            </div>
        </div>
    );
}