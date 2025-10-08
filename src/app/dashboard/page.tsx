// src/app/dashboard/page.tsx
import Link from 'next/link';

export default function DashboardPage() {
    return (
        // Fondo con gradiente sutil
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-4">
            
            {/* Contenedor de éxito */}
            <div className="bg-white p-12 rounded-2xl shadow-2xl text-center border-t-8 border-green-500">
                <h1 className="text-4xl font-extrabold text-green-700 mb-4">
                    🎉 ¡Acceso Completado!
                </h1>
                <p className="text-gray-600 mb-8 max-w-sm">
                    El flujo modular, la autenticación y la demostración CRUD/Decorador han funcionado exitosamente. ¡Bien hecho!
                </p>
                <Link 
                    href="/" 
                    // Botón para volver al login
                    className="inline-block bg-indigo-600 text-white font-semibold p-3 px-6 rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-200"
                >
                    Volver al Login
                </Link>
            </div>
        </div>
    );
}