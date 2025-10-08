'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authenticate } from '@/utils/authModule';
import { UserStore } from '@/services/userStore'; 

// Inicializamos la tienda de usuarios para probar el CRUD
const userStore = new UserStore(); 

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        const user = authenticate(username, password);

        if (user) {
            setMessage(`¡Éxito! Bienvenido, ${user.username}. Redirigiendo...`);
            
            // --- DEMOSTRACIÓN CLASE CRUD Y DECORADOR (Mantiene los logs en la consola) ---
            console.log('\n--- PRUEBA CRUD y DECORADOR ---');
            const newUser = userStore.create({ username: 'nuevo_user' }); 
            console.log('Usuario Creado (con Decorador):', newUser); 
            userStore.list(); 
            userStore.update(newUser.id!, 'nombre_cambiado');
            userStore.remove(newUser.id!);
            console.log('-------------------------------\n');
            
            
            // Redirección exitosa
            setTimeout(() => {
                router.push('/dashboard');
            }, 1000); 

        } else {
            // Error de autenticación
            setMessage('Error: Usuario o contraseña incorrectos.');
        }
    };

    return (
        // Fondo con gradiente sutil y altura completa
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
            
            {/* Contenedor principal: estilo moderno con sombra y bordes redondeados */}
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-sm transition-all duration-500 hover:shadow-indigo-400/50">
                <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
                    Login 🔑
                </h1>
                
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Campo de Usuario */}
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            // Estilo de input mejorado con focus azul
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                            placeholder="admin o maria"
                            required
                        />
                    </div>
                    
                    {/* Campo de Contraseña */}
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // Estilo de input mejorado con focus azul
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                            placeholder="123 o abc"
                            required
                        />
                    </div>
                    
                    {/* Botón de Submit */}
                    <button
                        type="submit"
                        // Botón atractivo con color y efecto hover sutil
                        className="w-full bg-indigo-600 text-white font-bold text-lg p-3 rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                {/* Mensaje de estado */}
                {message && (
                    <p className={`mt-6 text-center p-3 rounded-lg font-medium ${
                        message.includes('Éxito') 
                            ? 'bg-green-100 text-green-700 border border-green-300' 
                            : 'bg-red-100 text-red-700 border border-red-300'
                    }`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}