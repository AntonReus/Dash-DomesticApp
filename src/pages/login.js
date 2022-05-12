function Login(){

  return(
    <>
    <main class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-rose-100 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
        <div>
            <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Inicia sesion</h1>
        </div>
        <form class="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6" action="">
            <div class="flex flex-col">
                <label class="text-sm font-bold text-gray-600 mb-1" for="email">Correo Electronico</label>
                <input class="border rounded-md bg-white px-3 py-2" type="text" name="email" id="email" placeholder="Introduce tu email" />
            </div>
                <div class="flex flex-col">
                <label class="text-sm font-bold text-gray-600 mb-1" for="password">Contraseña</label>
                <input class="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Introduce tu contraseña" />
            </div>
            <div class="flex justify-between text-sm">
                <div class="flex items-center space-x-2">
                    <input class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" type="checkbox" name="remember" id="remember" />
                    <label for="remember">Recordarme</label>
                </div>
            </div>
            <div>
                <input type="button" value="Inicia Sesión" class="w-full bg-blue-500 text-white rounded-md p-2" onclick="log()"/>
            </div>
        </form>
    </main>
    </>
  )
}

export default Login;