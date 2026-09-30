export default function Brands(){
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Marcas que atendemos</h1>
            <p className="text-center">Trabajamos con una amplia gama de marcas para ofrecerte el mejor servicio.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-items-center mt-6">
                <img src="images/ford-logo.png" alt="" className="w-30 h-30 object-contain"/>
                <img src="images/geely-logo.png" alt="" className="w-24 h-24 object-contain"/>
                <img src="images/logo-audi.jpg" alt="" className="w-24 h-24 object-contain"/>
                <img src="images/logo-chebrolet.jpg" alt="" className="w-24 h-24 object-contain"/>
                <img src="images/logo-kia.jpg" alt="" className="w-24 h-24 object-contain"/>
                <img src="images/logo-mazda.jpg" alt="" className="w-24 h-24 object-contain"/>
                <img src="images/logo-volksvawen2.jpg" alt="" className="w-24 h-24 object-contain"/>
                <img src="images/logo-volvo.jpg" alt="" className="w-24 h-24 object-contain"/>
            </div>
        </div>
    );
}